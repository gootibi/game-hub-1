import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe93bb1ce48b4e56958320adc76d1381",
  },
});
