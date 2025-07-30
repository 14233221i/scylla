'use client';
import React from "react";
import { useCart, CartItem } from "../../lib/cart-context";
import { useRouter } from "next/navigation";

const bundles = [
  {
    name: "Starter Digital Presence",
    price: "₹5,999",
    description: "Perfect for small businesses or individuals taking their first step online.",
    features: [
      "1-page modern website (HTML or WordPress)",
      "1-year custom domain registration",
      "1-year fast, secure hosting",
      "1 professional business email (e.g., info@yourbusiness.com)",
      "Click-to-call & WhatsApp chat button",
      "Google Maps location embedded",
      "Digital business card design (PDF + print-ready)",
    ],
    color: "from-pink-500 to-fuchsia-500",
  },
  {
    name: "Professional Growth Bundle",
    price: "₹9,999",
    description: "For growing businesses ready to build trust and attract more customers.",
    features: [
      "Everything in Starter, plus:",
      "3–5 page website (Home, About, Services, Gallery, Contact)",
      "Mobile-optimized, responsive design",
      "2–5 business emails for your team",
      "Basic vector logo design",
      "WhatsApp & Google Chat integration",
      "Google My Business setup",
      "SEO-ready (meta tags, sitemap, Google indexing)",
      "Social media profile graphics (Instagram/Facebook banners)",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Premium Brand Boost",
    price: "₹18,999",
    description: "For businesses serious about branding, online sales, and lead generation.",
    features: [
      "Everything in Professional, plus:",
      "Online store setup (Shopify, WooCommerce, or Razorpay)",
      "Payment gateway integration (UPI, Card, etc.)",
      "Lead capture forms with email notifications",
      "Advanced SEO setup & keyword optimization",
      "Blog/news section (optional)",
      "10 digital business cards (tap-to-call, tap-to-WhatsApp)",
      "Social media post templates (editable Canva bundle)",
      "1 month of website maintenance included",
      "Free training: 'How to update your own site'",
    ],
    color: "from-yellow-400 to-orange-500",
  },
];

const addons = [
  { name: "Invoice & Quotation Design", price: "₹499", desc: "Branded invoice/quotation template (Word/PDF)" },
  { name: "Social Media Post Templates", price: "₹999–₹1,999", desc: "Canva/Photoshop templates for posts & festivals" },
  { name: "Advanced Logo Design", price: "₹1,499–₹4,999", desc: "Custom logo with multiple concepts & revisions" },
  { name: "Instagram Setup & Optimization", price: "₹999", desc: "Bio, highlights, linktree, story covers, etc." },
  { name: "Google/Meta Ads Setup", price: "₹1,999+", desc: "First ad campaign setup with keywords" },
  { name: "Cybersecurity Setup", price: "₹499", desc: "HTTPS, strong passwords, 2FA, security basics" },
  { name: "Analytics Dashboard", price: "₹999", desc: "Google Analytics + automated traffic reports" },
  { name: "Mini Catalog (PDF)", price: "₹799", desc: "Branded product/service catalog for sharing" },
  { name: "Website Maintenance (Monthly)", price: "₹499–₹999", desc: "Backups, updates, SEO tweaks, minor changes" },
];

export default function Home() {
  const { addItem } = useCart();
  const router = useRouter();

  function handleAddToCart(item: CartItem) {
    addItem(item);
    router.push("/cart");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Digital Wing</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-200">Empowering businesses and startups with complete digital solutions: websites, branding, online orders, social media, and more.</p>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <section className="mb-12 text-center">
          <h2 className="text-xl font-bold mb-2">Your Digital Success Partner</h2>
          <p className="max-w-2xl mx-auto text-gray-300">At Digital Wing, we help businesses, startups, and stores build and manage their digital presence. From websites and branding to social media, online orders, and AI-powered chatbots, we provide everything you need to thrive in the digital world. Our team delivers remote and offline services, tailored bundles, and ongoing support to ensure your business stands out and grows online.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">All-in-One Business Digital Bundles</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {bundles.map((bundle, idx) => (
              <div
                key={bundle.name}
                className={`rounded-2xl shadow-lg p-6 bg-gradient-to-br ${bundle.color} text-white flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
              >
                <h3 className="text-xl font-bold mb-2">{bundle.name}</h3>
                <div className="text-lg font-semibold mb-2">{bundle.price}</div>
                <p className="mb-4 text-sm text-white/90">{bundle.description}</p>
                <ul className="list-disc list-inside text-sm flex-1 mb-4">
                  {bundle.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <button
                  className="mt-auto bg-white text-gray-900 font-bold py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
                  onClick={() => handleAddToCart({
                    id: `bundle-${idx}`,
                    name: bundle.name,
                    price: Number(bundle.price.replace(/[^\d]/g, "")),
                    quantity: 1,
                    type: "bundle" as const
                  })}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Subscription Pack Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Subscription Pack: Ongoing Digital Management</h2>
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-pink-600 to-fuchsia-600 rounded-2xl shadow-lg p-8 text-white flex flex-col items-center mb-8">
            <div className="text-3xl font-extrabold mb-2">₹999/month</div>
            <div className="text-lg font-semibold mb-4">Let us handle your digital presence, so you can focus on your business!</div>
            <ul className="list-disc list-inside text-white/90 text-base mb-4 text-left w-full max-w-md space-y-2">
              <li>Up to <span className="font-bold">3 website edits</span> per month (content, images, menu updates, etc.)</li>
              <li>Menu/product/service updates as needed</li>
              <li>Online order management and redirection</li>
              <li><span className="font-bold">3 ad postings</span> (Google, Facebook, or Instagram) every month</li>
              <li>Monthly performance report (website & social media)</li>
              <li>Basic SEO tweaks and Google indexing checks</li>
              <li>Priority support via WhatsApp or email</li>
              <li>Event/festival banner updates (1 per month)</li>
              <li>Minor bug fixes and security checks</li>
              <li>Guidance on new digital trends and tools</li>
            </ul>
            <div className="text-center mt-4">
              <button
                className="inline-block bg-white text-pink-600 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
                onClick={() => handleAddToCart({
                  id: "subscription-999",
                  name: "Ongoing Digital Management Subscription",
                  price: 999,
                  quantity: 1,
                  type: "subscription" as const
                })}
              >
                Subscribe Now
              </button>
            </div>
          </div>
          {/* Premium Subscription Pack */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg p-8 text-white flex flex-col items-center">
            <div className="text-3xl font-extrabold mb-2">₹2,499/month</div>
            <div className="text-lg font-semibold mb-4">All-in-One Premium Digital Management (with Hosting & Domain Included!)</div>
            <ul className="list-disc list-inside text-white/90 text-base mb-4 text-left w-full max-w-md space-y-2">
              <li>Everything in the ₹999/month pack</li>
              <li>Annual payment for domain, hosting, and server included</li>
              <li>Up to <span className="font-bold">8 website edits</span> per month</li>
              <li>Unlimited menu/product/service updates</li>
              <li><span className="font-bold">6 ad postings</span> (Google, Facebook, or Instagram) every month</li>
              <li>Quarterly advanced SEO audit & implementation</li>
              <li>Monthly custom-designed social media post (by our designer)</li>
              <li>Priority phone support (in addition to WhatsApp/email)</li>
              <li>Annual website redesign or major update (on request)</li>
              <li>Free SSL certificate management</li>
              <li>Automated weekly backups & uptime monitoring</li>
              <li>Early access to new features and digital tools</li>
            </ul>
            <div className="text-center mt-4">
              <button
                className="inline-block bg-white text-yellow-600 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
                onClick={() => handleAddToCart({
                  id: "subscription-2499",
                  name: "Premium Digital Management Subscription",
                  price: 2499,
                  quantity: 1,
                  type: "subscription" as const
                })}
              >
                Go Premium
              </button>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Add-Ons & Upsells</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="bg-gray-700">
                  <th className="py-2 px-4 rounded-l-lg">Add-On</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4 rounded-r-lg">Description</th>
                </tr>
              </thead>
              <tbody>
                {addons.map((addon) => (
                  <tr key={addon.name} className="bg-gray-800/80">
                    <td className="py-2 px-4 font-semibold">{addon.name}</td>
                    <td className="py-2 px-4">{addon.price}</td>
                    <td className="py-2 px-4">{addon.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="mb-6 text-gray-200">Contact us for a free consultation or to get started with your digital transformation.</p>
          <a href="mailto:info@digitalwing.com" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition">Contact Us</a>
        </section>
      </main>
      <footer className="py-8 text-center text-gray-400 text-xs">&copy; {new Date().getFullYear()} Digital Wing. All rights reserved.</footer>
    </div>
  );
}
