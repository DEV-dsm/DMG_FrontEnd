import { IQuestionInputDataType } from '../../../../models/auth';
import instance from '../../../axios';

export const userQuestion = async (inputsData: IQuestionInputDataType) => {
  const response = await instance.post('user/question', {
    title: inputsData.title,
    content: inputsData.content,
  });
  return response;
};
