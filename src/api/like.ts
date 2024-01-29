import axios from "../utils/axios";

export const toggleLike = (postid: number) => axios.post("/like", { postid });
