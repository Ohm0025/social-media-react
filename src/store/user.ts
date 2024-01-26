import { create } from "zustand";

const initUserObj = {
  userid: "",
  firstname: "",
  lastname: "",
  emailorphone: "",
  birthDate: "",
  profile_picture: "",
  profile_cover: "",
};

type UseUser = {
  userObj: any;
  setUserObj: (newUserObj: any) => void;
  updateObj: (newObj: any) => void;
  resetObj: () => void;
};

export const useUser = create<UseUser>((set) => ({
  userObj: { ...initUserObj },
  setUserObj: (newUserObj: any) =>
    set(() => {
      return { userObj: { ...newUserObj } };
    }),
  updateObj: (newObj: any) =>
    set((prev) => {
      return { userObj: { ...prev.userObj, ...newObj } };
    }),
  resetObj: () => set({ userObj: { ...initUserObj } }),
}));
