import { atom, selector } from 'recoil';
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

export const userIdAtom = atom<string | null>({
  key: 'userIdAtom',
  default: null,
});

// Token selector

export const TokenAtom = atom({
  key: 'TokenAtom',
  default: undefined,
});

export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(TokenAtom),
});
