import { create } from "zustand";

type UseMyCookies = {
  tokenCookies: string;
  setTokenCookies: (value: string) => void;
  removeTokenCookies: () => void;
};

export const useTokenCookies = create<UseMyCookies>((set) => ({
  tokenCookies: "",
  setTokenCookies: (value: string) => set({ tokenCookies: value }),
  removeTokenCookies: () => set({ tokenCookies: "" }),
}));
