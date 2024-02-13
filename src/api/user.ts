import axios from "../utils/axios";

export const updateUser = (userObj: FormData) => axios.patch("/user", userObj);

export const getOtherUser = (otherUserId: number) =>
  axios.post("/user/getOtherUserProfile", { otherUserId });
