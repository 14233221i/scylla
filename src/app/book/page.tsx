'use client';
import React, { useState } from "react";

function getTimeSlots() {
  const slots = [];
  for (let h = 9; h < 22; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`);
    slots.push(`${h.toString().padStart(2, '0')}:30`);
  }
  slots.push("22:00");
  return slots;
}

function format12Hour(time24: string) {
  const [h, m] = time24.split(":");
  let hour = parseInt(h, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;
  return `${hour}:${m} ${ampm}`;
}

export default function Book() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: ""
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.date || !form.time) {
      setError("Please fill in all required fields, including date and time.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setForm({ name: "", email: "", phone: "", date: "", time: "" });
      } else {
        setError(data.error || "Failed to book appointment.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const timeSlots = getTimeSlots();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-6 sm:py-10 text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Book an Appointment</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-200">Let's discuss your business needs! Fill out the form and our team will get in touch.</p>
      </header>
      <main className="max-w-xl mx-auto px-4 pb-16">
        <form className="bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your Name*" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <input 
            name="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Your Email*" 
            type="email" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <input 
            name="phone" 
            value={form.phone} 
            onChange={handleChange} 
            placeholder="Your Phone*" 
            type="tel" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
          />
          <label className="text-sm text-gray-300">Select Date*</label>
          <input 
            name="date" 
            value={form.date} 
            onChange={handleChange} 
            type="date" 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" 
            min={new Date().toISOString().split('T')[0]} 
          />
          <label className="text-sm text-gray-300">Select Time Slot (9:00 AM to 10:00 PM)*</label>
          <select 
            name="time" 
            value={form.time} 
            onChange={handleChange} 
            className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Select Time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>{format12Hour(slot)}</option>
            ))}
          </select>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </button>
        </form>
      </main>
    </div>
  );
} 