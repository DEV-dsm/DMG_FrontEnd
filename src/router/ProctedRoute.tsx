import { Outlet, Navigate, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { getToken } from '../utils/functions/TokenManager';

const ProtectedRoute = () => {
  const token = getToken().accessToken;
  const currentLocation = useLocation();
  const isRendering = useRef<boolean>(true);

  useEffect(() => {
    if (isRendering.current) {
      isRendering.current = false;
      return;
    }

    if (!token) {
      toast.error('로그인이 필요합니다.', { duration: 2000 });
    }
  }, [token]);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ redirecredFrom: currentLocation }} />
  );
};

export default ProtectedRoute;
