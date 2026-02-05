import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import dbConnect from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FadeIn, FadeUp } from "@/components/ui/ScrollAnimations";

// ISR: Revalidate every hour
export const revalidate = 3600;

export async function generateStaticParams() {
    try {
        await dbConnect();
        // Use lean() for performance and select only needed fields
        const posts = await Blog.find({}).select('slug').lean();
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    await dbConnect();
    const post = await Blog.findOne({ slug });

    if (!post) {
        return {
            title: "Post Not Found | Altix Codeit",
        };
    }

    const title = `${post.title} | Altix Codeit`;
    const description = post.excerpt;
    const url = `https://www.altixcodeit.com/blogs/${slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            publishedTime: post.createdAt,
            authors: [post.author],
            images: [
                {
                    url: post.coverImage || "/og-default.jpg",
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [post.coverImage || "/og-default.jpg"],
        },
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    await dbConnect();
    const post = await Blog.findOne({ slug });

    if (!post) {
        return notFound();
    }

    // JSON-LD Schema for SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.coverImage ? [post.coverImage] : [],
        "author": {
            "@type": "Person",
            "name": post.author || "Altix Codeit Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Altix Codeit",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.altixcodeit.com/logo.png"
            }
        },
        "datePublished": post.createdAt,
        "dateModified": post.updatedAt || post.createdAt,
    };

    // Convert Date to string for display consistency
    const dateString = new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Sanitize content to remove AI citation artifacts that break MDX
    const sanitizedContent = post.content.replace(/:\s*contentReference\[.*?\]\{.*?\}/g, "");

    return (
        <div className="min-h-screen flex flex-col bg-[#050505]">
            <Navbar />

            {/* Structured Data Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <main className="flex-grow pt-32 pb-24">
                <article className="container mx-auto px-6 max-w-4xl">
                    <FadeUp>
                        <Link href="/blogs" className="inline-flex items-center text-gray-400 hover:text-[#66fcf1] mb-8 transition-colors group">
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
                        </Link>

                        <div className="mb-12">
                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <Calendar size={14} className="text-[#66fcf1]" /> {dateString}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <User size={14} className="text-[#66fcf1]" /> {post.author}
                                </span>
                                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                                    <Clock size={14} className="text-[#66fcf1]" /> 5 min read
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                                {post.title}
                            </h1>

                            {/* Categories */}
                            {post.category && (
                                <div className="mb-8">
                                    <span className="px-3 py-1 rounded-full bg-[#66fcf1] text-black text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            )}

                            <p className="text-xl text-gray-300 border-l-4 border-[#66fcf1] pl-6 py-2 italic bg-white/5 rounded-r-lg mb-8">
                                {post.excerpt}
                            </p>

                            {/* Cover Image */}
                            {post.coverImage && (
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 to-transparent" />
                                </div>
                            )}
                        </div>
                    </FadeUp>

                    <FadeIn delay={0.2} className="prose prose-invert prose-lg max-w-none 
                        prose-headings:text-white prose-headings:font-bold
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10
                        prose-h3:text-2xl prose-h3:text-[#66fcf1]
                        prose-p:text-gray-300 prose-p:leading-relaxed
                        prose-a:text-[#66fcf1] prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-white
                        prose-code:text-[#66fcf1] prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal
                        prose-pre:bg-[#0b0c10] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl
                        prose-li:text-gray-300 prose-li:marker:text-[#66fcf1]
                        prose-img:rounded-xl prose-img:border prose-img:border-white/10">
                        <MDXRemote source={sanitizedContent} />
                    </FadeIn>
                </article>
            </main>

            <Footer />
        </div>
    );
}
