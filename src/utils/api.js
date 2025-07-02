import axios from "axios";
import isTokenExpired from "../utils/isTokenExpired"; // pastikan file ini ada

// Ganti baseURL sesuai dengan env-mu
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Interceptor: Sisipkan token ke header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      // Cek apakah token sudah expired
      if (isTokenExpired(token)) {
        console.warn("Token expired. Redirecting to session-expired...");
        localStorage.clear();
        window.location.href = "/session-expired";
        return Promise.reject(new Error("Token expired"));
      }

      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor: Handle error global (misalnya token tidak valid)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const currentPath = window.location.pathname;

    const isOnAuthPage =
      currentPath === "/" ||
      currentPath === "/login" ||
      currentPath === "/session-expired";

    if (error.response?.status === 401 && !isOnAuthPage) {
      console.warn("Unauthorized or token expired. Redirecting...");
      localStorage.clear();
      window.location.href = "/session-expired";
    }

    return Promise.reject(error);
  }
);

export default api;
