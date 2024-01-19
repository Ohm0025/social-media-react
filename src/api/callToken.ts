import axios from "../utils/axios";

export const callToken = (sendCookie: string) => {
  console.log(sendCookie);
  return axios.post("/cookies", { sendCookie });
};
