import { create } from "zustand";

type UseLoading = {
  isLoading: boolean;
  openIsLoading: () => void;
  closeIsLoading: () => void;
};

export const useLoading = create<UseLoading>((set) => ({
  isLoading: false,
  openIsLoading: () =>
    set(() => {
      return { isLoading: true };
    }),
  closeIsLoading: () =>
    set(() => {
      return { isLoading: false };
    }),
}));
