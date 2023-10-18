import { useRecoilValue } from 'recoil';
import { isLoginSelector } from '../atom/authAtom';
import { Outlet, Navigate, useLocation } from 'react-router';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  const currentLocation = useLocation();

  const isLoginRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (isLoginRef.current !== null && !isLoginRef.current && !isLogin) {
      toast.error('로그인이 필요합니다.', { duration: 2000 });
    }
    isLoginRef.current = isLogin;
  }, [isLogin]);

  return isLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ redirecredFrom: currentLocation }} />
  );
};

export default ProtectedRoute;
