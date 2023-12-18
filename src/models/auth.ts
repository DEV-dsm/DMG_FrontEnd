type AuthBaseType = {
  name: string;
  identify: string;
  password: string;
  email: string;
  authnumber: number;
};

export interface ILoginInputDataType {
  name: string;
  placeholder: string;
  buttonCheck?: boolean;
}

export interface IChangePWInputType {
  password: string;
  passwordCheck: string;
}

export interface IChangePwInputModalType {
  password: string;
  newPassword: string;
}

export interface IQuestionInputDataType {
  title: string;
  content: string;
}

export interface IGetIndividualUserListDataType {
  userID: number;
  identify: string;
  name: string;
  password: string;
  email: string;
  profile: string;
  background: string;
  isStudent: true;
  major: string;
  github: string;
  number: string;
  data: any;
}

export type LoginInputType = Pick<AuthBaseType, 'identify' | 'password'>;

export type findPWInputType = Pick<AuthBaseType, 'email' | 'authnumber'>;

export type SendEmailRequestType = Pick<AuthBaseType, 'email'>;

export type EmailverifyRequestType = Pick<AuthBaseType, 'authnumber'>;
