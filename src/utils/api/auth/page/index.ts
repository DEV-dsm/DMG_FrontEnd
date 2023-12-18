import { useRecoilValue } from 'recoil';
import { IGetIndividualUserListDataType, IQuestionInputDataType } from '../../../../models/auth';
import instance from '../../../axios';
import { userIdAtom } from '../../../../atom/authAtom';
import { useQuery } from 'react-query';

export const userQuestion = async (inputsData: IQuestionInputDataType) => {
  return await instance.post('/user/question', inputsData);
};

export const GetIndividualUserList = () => {
  const userID = useRecoilValue(userIdAtom);
  const response = async () => {
    const { data } = await instance.get<IGetIndividualUserListDataType>(
      `/profile/student/${userID}`,
    );
    console.log(data);
    return data?.data;
  };
  return useQuery(['GetIndividualUserList'], response);
};

export const userChangePwData = async (password: string, newPassword: string) => {
  return await instance.patch('/user/password', {
    password,
    newPassword,
  });
};
