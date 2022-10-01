import axios from 'axios'

export const apiConfig = axios.create({
    baseURL : "https://api.github.com",
})
