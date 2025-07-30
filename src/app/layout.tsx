import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Wing",
  description: "Empowering businesses with digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden`}>
        {/* Animated background */}
        <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-pink-500 via-fuchsia-500 to-blue-500 opacity-60 blur-2xl" style={{backgroundSize:'200% 200%'}} />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
