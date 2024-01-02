import axios, { AxiosError } from 'axios';
import { getToken } from '../functions/TokenManager';

const BASE_URL = process.env.REACT_APP_PUBLIC_DMG_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const { accessToken } = getToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401 && error.response.data.message === 'TokenExpiredError') {
      const originalRequest = config;
      const refreshToken = localStorage.getItem('refreshToken');

      const { data } = await instance.get(`${BASE_URL}/user/token`, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default instance;
