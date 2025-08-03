'use client';
import React, { useState } from "react";
import { useCart } from "../../../lib/cart-context";
import Link from "next/link";
import Image from "next/image";

// Add-on data (with stock images)
const addons = [
  {
    id: "addon-invoice",
    name: "Invoice & Quotation Design",
    price: 499,
    desc: "Branded invoice/quotation template (Word/PDF)",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" // paperwork
  },
  {
    id: "addon-socialmedia",
    name: "Social Media Post Templates",
    price: 999,
    desc: "Canva/Photoshop templates for posts & festivals",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" // social media
  },
  {
    id: "addon-logo",
    name: "Advanced Logo Design",
    price: 1499,
    desc: "Custom logo with multiple concepts & revisions",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" // logo design
  },
  {
    id: "addon-instagram",
    name: "Instagram Setup & Optimization",
    price: 999,
    desc: "Bio, highlights, linktree, story covers, etc.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" // instagram
  },
  {
    id: "addon-ads",
    name: "Google/Meta Ads Setup",
    price: 1999,
    desc: "First ad campaign setup with keywords",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" // ads/analytics
  },
  {
    id: "addon-cybersecurity",
    name: "Cybersecurity Setup",
    price: 499,
    desc: "HTTPS, strong passwords, 2FA, security basics",
    img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80" // security
  },
  {
    id: "addon-analytics",
    name: "Analytics Dashboard",
    price: 999,
    desc: "Google Analytics + automated traffic reports",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" // dashboard
  },
  {
    id: "addon-catalog",
    name: "Mini Catalog (PDF)",
    price: 799,
    desc: "Branded product/service catalog for sharing",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" // catalog
  },
  {
    id: "addon-maintenance",
    name: "Website Maintenance (Monthly)",
    price: 499,
    desc: "Backups, updates, SEO tweaks, minor changes",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" // maintenance
  },
  {
    id: "addon-influencer",
    name: "Influencer & YouTuber Marketing",
    price: 4999,
    desc: "We connect your business with top influencers and YouTubers for powerful online promotion.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80" // influencer
  }
];

// Bundle features for dropdown (match by name)
const bundleFeatures: Record<string, string[]> = {
  "Starter Digital Presence": [
    "1-page modern website (HTML or WordPress)",
    "1-year custom domain registration",
    "1-year fast, secure hosting",
    "1 professional business email (e.g., info@yourbusiness.com)",
    "Click-to-call & WhatsApp chat button",
    "Google Maps location embedded",
    "Digital business card design (PDF + print-ready)"
  ],
  "Professional Growth Bundle": [
    "Everything in Starter, plus:",
    "3–5 page website (Home, About, Services, Gallery, Contact)",
    "Mobile-optimized, responsive design",
    "2–5 business emails for your team",
    "Basic vector logo design",
    "WhatsApp & Google Chat integration",
    "Google My Business setup",
    "SEO-ready (meta tags, sitemap, Google indexing)",
    "Social media profile graphics (Instagram/Facebook banners)"
  ],
  "Premium Brand Boost": [
    "Everything in Professional, plus:",
    "Online store setup (Shopify, WooCommerce, or Razorpay)",
    "Payment gateway integration (UPI, Card, etc.)",
    "Lead capture forms with email notifications",
    "Advanced SEO setup & keyword optimization",
    "Blog/news section (optional)",
    "10 digital business cards (tap-to-call, tap-to-WhatsApp)",
    "Social media post templates (editable Canva bundle)",
    "1 month of website maintenance included",
    "Free training: 'How to update your own site'"
  ]
};

export default function CartPage() {
  const { cartItems, removeItem, clearCart, addItem } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  function handleAddAddon(addon: typeof addons[0]) {
    addItem({
      id: addon.id,
      name: addon.name,
      price: addon.price,
      quantity: 1,
      type: "addon"
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-fuchsia-500 bg-clip-text text-transparent">Your Cart</h1>
      </header>
      <main className="max-w-2xl mx-auto px-4 pb-16">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-300">Your cart is empty.</div>
        ) : (
          <>
            <ul className="mb-8 divide-y divide-gray-700">
              {cartItems.map((item) => (
                <li key={item.id} className="flex flex-col gap-2 py-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-lg flex items-center gap-2">
                        {item.name}
                        {/* Dropdown for bundles */}
                        {bundleFeatures[item.name] && (
                          <button
                            className="ml-2 px-2 py-1 rounded bg-gray-700 hover:bg-pink-500 transition-colors text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-pink-400"
                            onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                          >
                            {openDropdown === item.id ? "Hide Details" : "Show Details"}
                          </button>
                        )}
                      </div>
                      <div className="text-sm text-gray-300 capitalize">{item.type}</div>
                      <div className="text-sm">Qty: {item.quantity}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-bold text-pink-400 text-lg">₹{item.price * item.quantity}</div>
                      <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 font-bold text-xl">&times;</button>
                    </div>
                  </div>
                  {/* Animated dropdown for bundle features */}
                  {openDropdown === item.id && bundleFeatures[item.name] && (
                    <div className="mt-2 bg-gray-800 rounded-lg p-4 shadow-inner animate-fade-in">
                      <ul className="list-disc list-inside text-sm text-white/90 space-y-1">
                        {bundleFeatures[item.name].map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-8">
              <div className="font-bold text-xl">Total:</div>
              <div className="font-bold text-2xl text-pink-400">₹{total}</div>
            </div>
            <div className="flex gap-4 justify-end mb-8">
              <button onClick={clearCart} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition">Clear Cart</button>
              <Link href="/checkout" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg shadow transition">Continue to Checkout</Link>
            </div>
            {/* Add-Ons Tiles */}
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4">Add-Ons & Upsells</h2>
              <div className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-800">
                {addons.map((addon) => (
                  <div
                    key={addon.id}
                    className="bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer group relative overflow-hidden min-w-[220px] snap-center"
                  >
                                            <Image
                          src={addon.img}
                          alt={addon.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded-full mb-2 border-4 border-pink-500 group-hover:border-yellow-400 transition-all duration-300"
                        />
                    <div className="font-bold text-base mb-1 text-center">{addon.name}</div>
                    <div className="text-pink-400 font-bold mb-1">₹{addon.price}</div>
                    <div className="text-xs text-gray-300 mb-2 text-center">{addon.desc}</div>
                    <button
                      className="bg-pink-500 hover:bg-yellow-400 hover:text-gray-900 text-white font-bold py-1 px-4 rounded-full shadow transition-all duration-300"
                      onClick={() => handleAddAddon(addon)}
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

// Tailwind animation for fade-in
type Animation = "animate-fade-in";
// Add this to your tailwind.config.js if you want custom keyframes:
// theme: { extend: { keyframes: { 'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } } }, animation: { 'fade-in': 'fade-in 0.5s ease-in' } } } 