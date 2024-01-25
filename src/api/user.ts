import axios from "../utils/axios";

export const updateUserPicture = (userObj: FormData) =>
  axios.post("/updateUserPicture", userObj);
