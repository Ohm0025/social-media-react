import axios from "../utils/axios";
import { LoginObj } from "../interface/authen";

type InputObj = {};

export const userRegister = (input: InputObj) => axios.post("/register", input);

export const userLogin = ({ EmailAddressOrPhoneNumber, Password }: LoginObj) =>
  axios.post("/login", { EmailAddressOrPhoneNumber, Password });

//older version
export const getme = () => axios.get("/auth/me");
