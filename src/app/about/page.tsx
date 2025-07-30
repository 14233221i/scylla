import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">Learn more about Digital Wing, our mission, and our team.</p>
      </header>
      <main className="max-w-3xl mx-auto px-4 pb-16">
        <section className="mb-8 text-center">
          <h2 className="text-xl font-bold mb-2">Our Mission</h2>
          <p className="text-gray-300 mb-6">To empower businesses and entrepreneurs with affordable, effective, and innovative digital solutions that drive growth and success in the modern world.</p>
          <h2 className="text-xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-300 mb-6">We are a passionate group of designers, developers, and digital strategists dedicated to helping you succeed. Our diverse backgrounds and expertise allow us to deliver comprehensive solutions tailored to your needs.</p>
          <h2 className="text-xl font-bold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Customer Success First</li>
            <li>Transparency & Integrity</li>
            <li>Continuous Innovation</li>
            <li>Collaboration & Teamwork</li>
            <li>Quality & Reliability</li>
          </ul>
        </section>
      </main>
    </div>
  );
} 