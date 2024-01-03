import { useMutation } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';
import { setToken } from '../../../utils/functions/TokenManager';
import { LoginInputType } from '../../../models/auth';
import { userLogin } from '../../../utils/api/auth';
import { useSetRecoilState } from 'recoil';
import { userIdAtom } from '../../../atom/authAtom';

export const useLogin = (inputData: LoginInputType) => {
  const location = useLocation();
  const navigate = useNavigate();
  const setUserId = useSetRecoilState(userIdAtom);
  const from = location?.state?.redirectedFrom || '/mypage';

  return useMutation(() => userLogin(inputData), {
    onSuccess: (response) => {
      const { data } = response;
      toast.success(`로그인에 성공했습니다.`, { duration: 1500 });
      setToken(data.data.access, data.data.refresh);
      setUserId(data.data.userID);
      navigate(from);
    },
    onError: (error: AxiosError) => {
      console.log(error.request);
      if (error.response) {
        switch (error.response.status) {
          case 404:
            toast.error(`존재하지 않는 유저입니다.`, { duration: 1500 });
            break;
          case 409:
            toast.error(`비밀번호가 일치하지 않습니다.`, { duration: 1500 });
            break;
          default:
            toast.error(`오류가 발생하였습니다`);
        }
      } else {
        toast.error(`네트워크 오류가 발생하였습니다`);
      }
    },
  });
};
