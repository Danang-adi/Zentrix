import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const getBalance = (address) => API.get(`/token/${address}`);

export const transferToken = (data) => API.post("/transfer", data);