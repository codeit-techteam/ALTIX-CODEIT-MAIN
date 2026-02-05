"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";
import { FadeUp } from "@/components/ui/ScrollAnimations";
import { FAQSection } from "@/components/ui/FAQSection";

export default function BlogList({ initialPosts = [] }) {
    const [posts, setPosts] = useState(initialPosts);
    const [activeCategory, setActiveCategory] = useState("All Blogs");
    const [searchTerm, setSearchTerm] = useState("");

    const CATEGORIES = ["All Blogs", "Tech Strategy", "AI & ML", "Social Media", "Engineering"];

    // Helper to determine category based on title keywords (fallback)
    const getCategory = (post) => {
        if (post.category) return post.category;

        const title = (post.title || "").toLowerCase();
        if (title.includes("ai") || title.includes("ml") || title.includes("gpt")) return "AI & ML";
        if (title.includes("social") || title.includes("media")) return "Social Media";
        if (title.includes("strategy") || title.includes("business")) return "Tech Strategy";
        return "Engineering";
    };

    const filteredPosts = posts.filter(post => {
        const matchesCategory = activeCategory === "All Blogs" || getCategory(post) === activeCategory;
        const matchesSearch = (post.title || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (post.excerpt || "").toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container mx-auto px-6">
            <FadeUp className="text-center max-w-4xl mx-auto mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Latest Engineering Insights & <span className="text-[#66fcf1]">AI Trends</span>
                </h1>
                <p className="text-xl text-gray-400">
                    Thought leadership and technical deep dives from our team.
                </p>
            </FadeUp>

            {/* Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${activeCategory === cat
                                ? "bg-[#66fcf1] text-black border-[#66fcf1]"
                                : "bg-white/5 text-gray-400 border-white/10 hover:border-[#66fcf1]/50 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#0b0c10] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#66fcf1]/50 placeholder:text-gray-600 transition-colors"
                    />
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {filteredPosts.length === 0 ? (
                    <div className="col-span-full text-center py-20 bg-white/5 rounded-2xl border border-white/10 border-dashed">
                        <p className="text-gray-400">No posts found matching your criteria.</p>
                        <button
                            onClick={() => { setActiveCategory("All Blogs"); setSearchTerm(""); }}
                            className="mt-4 text-[#66fcf1] hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    filteredPosts.map((post, i) => {
                        const category = getCategory(post);
                        const formattedDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "Recently";

                        return (
                            <div key={post._id || i} className="group cursor-pointer h-full">
                                <div className="bg-[#0b0c10] rounded-3xl overflow-hidden border border-white/10 group-hover:border-[#66fcf1]/50 transition-all duration-300 h-full flex flex-col relative shadow-xl hover:shadow-[#66fcf1]/10">
                                    <Link href={`/blogs/${post.slug}`} className="absolute inset-0 z-30" aria-label={`Read ${post.title}`} />

                                    {/* Image Container */}
                                    <div className="h-48 overflow-hidden relative">
                                        {post.coverImage ? (
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent opacity-80" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-40">
                                            <span className="px-3 py-1 rounded-full bg-[#66fcf1] text-black text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                                {category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow -mt-4 relative z-20">
                                        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-[#66fcf1] transition-colors leading-tight line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-400 mb-6 flex-grow line-clamp-3 text-sm leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex flex-col gap-4 mt-auto">
                                            <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
                                                <span className="text-gray-300">By {post.author || "Altix Team"}</span>
                                                <span className="w-1 h-1 rounded-full bg-gray-600" />
                                                <span>{formattedDate}</span>
                                            </div>

                                            <div className="pt-4 border-t border-white/5 flex items-center text-[#66fcf1] font-bold text-sm group-hover:gap-2 transition-all w-fit">
                                                Read Article <ArrowRight size={16} className="ml-2 group-hover:ml-0 transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>

            {/* Internal Links / CTA Section */}
            <div className="grid md:grid-cols-2 gap-6 mb-24">
                <Link href="/services" className="group relative overflow-hidden rounded-2xl bg-[#121212] border border-white/10 p-8 hover:border-[#66fcf1]/30 transition-all">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#66fcf1] transition-colors">Explore Our Services</h3>
                        <p className="text-gray-400 mb-4">Discover how we build scalable applications and AI solutions.</p>
                        <span className="inline-flex items-center text-[#66fcf1] font-semibold">View Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>
                </Link>
                <Link href="/about" className="group relative overflow-hidden rounded-2xl bg-[#121212] border border-white/10 p-8 hover:border-[#66fcf1]/30 transition-all">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#66fcf1] transition-colors">About Our Team</h3>
                        <p className="text-gray-400 mb-4">Meet the IITian engineers and strategists behind Altix Codeit.</p>
                        <span className="inline-flex items-center text-[#66fcf1] font-semibold">Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>
                </Link>
            </div>

            <FAQSection />
        </div>
    );
}
