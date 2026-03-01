import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

// 1. Create the Database Schema
const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  packageType: String,
  details: String,
  date: { type: Date, default: Date.now }
});

// Prevent error if model already exists
const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, packageType, details } = body;

    // 2. Connect to MongoDB Atlas using your environment variable
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI as string);
    }

    // 3. Save the Lead to the Database
    await Lead.create({ name, phone, email, packageType, details });

    // 4. Send the Email Alert to your Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `🚨 New Lead: ${name} - NextWave Studio`,
      html: `
        <h3>New Project Inquiry 🚀</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Package:</b> ${packageType}</p>
        <p><b>Details:</b> ${details}</p>
      `
    });

    return NextResponse.json({ message: "Lead saved and email sent!" }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to process lead." }, { status: 500 });
  }
}