import axios from 'axios'

//validar si mi apliacion esta en deploy (prod)

const iProdcution = process.env.NODE_ENV === 'production'
// si la app esta ya en produccion ccolocara otra ruta de lo contrario usara el localhostconst 
const baseURL = iProdcution ? "https://yani666.herokuapp.com/api" : "http://localhost:3001/api"


axios.defaults.withCredentials = true

export const _api = axios.create({
    baseURL,
})

