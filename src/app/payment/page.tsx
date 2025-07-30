'use client';
import React from "react";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans flex flex-col items-center justify-center">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Payment</h1>
        <p className="mb-6 text-lg">Thank you for providing your details!<br/>Payment integration is coming soon.<br/>We will contact you to complete your order.</p>
        <div className="text-gray-400 text-sm">(You can integrate Razorpay, Stripe, or UPI here.)</div>
      </div>
    </div>
  );
} 