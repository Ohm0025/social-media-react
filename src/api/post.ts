import axios from "../utils/axios";

export const createPost = (postObj: FormData) => axios.post("/post", postObj);

//export const createPost = (postObj: FormData) => console.log(postObj);

export const getMyPost = () => axios.get("/post/postMy");

export const removePost = (postid: number) => axios.delete("/post/" + postid);

export const getStandardPost = () => axios.get("/post");

export const getOtherUserPost = (otherid: number) =>
  axios.get("/post/" + otherid);
