import axios from "axios";

const dataUrl = "https://school-website-api-hej5.onrender.com/";
const userUrl = "https://api.escuelajs.co/api/v1";

export const customFetch = axios.create({
    baseURL:dataUrl,
})

export const userFetch = axios.create({
    baseURL: userUrl,
})