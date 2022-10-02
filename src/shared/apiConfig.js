import axios from 'axios'

export const apiConfig = axios.create({
    baseURL : "https://api.github.com",
    headers:{
        Authorization: "Bearer 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"
    }
})
