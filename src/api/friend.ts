import axios from "../utils/axios";

export const createPostTextImg = (postObj: FormData) =>
  axios.post("/postTextImg", postObj);

export const fetchSearchFriend = (searchName: string) =>
  axios.post("/getMoreFriend", { searchName });
