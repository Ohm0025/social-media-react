import { create } from "zustand";

type UseMyPost = {
  myPostArr: any[];
  setMyPostArr: (fetchPost: any) => void;
  removeMyPostArr: (postid: number) => void;
  addMyPostArr: (newPost: any) => void;
  modPostArr: (targetPostId: number, targetKey: string, value: number) => void;
};

export const useMyPost = create<UseMyPost>((set) => ({
  myPostArr: [],
  setMyPostArr: (fetchPost: any) =>
    set(() => {
      return { myPostArr: [...fetchPost] };
    }),
  removeMyPostArr: (postid) =>
    set((prev) => {
      return {
        myPostArr: prev.myPostArr.filter((item) => item.postid !== postid),
      };
    }),
  addMyPostArr: (newPost) =>
    set((prev) => {
      return {
        myPostArr: [newPost, ...prev.myPostArr],
      };
    }),
  modPostArr: (targetPostId: number, targetKey: string, value: number) =>
    set((prev) => {
      return {
        myPostArr: [
          ...prev.myPostArr.map((item) => {
            if (item.postid === targetPostId) {
              return { ...item, [targetKey]: Number(item[targetKey]) + value };
            }
            return item;
          }),
        ],
      };
    }),
}));
