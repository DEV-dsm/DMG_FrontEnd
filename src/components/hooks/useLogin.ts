import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { setToken } from '../../utils/functions/TokenManager';
import { LoginInputType } from '../../models/Login';
import { userLogin } from '../../utils/api/auth';

export const useLogin = (inputData: LoginInputType) => {
  const navigate = useNavigate();

  return useMutation(() => userLogin(inputData), {
    onSuccess: ({ data }) => {
      toast.success(`로그인에 성공했습니다.`, { duration: 1500 });
      setToken(data.data.access, data.data.refresh);
      navigate('/mypage');
    },
    onError: (error: AxiosError) => {
      switch (error.response?.status) {
        case 404:
          toast.error(`존재하지 않는 유저입니다.`, { duration: 1500 });
          break;
        case 409:
          toast.error(`비밀번호가 일치하지 않습니다.`, { duration: 1500 });
      }
    },
  });
};
