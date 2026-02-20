import { MetadataRoute } from 'next';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://altixcodeit.com';

    // Base routes
    const routes = [
        '',
        '/services',
        '/about',
        '/careers',
        '/contact',
        '/blogs',
        '/social-media',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    try {
        await dbConnect();
        const posts = await (Blog as any).find({ status: 'published' }).select('slug updatedAt').lean();

        const blogRoutes = posts.map((post) => ({
            url: `${baseUrl}/blogs/${post.slug}`,
            lastModified: post.updatedAt || new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        return [...routes, ...blogRoutes];
    } catch (error) {
        console.error("Sitemap generation error:", error);
        return routes;
    }
}
