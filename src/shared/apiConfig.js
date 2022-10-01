import axios from 'axios'

export const apiConfig = axios.create({
    baseURL : "https://api.github.com",
    headers:{
        Authorization: "Bearer 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"
    }
})
