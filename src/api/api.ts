import axios from 'axios';

import authService from '../services/useAuth';

const instance = axios.create({
  baseURL: 'https://todoo.5xcamp.us/'
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers && authService.getToken()) {
      config.headers['Authorization'] = authService.getToken() as string;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error.response.data)
);

export default instance;
