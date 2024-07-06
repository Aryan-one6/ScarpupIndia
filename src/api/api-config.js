import axios from "axios";
const headers = {
  "Content-Type": "application/json",
};

export const apiConfig = axios.create({
  baseURL: "https://waste2wealth.onrender.com/api/",
  headers: headers,
});
