import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "974245f491c2427f901b0d271256e590",
  },
});
