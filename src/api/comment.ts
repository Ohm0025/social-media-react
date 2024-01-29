import axios from "../utils/axios";

export const getCommentPost = (targetPostId: number) =>
  axios.get("/comment/" + targetPostId);

export const createCommentPost = (targetPostId: number, commentObj: FormData) =>
  axios.post("/comment/" + targetPostId, commentObj);
