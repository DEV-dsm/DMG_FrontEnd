import { atom } from 'recoil';
import { ChangePWInputType } from '../models/auth';

export const loginInputsAtom = atom({
  key: 'LoginInputsAtom',
  default: {
    identify: '',
    password: '',
  },
});

export const findPwInputsAtom = atom({
  key: 'findPwInputsAtom',
  default: {
    email: '',
    authnumber: 0,
  },
});

export const ChangePWInputsAtom = atom<ChangePWInputType>({
  key: 'ChangePWInputsAtom',
  default: {
    password: '',
    passwordCheck: '',
  },
});

export const sendEmailAtom = atom({
  key: 'sendEmailAtom',
  default: {
    email: '',
  },
});

export const AuthverifyAtom = atom({
  key: 'AuthverifyAtom',
  default: {
    authcode: 0,
  },
});
