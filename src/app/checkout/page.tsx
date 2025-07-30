'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    business: "",
    notes: "",
    pincode: ""
  });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.address || !form.pincode) {
      setError("Please fill in all required fields, including pincode.");
      return;
    }
    setError("");
    // Optionally: save to context or localStorage
    router.push("/payment");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Checkout: Contact Details</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">Please provide your contact and business details so we can reach you.</p>
      </header>
      <main className="max-w-xl mx-auto px-4 pb-16">
        <form className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col gap-4" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name*" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email*" type="email" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone Number*" type="tel" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <label className="text-sm text-gray-300">Area Pincode*</label>
          <select name="pincode" value={form.pincode} onChange={handleChange} className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none">
            <option value="">Select Pincode</option>
            <option value="560001">560001 (Bangalore Central)</option>
            <option value="560076">560076 (Bannerghatta Road)</option>
            <option value="560100">560100 (HSR Layout)</option>
            <option value="560103">560103 (Sarjapur Road)</option>
            <option value="560034">560034 (Koramangala)</option>
            <option value="other">Other (enter below)</option>
          </select>
          {form.pincode === "other" && (
            <input name="pincode" value={form.pincode} onChange={handleChange} placeholder="Enter your pincode" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          )}
          <input name="address" value={form.address} onChange={handleChange} placeholder="Your Address*" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <input name="business" value={form.business} onChange={handleChange} placeholder="Business/Store Name" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none" />
          <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Any notes or requirements?" className="rounded px-4 py-2 bg-gray-700 text-white focus:outline-none min-h-[80px]" />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition">Continue to Payment</button>
        </form>
      </main>
    </div>
  );
} 