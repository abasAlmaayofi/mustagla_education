import { create } from "zustand";

export const useStore = create((set) => ({
  activeNavbarButton: "main",
  setActiveNavbarButton: (value) => set(() => ({ activeNavbarButton: value })),
}));
