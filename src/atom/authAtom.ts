import { atom, selector } from 'recoil';
import { IChangePWInputType } from '../models/auth';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loginInputsAtom = atom({
  key: 'LoginInputsAtom',
  default: {
    identify: '',
    password: '',
  },
  effects_UNSTABLE: [persistAtom],
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
});

// Token selector

export const TokenAtom = atom({
  key: 'TokenAtom',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const isLoginSelector = selector({
  key: 'isLoginSelector',
  get: ({ get }) => !!get(TokenAtom),
});
