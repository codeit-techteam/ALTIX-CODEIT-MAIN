import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import Application from '@/models/Application';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const linkedin = formData.get('linkedin');
        const coverLetter = formData.get('coverLetter');
        const roleTitle = formData.get('roleTitle');
        const resume = formData.get('resume');

        // Simple Validation
        if (!name || !email || !roleTitle || !phone) {
            return Response.json({ message: 'Missing required fields' }, { status: 400 });
        }

        let resumePath = "No file attached";

        // Upload Resume
        if (resume && resume instanceof File) {
            const buffer = Buffer.from(await resume.arrayBuffer());
            const filename = Date.now() + '-' + resume.name.replaceAll(" ", "_");
            const uploadDir = path.join(process.cwd(), 'public/uploads/resumes');

            // Ensure directory exists
            try {
                await mkdir(uploadDir, { recursive: true });
            } catch (err) { }

            await writeFile(path.join(uploadDir, filename), buffer);
            resumePath = `/uploads/resumes/${filename}`;
        }

        // Connect to DB and Save
        await dbConnect();
        await Application.create({
            fullName: name,
            email,
            phone,
            linkedin,
            coverLetter,
            roleTitle,
            resumePath,
        });

        // Email Notification - port 587 (STARTTLS) for Vercel serverless compatibility
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
            connectionTimeout: 8000,
            greetingTimeout: 8000,
            socketTimeout: 8000,
        });

        const mailOptions = {
            from: `"Altix Codeit Hiring" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Application: ${roleTitle} - ${name}`,
            html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
                <h2>New Job Application: ${roleTitle}</h2>
                <hr />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>LinkedIn:</strong> <a href="${linkedin}">${linkedin}</a></p>
                <p><strong>Resume:</strong> ${resumePath !== "No file attached" ? 'Attached' : 'None'}</p>
                <h3>Cover Letter:</h3>
                <p style="white-space: pre-wrap; background: #f4f4f4; padding: 15px; border-radius: 5px;">${coverLetter || "N/A"}</p>
            </div>
            `,
            attachments: resumePath !== "No file attached" ? [
                {
                    filename: path.basename(resumePath),
                    path: path.join(process.cwd(), 'public', resumePath)
                }
            ] : []
        };

        // Send Admin Notification
        await transporter.sendMail(mailOptions);

        // Send Candidate Confirmation
        const candidateMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Application Received - ${roleTitle} at Altix Codeit`,
            html: `
            <div style="font-family: Arial, sans-serif; padding: 40px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
                <div style="text-align: center; margin-bottom: 30px; background-color: #0b0c10; padding: 20px; border-radius: 8px;">
                    <h2 style="color: #66fcf1; margin: 0;">Altix Codeit</h2>
                </div>
                
                <h2 style="color: #000; margin-bottom: 20px;">Hi ${name},</h2>

                <p style="line-height: 1.6; margin-bottom: 15px;">
                    Thank you for taking the time to apply for the <strong>${roleTitle}</strong> position at <strong>Altix Codeit</strong>.
                </p>

                <p style="line-height: 1.6; margin-bottom: 15px;">
                    We appreciate your interest in joining our team and the effort you put into submitting your application. Our hiring team is currently reviewing applications, and we will carefully evaluate your skills and experience.
                </p>

                <p style="line-height: 1.6; margin-bottom: 15px;">
                    If your profile matches our requirements, we will reach out to you for the next steps in the hiring process. Regardless of the outcome, we truly value your interest in Altix Codeit and wish you continued success in your career journey.
                </p>

                <p style="line-height: 1.6; margin-bottom: 30px;">
                    Thank you once again for considering us.
                </p>

                <div style="border-top: 1px solid #eee; padding-top: 20px;">
                    <p style="margin: 0; font-weight: bold;">Best regards,</p>
                    <p style="margin: 5px 0 0; color: #555;">Hiring Team</p>
                    <p style="margin: 0; color: #2563eb; font-weight: bold;">Altix Codeit</p>
                </div>
            </div>
            `,
        };

        try {
            await transporter.sendMail(candidateMailOptions);
        } catch (emailError) {
            console.error("Failed to send candidate confirmation email:", emailError);
            // Don't fail the whole request if just the confirmation email fails, 
            // as the application is already saved and admin notified.
        }

        return Response.json({ message: 'Application submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error('Application Error:', error);
        return Response.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
