import axios from "../utils/axios";

export const createPostText = (postText: string, postType: string) =>
  axios.post("/postOnlyText", { postText, postType });

export const getMyPost = () => axios.get("/getMyPost");

export const createPostTextImg = (postObj: FormData) =>
  axios.post("/postTextImg", postObj);

export const removePost = (postid: number) =>
  axios.post("/removePost", { postid });
