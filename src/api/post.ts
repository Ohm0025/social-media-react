import axios from "../utils/axios";

export const createPost = (postObj: FormData) => {
  axios.post("/post", postObj);
};

//export const createPost = (postObj: FormData) => console.log(postObj);

export const getMyPost = (limit: number, postType: string) =>
  axios.post("/post/postMy", { limit, postType });

export const removePost = (postid: number) => axios.delete("/post/" + postid);

export const getStandardPost = (
  limit: number = 5,
  postType: string = "only_friend"
) => axios.post("/post/standardpost", { limit, postType });

export const getOtherUserPost = (otherid: number) =>
  axios.get("/post/" + otherid);

export const getPicturePost = (targetId: number) =>
  axios.post("/post/getPicture", { targetId });

export const editPost = (postid: number, newPost: FormData) =>
  axios.patch("/post/" + postid, newPost);
