import axios, { AxiosError } from 'axios';
import { getToken, setToken } from '../../functions/TokenManager';

const BASE_URL = process.env.REACT_APP_PUBLIC_DMG_BASE_URL;

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

AxiosInstance.interceptors.request.use(
  async (config) => {
    const { accessToken } = getToken();

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    if (status === 401 && error.response.data.message === 'TokenExpirationError') {
      const originalRequest = config;
      const refreshToken = await getToken().refreshToken;
      const { data } = await axios.post(`${BASE_URL}/token`, {
        refreshToken,
      });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data;
      setToken(newRefreshToken, newRefreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originalRequest.headers.common.Authorization = `Bearer ${newRefreshToken}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
