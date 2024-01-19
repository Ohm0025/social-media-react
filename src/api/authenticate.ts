import axios from "../utils/axios";

type InputObj = {};

type LoginObj = {
  EmailAddressOrPhoneNumber: string;
  Password: string;
};

export const userRegister = (input: InputObj) => axios.post("/register", input);

export const userLogin = ({ EmailAddressOrPhoneNumber, Password }: LoginObj) =>
  axios.post("/login", { EmailAddressOrPhoneNumber, Password });
//destructuring เพื่อสื่อความหมายมากกว่า แต่แบบไหนก็ได้

export const getme = () => axios.get("/auth/me");
