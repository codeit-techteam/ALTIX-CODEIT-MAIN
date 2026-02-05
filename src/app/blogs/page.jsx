import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import BlogList from "@/components/features/BlogList";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";

// ISR: Revalidate every hour
export const revalidate = 3600;

async function getBlogs() {
    try {
        await dbConnect();
        // Plain object for serialization
        const posts = await Blog.find({}).sort({ createdAt: -1 }).lean();

        // Convert _id and dates to string to avoid serialization issues
        return posts.map(post => ({
            ...post,
            _id: post._id.toString(),
            createdAt: post.createdAt ? post.createdAt.toISOString() : null,
            updatedAt: post.updatedAt ? post.updatedAt.toISOString() : null,
        }));
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        return [];
    }
}

export default async function BlogsPage() {
    const posts = await getBlogs();

    return (
        <div className="min-h-screen flex flex-col bg-[#050505]">
            <Navbar />
            <main className="flex-grow pt-32 pb-24">
                <BlogList initialPosts={posts} />
            </main>
            <Footer />
        </div>
    );
}
