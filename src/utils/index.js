import axios from "axios";



const productionUrl = "https://school-website-api-hej5.onrender.com/";

export const customFetch = axios.create({
  baseURL: productionUrl,
});