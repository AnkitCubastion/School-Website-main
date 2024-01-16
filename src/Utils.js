import axios from "axios";

const dataUrl =  "http://localhost:3000";
const userUrl = "https://api.escuelajs.co/api/v1";

export const customFetch = axios.create({
    baseURL:dataUrl,
})

export const userFetch = axios.create({
    baseURL: userUrl,
})