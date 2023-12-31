import { useRecoilValue } from 'recoil';
import { IGetIndividualUserListDataType, IQuestionInputDataType } from '../../../../models/auth';
import { IsearchDataProps } from '../../../../models/userList';
import instance from '../../../axios';
import { userIdAtom } from '../../../../atom/authAtom';
import { useMutation, useQuery } from 'react-query';

export const userQuestion = async (inputsData: IQuestionInputDataType) => {
  return await instance.post('/user/question', inputsData);
};

export const GetIndividualUserStudnet = () => {
  const userID = useRecoilValue(userIdAtom);
  const response = async () => {
    const { data } = await instance.get<IGetIndividualUserListDataType>(
      `/profile/student/${userID}`,
    );
    console.log(data);
    return data?.data;
  };
  return useQuery(['GetIndividualUserStudnet'], response);
};

export const GetIndividualUserTeacher = () => {
  const userID = useRecoilValue(userIdAtom);
  const response = async () => {
    const { data } = await instance.get<IGetIndividualUserListDataType>(
      `/profile/teacher/${userID}`,
    );
    console.log(data);
    return data?.data;
  };
  return useQuery(['GetIndividualUserTeacher'], response);
};

export const userChangePwData = async (password: string, newPassword: string) => {
  return await instance.patch<string>('/user/password', {
    password: password,
    newPassword: newPassword,
  });
};

export const SearchUsers = (
  standard: 'name' | 'number',
  keyword: string,
  buttonActive: 'student' | 'teacher',
) => {
  const response = async () => {
    const buttonValue = buttonActive === 'student' ? 'true' : 'false';
    return await instance.post<IsearchDataProps>(`/profile/search/${buttonValue}`, {
      standard: standard,
      keyword: keyword,
    });
  };
  return useMutation(response);
};

export const GetTeacherList = () => {
  const response = async () => {
    const { data } = await instance.get(`/profile/teacher`);
    return data.data;
  };
  return useQuery(['getTeacherUserLists'], response);
};

export const GetStudentList = () => {
  const response = async () => {
    const { data } = await instance.get(`/profile/student`);
    return data.data;
  };
  return useQuery(['getStudentUserLists'], response);
};
