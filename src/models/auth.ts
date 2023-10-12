export interface LoginInputDataType {
  name: string;
  placeholder: string;
  buttonCheck?: boolean;
}

export interface LoginInputType {
  identify: string;
  password: string;
}

export interface findPWInputType {
  email: string;
  authnumber: number;
}

export interface SendEmailRequestType {
  email: string;
}

export interface EmailverifyRequestType {
  authcode: number;
}
