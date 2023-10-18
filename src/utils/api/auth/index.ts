import instance from '../../axios';
import {
  ChangePWInputType,
  LoginInputType,
  SendEmailRequestType,
  findPWInputType,
} from '../../../models/auth';

export const userLogin = async (inputsData: LoginInputType) => {
  const response = await instance.post('/user/login', {
    identify: inputsData.identify,
    password: inputsData.password,
  });
  return response;
};

export const userEmail = async (inputsData: SendEmailRequestType) => {
  const response = await instance.post('/user/email', {
    email: inputsData.email,
  });
  return response;
};

export const userAuthcode = async (inputsData: findPWInputType) => {
  const email = inputsData.email;
  const response = await instance.post(`/user/verify/${email}`, {
    code: inputsData.authnumber,
  });
  return response;
};

export const userChangePassword = async (inputsData: ChangePWInputType) => {
  const response = await instance.patch('user/findPW', {
    newPassword: inputsData.passwordCheck,
  });
  return response;
};
