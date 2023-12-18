import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userChangePwData } from '../../../utils/api/auth/page';
import { AxiosError } from 'axios';

export const useChangePw = (password: string, newPassword: string) => {
  const navigate = useNavigate();
  return useMutation(() => userChangePwData(password, newPassword), {
    onSuccess: () => {
      toast.success(`비밀번호 수정 완료`, { duration: 1500 });
    },
    onError: (error: AxiosError) => {
      switch (error.response?.status) {
        case 401:
          toast.error(`토큰이 유효하지 않습니다.`, { duration: 1500 });
          navigate('/');
          break;
        case 404:
          toast.error(`존재하지 않는 유저입니다.`, { duration: 1500 });
          navigate('/');
          break;
        case 409:
          toast.error(`기존 비밀번호와 새 비밀번호가 일치합니다.`, { duration: 1500 });
          break;
      }
    },
  });
};
