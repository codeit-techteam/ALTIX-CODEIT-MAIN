import { Resend } from 'resend';
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

        let resumeBuffer = null;
        let resumeFilename = null;
        let resumePath = "No file attached";

        // Process Resume
        if (resume && resume instanceof File) {
            resumeBuffer = Buffer.from(await resume.arrayBuffer());
            resumeFilename = Date.now() + '-' + resume.name.replaceAll(" ", "_");
            resumePath = `/uploads/resumes/${resumeFilename}`;

            // Try saving to filesystem (works locally, may fail on serverless)
            try {
                const uploadDir = path.join(process.cwd(), 'public/uploads/resumes');
                await mkdir(uploadDir, { recursive: true });
                await writeFile(path.join(uploadDir, resumeFilename), resumeBuffer);
            } catch (err) {
                console.warn('Failed to save resume to filesystem (serverless):', err.message);
            }
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
        console.log('Application saved to database:', name, roleTitle);

        // Send email notifications via Resend (best-effort)
        try {
            if (!process.env.RESEND_API_KEY) {
                console.warn('RESEND_API_KEY not configured, skipping email notifications');
            } else {
                const resend = new Resend(process.env.RESEND_API_KEY);

                // Admin notification
                const adminEmail = {
                    from: 'Altix Codeit Hiring <onboarding@resend.dev>',
                    to: [process.env.EMAIL_USER || 'codeit.techteam@gmail.com'],
                    replyTo: email,
                    subject: `📋 New Application: ${roleTitle} - ${name}`,
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
                    ...(resumeBuffer ? {
                        attachments: [{
                            filename: resume.name,
                            content: resumeBuffer,
                        }]
                    } : {}),
                };

                await resend.emails.send(adminEmail);
                console.log('Admin notification sent via Resend');

                // Candidate confirmation
                try {
                    await resend.emails.send({
                        from: 'Altix Codeit <onboarding@resend.dev>',
                        to: [email],
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
                    });
                    console.log('Candidate confirmation sent via Resend');
                } catch (candidateError) {
                    console.error('Failed to send candidate confirmation:', candidateError.message);
                }
            }
        } catch (emailError) {
            console.error('Resend email failed (application is saved in DB):', emailError.message);
        }

        return Response.json({ message: 'Application submitted successfully' }, { status: 200 });

    } catch (error) {
        console.error('Application Error:', error);
        return Response.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
