import axios from 'axios'

export const apiConfig = axios.create({
    baseURL : process.env.BASE_URL,
})

export const RequestInterceptor = (config) => {
    const token = localStorage.getItem('auth_token');
  
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  
    return config;
  };