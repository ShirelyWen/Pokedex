import axios from "axios";

// method to use URL for part of the applications
const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default instance;
