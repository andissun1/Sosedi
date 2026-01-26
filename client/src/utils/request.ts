import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.SERVER_URI || 'http://localhost:80',
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' },
  withCredentials: true,
});

// Добавляем токен в заголовок
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const request = {
  get: api.get,
  post: api.post,
  put: api.put,
  patch: api.patch,
  delete: api.delete,
};
