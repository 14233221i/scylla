import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Why Choose Digital Wing?</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">Discover how we empower your business to succeed online.</p>
      </header>
      <main className="max-w-3xl mx-auto px-4 pb-16">
        <section className="mb-8">
          <ul className="list-disc list-inside text-lg space-y-4">
            <li><span className="font-bold text-pink-400">All-in-One Solutions:</span> From websites to branding, social media, and e-commerce, we handle everything for you.</li>
            <li><span className="font-bold text-pink-400">Affordable, Transparent Pricing:</span> Clear bundles and no hidden fees.</li>
            <li><span className="font-bold text-pink-400">Expert Team:</span> Experienced professionals dedicated to your growth.</li>
            <li><span className="font-bold text-pink-400">Remote & Offline Support:</span> We serve you wherever you are.</li>
            <li><span className="font-bold text-pink-400">Cutting-Edge Tech:</span> AI chatbots, WhatsApp integration, and more.</li>
            <li><span className="font-bold text-pink-400">Ongoing Support:</span> We’re here for you even after launch.</li>
          </ul>
        </section>
        <section className="text-center mt-12">
          <a href="/book" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition">Book an Appointment</a>
        </section>
      </main>
    </div>
  );
} 