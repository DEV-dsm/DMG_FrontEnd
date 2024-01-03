import axios, { AxiosError } from 'axios';
import { getToken, setToken } from '../functions/TokenManager';

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

    if (status === 500) {
      const originalRequest = config;
      const refreshToken = await getToken().refreshToken;
      const { data } = await axios.get(`${BASE_URL}/user/token`, {
        headers: { Authorization: `Bearer ${refreshToken}` },
      });
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = data.data;
      console.log('assessToken: ', newAccessToken, 'refreshToken: ', newRefreshToken);
      setToken(newAccessToken, newRefreshToken);
      axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      console.log(originalRequest);
      return axios(originalRequest);
    }
    return Promise.reject(error);
  },
);

export default instance;
