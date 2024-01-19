import axios from "../utils/axios";

export const createPostText = (postText: string, postType: string) =>
  axios.post("/postOnlyText", { postText, postType });
