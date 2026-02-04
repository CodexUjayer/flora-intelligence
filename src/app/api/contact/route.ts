import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure Nodemailer with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. Send Inquiry to Recruiter
    const recruiterMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECRUITER_EMAIL,
      replyTo: email,
      subject: `New Lead: ${subject} – ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6; color: #333;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #22D3EE; padding-bottom: 10px;">New Contact Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #0F172A;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            Sent from Flora Intelligence Contact Form
          </p>
        </div>
      `,
    };

    // 2. Send Auto-Confirmation to User
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `We've Received Your Message | Flora Intelligence`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6; color: #333;">
          <h2 style="color: #0F172A;">Hello ${name},</h2>
          <p>Thank you for reaching out to **Flora Intelligence**.</p>
          <p>We've received your message regarding <strong>${subject}</strong> and one of our AI strategy experts will review it shortly. You can expect a response within one business day.</p>
          <p>In the mean time, explore our <a href="https://floraintelligence.ai/case-studies">Impact Stories</a> to see how we're transforming industries.</p>
          <p>Talk soon,<br/><strong>The Flora Team</strong></p>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 10px;">
            This is an automated confirmation. Please do not reply directly to this email.
          </div>
        </div>
      `,
    };

    // Execute mail sending
    await Promise.all([
      transporter.sendMail(recruiterMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again later." },
      { status: 500 }
    );
  }
}
