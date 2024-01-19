import axios from "../utils/axios";

type InputObj = {};

type LoginObj = {
  emailOrMobile: string;
  password: string;
};

export const register = (input: InputObj) => axios.post("/register", input);

export const login = ({ emailOrMobile, password }: LoginObj) =>
  axios.post("/login", { emailOrMobile, password });
//destructuring เพื่อสื่อความหมายมากกว่า แต่แบบไหนก็ได้

export const getme = () => axios.get("/auth/me");
