import { UpdateUserObj } from "../interface/user";
import axios from "../utils/axios";

export const updateUser = (userObj: FormData) => axios.patch("/user", userObj);
