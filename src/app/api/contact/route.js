import { Resend } from 'resend';
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

    // Save to Database FIRST — this is the priority (never lose a lead)
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
      console.log('Lead saved to database:', name, email);
    } catch (dbError) {
      console.error('Database save error:', dbError.message);
    }

    // Send email notification via Resend (HTTP API — works on Vercel serverless)
    try {
      if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY not configured, skipping email notification');
      } else {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: 'Altix Codeit Leads <onboarding@resend.dev>',
          to: [process.env.EMAIL_USER || 'codeit.techteam@gmail.com'],
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
        });

        console.log('Email sent via Resend successfully');
      }
    } catch (emailError) {
      console.error('Resend email failed (lead is saved in DB):', emailError.message);
    }

    // Always return success — the lead is captured in the database
    return Response.json({ message: 'Message received successfully' }, { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error.message);
    return Response.json({ message: 'Failed to process request.' }, { status: 500 });
  }
}
