import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookie } from "./getCookies";
import { API_URL, BBB_COOKIES } from "./constant";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  (
    configObj: InternalAxiosRequestConfig<any>
  ):
    | InternalAxiosRequestConfig<any>
    | Promise<InternalAxiosRequestConfig<any>> => {
    if (configObj.url === "/login") return configObj;
    if (configObj.url === "/register") return configObj;
    const token = getCookie(BBB_COOKIES);
    if (token) {
      configObj.headers.Authorization = `Bearer ${token}`;
    }

    // if (configObj.url === "/post" && configObj.method === "post") {
    //   configObj.headers["Content-Type"] = "multipart/form-data";
    //   // console.log("this taget");
    //   // console.log(configObj.headers["Content-Type"]);
    // }
    //configObj.headers["Content-Type"] = "multipart/form-data";
    //  const config = {
    //    headers: {
    //      "Content-Type": "multipart/form-data",
    //    },
    // //  };
    // console.log(configObj);
    return configObj;
  },
  (errObj) => {
    return Promise.reject(errObj);
  }
);

export default axios;
