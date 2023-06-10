import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e74204155d8144ec9ff3837d0bf73f12",
  },
});
