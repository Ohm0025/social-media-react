import axios from "../utils/axios";

export const fetchSearchFriend = (searchName: string) =>
  axios.post("/friend/pending", { searchName });

export const fetchAllFriend = () => axios.get("/friend");

export const requestFriend = (accepterid: number) =>
  axios.post("/friend/request", { accepterid });

export const fetchFriendRequest = () => axios.get("/friend/request");

export const fetchFriendAccept = () => axios.get("/friend/pending");

export const acceptRequest = (friendid: number) =>
  axios.put("/friend", { friendid });
