import axios from "axios";

import { API_URL } from "../utils/constant";

const callToken = async (sendCookie: string | undefined) => {
  const res = await axios.post(API_URL + "/cookies", sendCookie);
  return res.data;
};

export { callToken };
