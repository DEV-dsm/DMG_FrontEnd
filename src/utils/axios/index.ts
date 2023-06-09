import axios, { AxiosError } from "axios";
import { getToken, setToken } from "../functions/TokenManager";

const BASE_URL = process.env.DMG_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = getToken();

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
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

    if (status === 401 && error.response.data.message === "TokenExpiredError") {
      const originalRequest = config;
      const refreshToken = await getToken().refreshToken;
      const { data } = await axios.post(`${BASE_URL}/refersh`, {
        refreshToken: refreshToken,
      });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
        data;
      setToken(newAccessToken, newRefreshToken);
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
