import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { userQuestion } from '../../../utils/api/auth/page';
import { IQuestionInputDataType } from '../../../models/auth';

export const useQuestion = (inputData: IQuestionInputDataType) => {
  return useMutation(() => userQuestion(inputData), {
    onSuccess: () => {
      toast.success(`문의 완료`, { duration: 1500 });
    },
    onError: (error: AxiosError) => {
      switch (error.response?.status) {
        case 404:
          toast.error(`찾을 수 없는 사용자 입니다.`, { duration: 1500 });
      }
    },
  });
};
