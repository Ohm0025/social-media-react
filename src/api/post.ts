import axios from "../utils/axios";

export const createPostText = (postText: string) =>
  axios.post("/postOnlyText", postText);
