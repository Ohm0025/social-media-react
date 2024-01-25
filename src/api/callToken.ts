import axios from "../utils/axios";

export const callToken = (sendCookie: string) => {
  return axios.post("/cookies", { sendCookie });
};
