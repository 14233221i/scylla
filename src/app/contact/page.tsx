'use client';
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">We’d love to hear from you! Reach out for any queries, quotes, or support.</p>
      </header>
      <main className="max-w-xl mx-auto px-4 pb-16">
        <div className="mb-8 text-center space-y-2">
          <div>Email: <a href="mailto:tonystanks121@gmail.com" className="text-pink-400 hover:underline">tonystanks121@gmail.com</a></div>
          <div>Phone: <a href="tel:+919611757967" className="text-pink-400 hover:underline">+91 96117 57967</a></div>
          <div>WhatsApp: <a href="https://wa.me/919611757967" className="text-pink-400 hover:underline">+91 96117 57967</a>, <a href="https://wa.me/919880798530" className="text-pink-400 hover:underline">+91 98807 98530</a></div>
        </div>
        <form className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <input type="email" placeholder="Your Email" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <input type="tel" placeholder="Your Phone Number" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <textarea placeholder="Your Message" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none min-h-[100px]" />
          <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition">Send Message</button>
        </form>
      </main>
    </div>
  );
} 