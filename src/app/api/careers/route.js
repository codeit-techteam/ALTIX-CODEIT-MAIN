import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Job from '@/models/Job';

export async function GET() {
    try {
        await dbConnect();
        const jobs = await Job.find({}).sort({ createdAt: -1 });
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        await dbConnect();
        const newJob = await Job.create(body);
        return NextResponse.json({ success: true, job: newJob });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to save job' }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await dbConnect();
        await Job.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const body = await request.json();
        const { id, ...updateData } = body;

        await dbConnect();
        const updatedJob = await Job.findByIdAndUpdate(id, updateData, { new: true });

        return NextResponse.json({ success: true, job: updatedJob });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
    }
}
