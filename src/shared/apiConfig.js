import axios from 'axios'

export const apiConfig = axios.create({
    baseURL : "https://api.github.com",
    headers:{
        Authorization: "Bearer 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"
    }
})
