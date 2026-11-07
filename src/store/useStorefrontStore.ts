"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  qty: number;
  variant: string;
  selected: boolean;
};

type StorefrontStoreState = {
  theme: "light" | "dark";
  cart: CartItem[];
  wishlist: string[];
  appMode: "storefront" | "admin";
  setTheme: (theme: "light" | "dark") => void;
  setCart: (cart: CartItem[]) => void;
  setWishlist: (wishlist: string[]) => void;
  setAppMode: (mode: "storefront" | "admin") => void;
};

export const useStorefrontStore = create<StorefrontStoreState>()(
  persist(
    (set) => ({
      theme: "light",
      cart: [],
      wishlist: [],
      appMode: "storefront",
      setTheme: (theme) => set({ theme }),
      setCart: (cart) => set({ cart }),
      setWishlist: (wishlist) => set({ wishlist }),
      setAppMode: (appMode) => set({ appMode }),
    }),
    {
      name: "tehzib-zustand-store-v2",
    },
  ),
);

