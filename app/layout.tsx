import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "NextWave Web Studio | Premium Website Development",
  description: "Affordable, professional, and modern websites for small businesses, coaching centres, and personal brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans pt-20 overflow-x-hidden antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}