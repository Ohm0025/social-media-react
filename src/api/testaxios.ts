import axios from "axios";
import { handleResponse } from "../utils/handleRes";
import { API_URL } from "../../garbage/constant";

type LoginObj = {
  emailorphone: string;
  password: string;
};

export const loginUserService = async () => {
  try {
    const res = await axios.get(API_URL + "/cookies");
    console.log(res);
  } catch (err: any) {
    return handleResponse.error(err);
  }
};
