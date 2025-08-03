'use client';
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(data.message);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-6 sm:py-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Contact Us</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-200">We'd love to hear from you! Reach out for any queries, quotes, or support.</p>
      </header>
      <main className="max-w-xl mx-auto px-4 pb-16">
        <div className="mb-8 text-center space-y-2 text-sm sm:text-base">
          <div>Email: <a href="mailto:tonystanks121@gmail.com" className="text-pink-400 hover:underline">tonystanks121@gmail.com</a></div>
          <div>Phone: <a href="tel:+919611757967" className="text-pink-400 hover:underline">+91 96117 57967</a></div>
          <div>WhatsApp: <a href="https://wa.me/919611757967" className="text-pink-400 hover:underline">+91 96117 57967</a>, <a href="https://wa.me/919880798530" className="text-pink-400 hover:underline">+91 98807 98530</a></div>
        </div>
        
        {submitStatus === "success" && (
          <div className="mb-6 p-4 bg-green-600 rounded-lg text-white text-center">
            {statusMessage}
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="mb-6 p-4 bg-red-600 rounded-lg text-white text-center">
            {statusMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col gap-4">
          <input 
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text" 
            placeholder="Your Name*" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <input 
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email" 
            placeholder="Your Email*" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <input 
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel" 
            placeholder="Your Phone Number" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <textarea 
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message*" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px] resize-none" 
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </main>
    </div>
  );
} 