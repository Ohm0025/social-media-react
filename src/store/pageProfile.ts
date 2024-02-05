import { create } from "zustand";

type UsePageProfileType = {
  currentPageProfile: string;
  changePageProfile: (str: string) => void;
};

export const usePageProfile = create<UsePageProfileType>((set) => ({
  currentPageProfile: "post",
  changePageProfile: (str: string) => set({ currentPageProfile: str }),
}));
