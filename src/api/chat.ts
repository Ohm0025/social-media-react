import axios from "../utils/axios";

export const getAllContact = () => axios.get("/chat");
