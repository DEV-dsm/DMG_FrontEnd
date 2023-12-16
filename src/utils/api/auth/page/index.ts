import { useRecoilValue } from 'recoil';
import { IGetIndividualUserListDataType, IQuestionInputDataType } from '../../../../models/auth';
import instance from '../../../axios';
import { userIdAtom } from '../../../../atom/authAtom';
import { useQuery } from 'react-query';

export const userQuestion = async (inputsData: IQuestionInputDataType) => {
  const response = await instance.post('/user/question', inputsData);
  return response;
};

export const GetIndividualUserList = () => {
  const userID = useRecoilValue(userIdAtom);
  const response = async () => {
    const { data } = await instance.get<IGetIndividualUserListDataType>(
      `/profile/student/${userID}`
    );
    console.log(data);
    return data?.data;
  };
  return useQuery(['GetIndividualUserList'], response);
};
