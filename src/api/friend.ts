import axios from "../utils/axios";

export const createPostTextImg = (postObj: FormData) =>
  axios.post("/postTextImg", postObj);

export const fetchSearchFriend = (searchName: string) =>
  axios.post("/getMoreFriend", { searchName });

export const fetchAllFriend = () => axios.get("/fetchMyFriend");

export const requestFriend = (accepterid: number) =>
  axios.post("/requestFriend", { accepterid });

export const fetchFriendRequest = () => axios.get("/fetchFriendRequest");

export const fetchFriendAccept = () => axios.get("/fetchFriendAccept");

export const acceptRequest = (friendid: number) =>
  axios.put("/acceptFriendRequest", { friendid });
