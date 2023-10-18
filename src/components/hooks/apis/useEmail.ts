import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { SendEmailRequestType } from '../../../models/auth';
import { userEmail } from '../../../utils/api/auth';
import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { sendEmailAtom } from '../../../atom/authAtom';

export const useEmail = (inputData: SendEmailRequestType) => {
  const emailAtom = useSetRecoilState(sendEmailAtom);
  return useMutation(() => userEmail(inputData), {
    onSuccess: () => {
      toast.success(`인증번호 발송 완료`, { duration: 1500 });
      emailAtom(inputData.email);
    },
    onError: (error: AxiosError) => {
      switch (error.response?.status) {
        case 404:
          toast.error(`존재하지 않는 이메일 입니다.`, { duration: 1500 });
          break;
      }
    },
  });
};
