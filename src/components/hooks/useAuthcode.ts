import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { findPWInputType } from '../../models/auth';
import { userAuthcode } from '../../utils/api/auth';

export const useAuthCode = (inputsData: findPWInputType) => {
  return useMutation(() => userAuthcode(inputsData), {
    onSuccess: () => {
      toast.success('인증에 성공하였습니다!', { duration: 1500 });
    },
    onError: (error: AxiosError) => {
      switch (error.response?.status) {
        case 404:
          toast.error('존재하지 않는 이메일입니다.', { duration: 1500 });
          break;
        case 409:
          toast.error('일치하지 않는 인증번호입니다.', { duration: 1500 });
          break;
      }
    },
  });
};
