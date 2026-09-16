import axios, { type AxiosError } from "axios";
import { notify } from "../lib/notify";

const http = axios.create({
  baseURL: "/",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});

http.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string }>) => {
    const status = error.response?.status;

    if (status !== 401) {
      notify.error(error.response?.data?.message ?? "Что-то пошло не так. Попробуйте позже");
    }

    return Promise.reject(error);
  }
);

export { http };
