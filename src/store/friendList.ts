import { create } from "zustand";

type UseFriendList = {
  friendList: any[];
  fetchFriendList: (fetchArr: any) => void;
  addFriendList: (newFriend: any) => void;
  removeFriendList: (friendUserId: number) => void;
  friendArr: any[];
  fetchFriendArr: (fetchArr: any) => void;
  filterFriendArr: (friendArr: any) => void;
};

export const useFriendList = create<UseFriendList>((set) => ({
  friendList: [],
  fetchFriendList: (fetchArr: any) =>
    set((prev) => {
      return { friendList: [...fetchArr] };
    }),
  addFriendList: (newFriend: any) =>
    set((prev) => {
      return { friendList: [...prev.friendList, newFriend] };
    }),
  removeFriendList: (friendUserId: number) =>
    set((prev) => {
      return {
        friendList: [
          ...prev.friendList.filter((item) => item.userid !== friendUserId),
        ],
      };
    }),

  friendArr: [],
  fetchFriendArr: (fetchArr: any) =>
    set(() => {
      return { friendArr: [...fetchArr] };
    }),
  filterFriendArr: () => {},
}));
