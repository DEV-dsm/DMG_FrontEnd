import { useRecoilValue } from 'recoil';
import { IGetIndividualUserListDataType, IQuestionInputDataType } from '../../../../models/auth';
import { IsearchDataProps } from '../../../../models/userList';
import instance from '../../../axios';
import { userIdAtom } from '../../../../atom/authAtom';
import { useMutation, useQuery } from 'react-query';
import toast from 'react-hot-toast';

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
  standard: string,
  keyword: string,
  buttonActive: 'student' | 'teacher',
  setSearchedUsers: React.Dispatch<React.SetStateAction<IsearchDataProps[]>>, // 상태 업데이트 함수를 인수로 추가
) => {
  const response = async () => {
    const buttonValue = buttonActive === 'student' ? 'true' : 'false';
    return await instance.post(`/profile/search/${buttonValue}`, {
      standard: standard,
      keyword: keyword,
    });
  };
  return useMutation(response, {
    onSuccess: (data) => {
      setSearchedUsers(data.data.data);
      toast.success('유저 검색이 성공적으로 완료되었습니다.');
    },
    onError: () => {
      toast.error('검색 중 오류가 발생했습니다.');
    },
  });
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
