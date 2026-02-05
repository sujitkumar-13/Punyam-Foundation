"use server";

import nodemailer from "nodemailer";

export async function sendDonationAction(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const file = formData.get("screenshot") as File;

    if (!name || !email || !file) {
        return { success: false, error: "All fields are required" };
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            subject: `New Donation Contribution - ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #b91c1c 0%, #1e3a8a 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Donation Proof Received</h1>
          </div>
          <div style="padding: 30px; line-height: 1.6; color: #333;">
            <p>A new donation contribution has been submitted via the <strong>Punyam Foundation</strong> website.</p>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <p>The donor has attached a screenshot of the payment for verification.</p>
            
            <div style="margin-top: 30px; border-top: 1px solid #eee; pt: 20px; font-size: 12px; color: #666; text-align: center;">
              <p>This message was sent from the Punyam Foundation Donation Portal.</p>
            </div>
          </div>
        </div>
      `,
            attachments: [
                {
                    filename: file.name,
                    content: buffer,
                },
            ],
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Email Error:", error);
        return { success: false, error: "Failed to send email. Please try again later." };
    }
}
