import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    // Honeypot check
    const honeypot = formData.get("b_honeypot");
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;
    const links = formData.get("links") as string;
    const experience = formData.get("experience") as string;
    const resume = formData.get("resume") as File;

    if (!name || !email || !role || !experience || !resume) {
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

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // 1. Send Application to Recruiter
    const recruiterMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECRUITER_EMAIL,
      subject: `New Application – ${role} – ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6; color: #333;">
          <h2 style="color: #0F172A; border-bottom: 2px solid #22D3EE; padding-bottom: 10px;">New Job Application Received</h2>
          <p><strong>Applicant Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Role Applied For:</strong> ${role}</p>
          <p><strong>LinkedIn/Portfolio:</strong> <a href="${links}">${links || "Not provided"}</a></p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="margin-top: 0;">Experience Summary:</h3>
            <p style="white-space: pre-wrap;">${experience}</p>
          </div>
          <p style="font-size: 12px; color: #64748b; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            Sent from Flora Intelligence Portal
          </p>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    };

    // 2. Send Auto-Reply to Applicant
    const applicantMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Application Received – ${role} | Flora Intelligence`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; line-height: 1.6; color: #333;">
          <h2 style="color: #0F172A;">Hello ${name},</h2>
          <p>Thank you for your interest in joining **Flora Intelligence**.</p>
          <p>We've successfully received your application for the <strong>${role}</strong> position. Our technical team is reviewing your profile and will get back to you within 3-5 business days if there's a match.</p>
          <p>In the meantime, feel free to explore our <a href="https://floraintelligence.ai/case-studies">latest work</a>.</p>
          <p>Best regards,<br/><strong>Flora Intelligence HR Team</strong></p>
          <div style="font-size: 11px; color: #94a3b8; margin-top: 40px; border-top: 1px solid #f1f5f9; padding-top: 10px;">
            This is an automated confirmation of your application. Please do not reply to this email.
          </div>
        </div>
      `,
    };

    // Execute mail sending
    await Promise.all([
      transporter.sendMail(recruiterMailOptions),
      transporter.sendMail(applicantMailOptions),
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email API Error:", error);
    return NextResponse.json({ error: "Failed to send application. Please try again later." }, { status: 500 });
  }
}
