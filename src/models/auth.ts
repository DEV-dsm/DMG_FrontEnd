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

export interface IQuestionInputDataType {
  title: string;
  content: string;
}

export type LoginInputType = Pick<AuthBaseType, 'identify' | 'password'>;

export type findPWInputType = Pick<AuthBaseType, 'email' | 'authnumber'>;

export type SendEmailRequestType = Pick<AuthBaseType, 'email'>;

export type EmailverifyRequestType = Pick<AuthBaseType, 'authnumber'>;
