import { IQuestionInputDataType } from '../../../../models/auth';
import instance from '../../../axios';

export const userQuestion = async (inputsData: IQuestionInputDataType) => {
  const response = await instance.post('/user/question', inputsData);
  return response;
};
