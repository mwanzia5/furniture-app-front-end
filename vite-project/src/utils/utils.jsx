import axios from "axios";

export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:5000`
    : process.env.BASE_URL;


export const api = axios.create({
      baseURL: BASE_URL,
      responseType: "json"

    });  
    

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
      }
    };
 
   