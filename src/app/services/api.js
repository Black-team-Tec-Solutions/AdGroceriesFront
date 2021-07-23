import axios from 'axios'

const baseURL = "http://localhost:3001/api"
axios.defaults.withCredentials= true
export const _api = axios.create({
    baseURL,
})

