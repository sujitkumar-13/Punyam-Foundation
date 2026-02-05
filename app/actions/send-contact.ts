"use server";

import nodemailer from "nodemailer";

export async function sendContactAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
        return { success: false, error: "Name, email, and message are required" };
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            subject: `New Contact Inquiry: ${subject || "No Subject"}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #b91c1c 0%, #1e3a8a 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
          </div>
          <div style="padding: 30px; line-height: 1.6; color: #333;">
            <p>You have received a new message from the <strong>Punyam Foundation</strong> website contact form.</p>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p style="margin: 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: #ffffff; padding: 20px; border: 1px solid #eee; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; color: #555;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; border-top: 1px solid #eee; pt: 20px; font-size: 12px; color: #666; text-align: center;">
              <p>This message was sent from the Punyam Foundation Contact Form.</p>
            </div>
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Email Error:", error);
        return { success: false, error: "Failed to send email. Please try again later." };
    }
}
