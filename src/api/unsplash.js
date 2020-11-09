import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID nbvull6b_JcyUck72_7WtZuaWael6S78VZ_IMd8RkeY",
  },
  params: {
    per_page: 20,
  },
});
