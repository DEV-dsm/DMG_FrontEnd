import { atom } from 'recoil';
import { findPWInputType } from '../models/auth';

export const loginInputsAtom = atom({
  key: 'LoginInputsAtom',
  default: {
    identify: '',
    password: '',
  },
});

export const findPwInputsAtom = atom<findPWInputType>({
  key: 'findPwInputsAtom',
  default: {
    email: '',
    authnumber: 0,
  },
});
