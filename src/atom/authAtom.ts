import { atom } from 'recoil';

export const loginInputsAtom = atom({
  key: 'LoginInputsAtom',
  default: {
    identify: '',
    password: '',
  },
});
