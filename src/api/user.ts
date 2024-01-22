import axios from "../utils/axios";

export const updateProfilePicture = (userObj: FormData) =>
  axios.post("/updateProfilePicture", userObj);

export const updateProfileCover = (userObj: FormData) =>
  axios.post("/updateProfileCover", userObj);
