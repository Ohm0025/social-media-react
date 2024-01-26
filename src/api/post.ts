import axios from "../utils/axios";

export const createPost = (postObj: any) => {
  console.log(postObj);
  return axios.post("/post", postObj);
};
//export const createPost = (postObj: FormData) => console.log(postObj);

export const getMyPost = () => axios.get("/postMy");

export const removePost = (postid: number) => axios.delete("/post/" + postid);

export const getStandardPost = () => axios.get("/post");
