import axios from "axios";

const externalApi = "https://ws.audioscrobbler.com/2.0/";

const api = axios.create({
    baseURL: externalApi
})

export default api;