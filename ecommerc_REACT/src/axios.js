import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:3100",
});

export default instance;