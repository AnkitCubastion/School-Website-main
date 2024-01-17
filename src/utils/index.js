import axios from "axios";



const productionUrl = "http://localhost:3000/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});