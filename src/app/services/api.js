import axios from 'axios'


axios.defaults.withCredentials= true
//validar si mi apliacion esta en deploy(prod)
const iProdcution = process.env.NODE_ENV === 'production'
// si la app esta ya en produccion ccolocara otra ruta de lo contrario usara el 
const baseURL = iProdcution ? "https://www.yani666.herokuapp.com/api" : "http://localhost:3001/api"
export const _api = axios.create({
    baseURL,
})

