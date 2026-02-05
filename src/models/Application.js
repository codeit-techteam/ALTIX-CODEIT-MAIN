import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
    roleTitle: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: String,
    coverLetter: String,
    resumePath: String, // Store the file path or URL
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
