import axios from "../utils/axios";

export const getAllContact = () => axios.get("/chat");

export const getAllChat = (targetId: number) => axios.get("/chat/" + targetId);
