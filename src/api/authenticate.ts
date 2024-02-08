import axios from "../utils/axios";
import { LoginObj, RegisterObj } from "../interface/authen";

export const userRegister = (input: RegisterObj) =>
  axios.post("/register", input);

export const userLogin = ({ EmailAddressOrPhoneNumber, Password }: LoginObj) =>
  axios.post("/login", { EmailAddressOrPhoneNumber, Password });

export const callToken = (sendCookie: string) => {
  return axios.post("/cookies", { sendCookie });
};
