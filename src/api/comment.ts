import axios from "../utils/axios";

export const createComment = (commentObj: any) =>
  axios.post("/createComment", commentObj);
