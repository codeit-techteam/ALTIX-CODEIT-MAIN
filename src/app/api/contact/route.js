import nodemailer from 'nodemailer';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, scope, budget, message } = body;

    // Simple validation
    if (!name || !email || !message) {
      return Response.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Save to Database
    try {
      await dbConnect();
      await Contact.create({
        name,
        email,
        company,
        scope,
        budget,
        message,
      });
    } catch (dbError) {
      console.error('Database save error (continuing to send email):', dbError);
    }

    // Create Transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter connection
    await transporter.verify();

    // Email Content — using hosted logo URL instead of filesystem path (for serverless compatibility)
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://altixcodeit.com';

    const mailOptions = {
      from: `"Altix Codeit Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🚀 New Lead: ${name} from ${company || 'Unknown Company'}`,
      html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: 'Arial', sans-serif; background-color: #0b0c10; color: #c5c6c7; padding: 20px; margin: 0; }
                    .container { max-width: 600px; margin: 0 auto; background-color: #1f2833; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.3); border: 1px solid #333; }
                    .header { background-color: #0b0c10; padding: 30px; text-align: center; border-bottom: 2px solid #66fcf1; }
                    .header h2 { color: #66fcf1; margin: 0; font-size: 20px; }
                    .content { padding: 30px; }
                    .field { margin-bottom: 20px; }
                    .label { color: #66fcf1; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; font-weight: bold; }
                    .value { font-size: 16px; color: #fff; }
                    .message-box { background-color: #ffffff; color: #333333; padding: 20px; border-radius: 8px; border-left: 4px solid #45a29e; margin-top: 20px; }
                    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; border-top: 1px solid #333; background-color: #0b0c10; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>🚀 New Lead Received</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Client Name</div>
                            <div class="value">${name}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email Address</div>
                            <div class="value">${email}</div>
                        </div>
                        <div style="display: flex; gap: 20px;">
                            <div class="field" style="flex: 1;">
                                <div class="label">Company</div>
                                <div class="value">${company || 'N/A'}</div>
                            </div>
                            <div class="field" style="flex: 1;">
                                <div class="label">Budget</div>
                                <div class="value">${budget || 'N/A'}</div>
                            </div>
                        </div>
                        <div class="field">
                            <div class="label">Project Scope</div>
                            <div class="value">${scope || 'N/A'}</div>
                        </div>
                        
                        <div class="label">Message</div>
                        <div class="message-box">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    <div class="footer">
                        Sent from <strong>Altix Codeit</strong> Website • Lead Generation System
                    </div>
                </div>
            </body>
            </html>
            `,
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return Response.json({ message: 'Email sent and saved successfully' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error.message, error.stack);
    return Response.json({ message: 'Failed to send email. Please try again later.' }, { status: 500 });
  }
}
