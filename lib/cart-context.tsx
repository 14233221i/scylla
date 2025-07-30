'use client';

import React, { createContext, useContext, useReducer } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: "bundle" | "addon" | "subscription";
};

type CartState = {
  cartItems: CartItem[];
};

type CartAction =
  | { type: "ADD_ITEM"; item: CartItem }
  | { type: "REMOVE_ITEM"; id: string }
  | { type: "CLEAR_CART" };

const CartContext = createContext<{
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
} | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.cartItems.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + action.item.quantity } : i
          ),
        };
      }
      return { cartItems: [...state.cartItems, action.item] };
    }
    case "REMOVE_ITEM":
      return { cartItems: state.cartItems.filter((i) => i.id !== action.id) };
    case "CLEAR_CART":
      return { cartItems: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const addItem = (item: CartItem) => dispatch({ type: "ADD_ITEM", item });
  const removeItem = (id: string) => dispatch({ type: "REMOVE_ITEM", id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
} 