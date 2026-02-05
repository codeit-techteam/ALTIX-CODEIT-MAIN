import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String }, // URL path to image
    category: {
        type: String,
        enum: ["Tech Strategy", "AI & ML", "Social Media", "Engineering"],
        default: "Engineering"
    },
    // SEO Fields
    metaTitle: { type: String, trim: true },
    metaDescription: { type: String, trim: true },
    keywords: { type: String, trim: true }, // comma-separated

    // Status
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    },

    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
