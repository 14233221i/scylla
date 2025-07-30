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
    <nav className="w-full bg-white/90 backdrop-blur-sm py-3 px-4 flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 text-sm sm:text-base font-semibold shadow-lg sticky top-0 z-50 items-center border-b border-gray-200">
      <Link href="/" className="text-gray-800 hover:text-pink-500 transition-colors font-medium px-2 py-1 rounded">Home</Link>
      <Link href="/about" className="text-gray-800 hover:text-pink-500 transition-colors font-medium px-2 py-1 rounded">About</Link>
      <Link href="/blog" className="text-gray-800 hover:text-pink-500 transition-colors font-medium px-2 py-1 rounded">Blog</Link>
      <Link href="/book" className="text-gray-800 hover:text-pink-500 transition-colors font-medium px-2 py-1 rounded">Book</Link>
      <Link href="/contact" className="text-gray-800 hover:text-pink-500 transition-colors font-medium px-2 py-1 rounded">Contact</Link>
      <Link href="/cart" className="ml-2 sm:ml-4 relative text-xl sm:text-2xl hover:scale-110 transition-transform">
        <span role="img" aria-label="cart">🛒</span>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cartCount}</span>
        )}
      </Link>
    </nav>
  );
} 