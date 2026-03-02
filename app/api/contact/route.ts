import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

// 1. Define Schema
const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  packageType: String,
  details: String,
  date: { type: Date, default: Date.now }
});

// 2. Create Model (Safe for Next.js)
const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 3. Connect to MongoDB safely
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in Vercel settings!");
    }
    
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Connected to MongoDB!");
    }

    // 4. Save to Database
    await Lead.create(body);

    // 5. Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `🚨 New Lead: ${body.name}`,
      html: `<p>New message from ${body.name} (${body.phone}) regarding ${body.packageType}.</p><p>${body.details}</p>`
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });

  } catch (error) {
    console.error("Backend Error:", error);
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}