import Axios from "axios";
import { R_TOKEN } from "@/utils/constants";

const baseURL =
  import.meta.env.VITE_BASE_API_URL || "http://localhost:3000/api";

const axios = Axios.create({
  baseURL,
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(R_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["Content-Type"] = "application/json";

  return config;
});

export default axios;
