import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    const { first, last, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hikalahmed10@gmail.com", // your Gmail
            pass: process.env.GMAIL_APP_PASSWORD!, // ✅ use env var here
        },
        secure: true,
    });
    const mailOptions = {
        from: "hikalahmed10@gmail.com",  // your Gmail (authenticated)
        replyTo: email,                  // user's email (reply will go to them)
        to: "hikalahmed10@gmail.com",    // where you receive the message
        subject: `New message from ${first} ${last}`,
        text: `From: ${email}\nPhone: ${phone}\n\n${message}`,
    };



    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("❌ Email error:", error?.response || error?.message || error);
        return NextResponse.json({ success: false }, { status: 500 });
    }

}
