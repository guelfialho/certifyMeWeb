import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // ajuste conforme seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Adiciona o token automaticamente nas requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
