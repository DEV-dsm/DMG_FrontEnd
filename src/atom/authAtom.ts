import { atom } from 'recoil';
import { IChangePWInputType } from '../models/auth';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

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

export const ChangePWInputsAtom = atom<IChangePWInputType>({
  key: 'ChangePWInputsAtom',
  default: {
    password: '',
    passwordCheck: '',
  },
});

export const AuthverifyAtom = atom({
  key: 'AuthverifyAtom',
  default: {
    authcode: 0,
  },
});

export const sendEmailAtom = atom<string | null>({
  key: 'sendEmailAtom',
  default: null,
});

export const userIdAtom = atom<number>({
  key: 'userIdAtom',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
