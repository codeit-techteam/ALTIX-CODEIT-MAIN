import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { revalidatePath } from 'next/cache';

// Helper to generate slug
const generateSlug = (title) => {
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    return slug || `post-${Date.now()}`;
};

export async function GET(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const isAdmin = searchParams.get('admin') === 'true';

        // If admin, show all. If public, show only published.
        const query = isAdmin ? {} : { status: 'published' };

        const blogs = await Blog.find(query).sort({ createdAt: -1 });
        return NextResponse.json(blogs);
    } catch (error) {
        console.error("GET Blogs Error:", error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const title = formData.get('title');
        const excerpt = formData.get('excerpt');
        const author = formData.get('author');
        const content = formData.get('content');
        const category = formData.get('category');
        const image = formData.get('coverImage');

        // New Fields
        const status = formData.get('status') || 'draft';
        const metaTitle = formData.get('metaTitle');
        const metaDescription = formData.get('metaDescription');
        const keywords = formData.get('keywords');

        if (!image) {
            return NextResponse.json({ error: 'Cover image required' }, { status: 400 });
        }

        // Upload Image
        const buffer = Buffer.from(await image.arrayBuffer());
        const filename = Date.now() + '-' + image.name.replaceAll(" ", "_");
        const uploadDir = path.join(process.cwd(), 'public/uploads');

        try { await mkdir(uploadDir, { recursive: true }); } catch (err) { }
        await writeFile(path.join(uploadDir, filename), buffer);
        const imageUrl = `/uploads/${filename}`;

        await dbConnect();
        const slug = generateSlug(title);

        const newBlog = await Blog.create({
            title,
            slug,
            excerpt,
            author,
            content,
            category: category || "Engineering",
            coverImage: imageUrl,
            status,
            metaTitle,
            metaDescription,
            keywords
        });

        // Trigger Revalidation
        revalidatePath('/blogs');
        revalidatePath('/sitemap.xml');

        return NextResponse.json({ success: true, blog: newBlog });
    } catch (error) {
        console.error("Blog Create Error:", error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await dbConnect();
        await Blog.findByIdAndDelete(id);

        revalidatePath('/blogs');

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const formData = await request.formData();
        const id = formData.get('id');
        const title = formData.get('title');
        // ... getters for other fields

        // Simplified update logic for brevity in this replace block, 
        // assuming similar logic to POST but with updates

        const updateData = {};
        for (const [key, value] of formData.entries()) {
            if (key !== 'coverImage' && key !== 'id') {
                updateData[key] = value;
            }
        }

        const image = formData.get('coverImage');
        if (image && image instanceof File) {
            const buffer = Buffer.from(await image.arrayBuffer());
            const filename = Date.now() + '-' + image.name.replaceAll(" ", "_");
            const uploadDir = path.join(process.cwd(), 'public/uploads');
            try { await mkdir(uploadDir, { recursive: true }); } catch (err) { }
            await writeFile(path.join(uploadDir, filename), buffer);
            updateData.coverImage = `/uploads/${filename}`;
        }

        if (updateData.title) {
            updateData.slug = generateSlug(updateData.title);
        }

        await dbConnect();
        const updatedBlog = await Blog.findByIdAndUpdate(id, updateData, { new: true });

        revalidatePath('/blogs');
        revalidatePath(`/blogs/${updatedBlog.slug}`);

        return NextResponse.json({ success: true, blog: updatedBlog });

    } catch (error) {
        console.error("Update Error:", error);
        return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
    }
}
