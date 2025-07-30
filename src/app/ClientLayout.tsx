'use client';
import React from "react";
import { CartProvider, useCart } from "../../lib/cart-context";
import Link from "next/link";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <NavBar />
      {children}
    </CartProvider>
  );
}

function NavBar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-4 px-4 flex justify-center gap-6 text-base font-semibold shadow-md sticky top-0 z-50 items-center">
      <Link href="/" className="hover:text-pink-400 transition">Home</Link>
      <Link href="/about" className="hover:text-pink-400 transition">About</Link>
      <Link href="/blog" className="hover:text-pink-400 transition">Blog</Link>
      <Link href="/book" className="hover:text-pink-400 transition">Book Appointment</Link>
      <Link href="/contact" className="hover:text-pink-400 transition">Contact Us</Link>
      <Link href="/cart" className="ml-4 relative text-2xl hover:scale-110 transition-transform">
        <span role="img" aria-label="cart">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cartCount}</span>
        )}
      </Link>
    </nav>
  );
} 