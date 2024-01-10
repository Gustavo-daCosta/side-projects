import axios from "axios";

const externalApi = "https://ws.audioscrobbler.com/2.0";

const api = axios.create({
    baseURL: externalApi,
    // headers: {'api_key': process.env.REACT_APP_API_KEY}
})

export default api;