import axios from "axios";

export default axios.create({ baseURL: "http://localhost:6001/api/cities" });