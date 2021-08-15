import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9qa4mSS7959Yv9bf18L8TkfKG2BAN5040omPjSgyejQ",
  }
});
