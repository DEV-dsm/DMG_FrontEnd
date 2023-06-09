import cookies from "react-cookies";

export const setToken = (accessToken: string, refreshToken: string) => {
  cookies.save("accessToken", accessToken, {
    path: "/",
    httpOnly: false,
  });

  cookies.save("refreshToken", refreshToken, {
    path: "/",
    httpOnly: false,
  });
};

export const removeToken = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};

export const getToken = () => {
  const { accessToken, refreshToken } = cookies.select();
  return { accessToken, refreshToken };
};
