"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { FileText, Briefcase, LogOut, Upload, User, Loader2, Plus, X, Trash2, Edit } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminDashboardClient() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("blogs");
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [items, setItems] = useState([]); // List of blogs or jobs
    const [isEditing, setIsEditing] = useState(false); // Edit mode flag
    const [editId, setEditId] = useState(null); // ID of item being edited

    // Blog State
    const [blogData, setBlogData] = useState({
        title: "",
        excerpt: "",
        author: "",
        content: "",
        category: "Engineering",
        coverImage: null,
        status: "draft",
        metaTitle: "",
        metaDescription: "",
        keywords: ""
    });

    // Career State
    const [jobData, setJobData] = useState({
        title: "",
        type: "",
        tags: "",
        description: "",
    });

    // Fetch Items on Tab Change
    useEffect(() => {
        fetchItems();
        // Reset forms when switching tabs
        resetForms();
    }, [activeTab]);

    const fetchItems = async () => {
        try {
            const endpoint = activeTab === "blogs" ? "/api/blogs?admin=true" : "/api/careers";
            const res = await fetch(endpoint);
            if (res.ok) {
                const data = await res.json();
                setItems(data);
            }
        } catch (error) {
            console.error("Failed to fetch items", error);
        }
    };

    const resetForms = () => {
        setBlogData({
            title: "", excerpt: "", author: "", content: "", category: "Engineering", coverImage: null,
            status: "draft", metaTitle: "", metaDescription: "", keywords: ""
        });
        setJobData({ title: "", type: "", tags: "", description: "" });
        setIsEditing(false);
        setEditId(null);
    };

    const handleLogout = () => {
        document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        router.push("/admin/login");
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        try {
            const endpoint = activeTab === "blogs" ? `/api/blogs?id=${id}` : `/api/careers?id=${id}`;
            const res = await fetch(endpoint, { method: "DELETE" });
            if (res.ok) {
                setSuccessMsg("Item Deleted!");
                setTimeout(() => setSuccessMsg(""), 3000);
                fetchItems();
            }
        } catch (error) {
            alert("Failed to delete");
        }
    };

    const handleEdit = (item) => {
        setIsEditing(true);
        setEditId(item._id);

        if (activeTab === "blogs") {
            setBlogData({
                title: item.title,
                excerpt: item.excerpt,
                author: item.author,
                content: item.content,
                category: item.category || "Engineering",
                coverImage: null, // Keep null unless changing
                status: item.status || "draft",
                metaTitle: item.metaTitle || "",
                metaDescription: item.metaDescription || "",
                keywords: item.keywords || ""
            });
        } else {
            setJobData({
                title: item.title,
                type: item.type,
                tags: item.tags.join(", "),
                description: item.description
            });
        }
    };

    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = new FormData();
            Object.keys(blogData).forEach(key => {
                if (blogData[key] !== null) data.append(key, blogData[key]);
            });

            if (isEditing) {
                data.append("id", editId);
            }

            const method = isEditing ? "PUT" : "POST";
            const res = await fetch("/api/blogs", { method, body: data });

            if (res.ok) {
                setSuccessMsg(isEditing ? "Blog Updated!" : "Blog Posted!");
                resetForms();
                fetchItems();
                setTimeout(() => setSuccessMsg(""), 3000);
            } else {
                const errorData = await res.json();
                alert(errorData.error || "Failed to save blog.");
            }
        } catch (err) {
            console.error(err);
            alert("Error saving blog.");
        } finally {
            setLoading(false);
        }
    };

    const handleJobSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const tagsArray = jobData.tags.split(",").map(t => t.trim());
            const payload = { ...jobData, tags: tagsArray };

            if (isEditing) {
                payload.id = editId;
            }

            const method = isEditing ? "PUT" : "POST";
            const res = await fetch("/api/careers", {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setSuccessMsg(isEditing ? "Job Updated!" : "Job Posted!");
                resetForms();
                fetchItems();
                setTimeout(() => setSuccessMsg(""), 3000);
            } else {
                alert("Failed to save job.");
            }
        } catch (err) {
            console.error(err);
            alert("Error saving job.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow pt-32 pb-12 container mx-auto px-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
                        <p className="text-gray-400">Manage content and hiring.</p>
                    </div>
                    <Button variant="outline" onClick={handleLogout} className="flex gap-2">
                        <LogOut size={16} /> Logout
                    </Button>
                </div>

                {successMsg && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 text-green-400 rounded-lg flex items-center justify-center font-bold animate-pulse">
                        {successMsg}
                    </div>
                )}

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab("blogs")}
                        className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === "blogs" ? "bg-primary text-black shadow-lg shadow-primary/20" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
                    >
                        <FileText size={18} /> Manage Blogs
                    </button>
                    <button
                        onClick={() => setActiveTab("careers")}
                        className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === "careers" ? "bg-primary text-black shadow-lg shadow-primary/20" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
                    >
                        <Briefcase size={18} /> Manage Jobs
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LIST VIEW */}
                    <div className="lg:col-span-1 space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4">Existing {activeTab === "blogs" ? "Posts" : "Openings"}</h3>
                        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                            {items.length === 0 ? (
                                <p className="text-gray-500 text-sm">No items found.</p>
                            ) : (
                                items.map((item) => (
                                    <div key={item._id} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-colors group">
                                        <h4 className="font-bold text-white mb-1 truncate">{item.title}</h4>
                                        <div className="flex justify-between items-center mt-3">
                                            <span className="text-xs text-gray-400">
                                                {new Date(item.createdAt).toLocaleDateString()}
                                            </span>
                                            <div className="flex gap-2">
                                                <button onClick={() => handleEdit(item)} className="p-1.5 rounded bg-blue-500/20 text-blue-400 hover:bg-blue-500 hover:text-white transition-colors">
                                                    <Edit size={14} />
                                                </button>
                                                <button onClick={() => handleDelete(item._id)} className="p-1.5 rounded bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors">
                                                    <Trash2 size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* FORM VIEW */}
                    <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {isEditing ? "Edit Item" : (activeTab === "blogs" ? "Create New Article" : "Post New Job Opening")}
                            </h2>
                            {isEditing && (
                                <button onClick={resetForms} className="text-sm text-primary hover:underline">Cancel Edit</button>
                            )}
                        </div>

                        {/* BLOG FORM */}
                        {activeTab === "blogs" && (
                            <form onSubmit={handleBlogSubmit} className="space-y-6">
                                <div className="grid gap-6">
                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Title</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                            value={blogData.title}
                                            onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-gray-400 text-sm mb-1 block">Author</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                                value={blogData.author}
                                                onChange={(e) => setBlogData({ ...blogData, author: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm mb-1 block">Cover Image {isEditing && "(Leave blank to keep current)"}</label>
                                            <input
                                                type="file"
                                                required={!isEditing}
                                                className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/10 file:text-white hover:file:bg-white/20"
                                                onChange={(e) => setBlogData({ ...blogData, coverImage: e.target.files[0] })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Related Content (Category)</label>
                                        <select
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                            value={blogData.category}
                                            onChange={(e) => setBlogData({ ...blogData, category: e.target.value })}
                                        >
                                            <option value="Engineering">Engineering</option>
                                            <option value="Tech Strategy">Tech Strategy</option>
                                            <option value="AI & ML">AI & ML</option>
                                            <option value="Social Media">Social Media</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Excerpt</label>
                                        <textarea
                                            required
                                            rows={3}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none resize-none"
                                            value={blogData.excerpt}
                                            onChange={(e) => setBlogData({ ...blogData, excerpt: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Content (Markdown)</label>
                                        <textarea
                                            required
                                            rows={10}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none font-mono text-sm"
                                            value={blogData.content}
                                            onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
                                        />
                                    </div>

                                    {/* SEO & Status Section */}
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
                                        <h4 className="text-white font-bold flex items-center gap-2">
                                            <FileText size={16} className="text-primary" /> SEO & Publishing
                                        </h4>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="text-gray-400 text-sm mb-1 block">Status</label>
                                                <select
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                                    value={blogData.status}
                                                    onChange={(e) => setBlogData({ ...blogData, status: e.target.value })}
                                                >
                                                    <option value="draft">Draft (Hidden)</option>
                                                    <option value="published">Published (Live)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-gray-400 text-sm mb-1 block">Keywords (comma separated)</label>
                                                <input
                                                    type="text"
                                                    className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                                    value={blogData.keywords}
                                                    onChange={(e) => setBlogData({ ...blogData, keywords: e.target.value })}
                                                    placeholder="nextjs, seo, growth"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-gray-400 text-sm mb-1 block">Meta Title (Optional)</label>
                                            <input
                                                type="text"
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                                value={blogData.metaTitle}
                                                onChange={(e) => setBlogData({ ...blogData, metaTitle: e.target.value })}
                                                placeholder="Defaults to post title if empty"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-gray-400 text-sm mb-1 block">Meta Description (Optional)</label>
                                            <textarea
                                                rows={2}
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none resize-none"
                                                value={blogData.metaDescription}
                                                onChange={(e) => setBlogData({ ...blogData, metaDescription: e.target.value })}
                                                placeholder="Defaults to excerpt if empty"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <Button type="submit" variant="glow" disabled={loading} className="w-full">
                                    {loading ? <Loader2 className="animate-spin" /> : (isEditing ? "Update Blog" : "Publish Blog")}
                                </Button>
                            </form>
                        )}

                        {/* JOB FORM */}
                        {activeTab === "careers" && (
                            <form onSubmit={handleJobSubmit} className="space-y-6">
                                <div className="grid gap-6">
                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Job Title</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Senior Backend Engineer"
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                            value={jobData.title}
                                            onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-gray-400 text-sm mb-1 block">Type / Location</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Remote (Global)"
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                                value={jobData.type}
                                                onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-400 text-sm mb-1 block">Tags (comma separated)</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="React, Node.js, AWS"
                                                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                                value={jobData.tags}
                                                onChange={(e) => setJobData({ ...jobData, tags: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-gray-400 text-sm mb-1 block">Job Description</label>
                                        <textarea
                                            required
                                            rows={6}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none"
                                            value={jobData.description}
                                            onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <Button type="submit" variant="glow" disabled={loading} className="w-full">
                                    {loading ? <Loader2 className="animate-spin" /> : (isEditing ? "Update Job" : "Post Job Opening")}
                                </Button>
                            </form>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}
