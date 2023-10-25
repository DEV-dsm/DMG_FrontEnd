import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { IChangePWInputType } from '../../../models/auth';
import { userChangePassword } from '../../../utils/api/auth';
import toast from 'react-hot-toast';

export const useChangePW = (inputData: IChangePWInputType) => {
  return useMutation(() => userChangePassword(inputData), {
    onSuccess: () => {
      toast.success('비밀번호가 수정되었습니다.', { duration: 1500 });
    },
    onError: (error: AxiosError) => {
      switch (error.response?.status) {
        case 404:
          toast.error('존재하지 않는 유저입니다.', { duration: 1500 });
          break;
        case 409:
          toast.error('비밀번호 형식에 알맞지 않습니다.', { duration: 1500 });
          break;
      }
    },
  });
};
