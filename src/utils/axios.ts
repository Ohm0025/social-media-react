import axios, { InternalAxiosRequestConfig } from "axios";
import { getCookie } from "./getCookies";

axios.defaults.baseURL = import.meta.env.API_URL;

axios.interceptors.request.use(
  (
    configObj: InternalAxiosRequestConfig<any>
  ):
    | InternalAxiosRequestConfig<any>
    | Promise<InternalAxiosRequestConfig<any>> => {
    if (configObj.url === "/login") return configObj;
    if (configObj.url === "/register") return configObj;
    const token = getCookie(import.meta.env.BBB_COOKIES);
    if (token) {
      configObj.headers.Authorization = `Bearer ${token}`;
    }

    return configObj;
  },
  (errObj) => {
    return Promise.reject(errObj);
  }
);

axios.interceptors.response.use(
  (response) => {
    // If the response is successful, return it as is
    return response;
  },
  (error) => {
    // Check if the error is an internal server error (status code 500)
    if (error.response && error.response.status === 500) {
      // Replace the error message with your custom error message
      error.message = "Internal server error. Please try again later.";
    }
    // Pass the error along to be handled by the caller
    return Promise.reject(error);
  }
);

export default axios;
