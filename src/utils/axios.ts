import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookie } from "./getCookies";
import { API_URL } from "./constant";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  (
    configObj: InternalAxiosRequestConfig<any>
  ):
    | InternalAxiosRequestConfig<any>
    | Promise<InternalAxiosRequestConfig<any>> => {
    if (configObj.url === "/login") return configObj;
    if (configObj.url === "/register") return configObj;
    const token = getCookie("bumblebee-token");
    if (token) {
      configObj.headers.Authorization = `Bearer ${token}`;
    }
    return configObj;
  },
  (errObj) => {
    return Promise.reject(errObj);
  }
);

export default axios;
