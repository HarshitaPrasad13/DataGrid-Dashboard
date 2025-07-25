import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api", // or wherever your auth server is running
  withCredentials: true,
});
