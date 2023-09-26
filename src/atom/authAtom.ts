import { atom } from 'recoil';
import { LoginInputType } from '../models/Login';

export const LoginInputAtom = atom<LoginInputType>({
  key: 'LoginInputAtom',
  default: {
    identify: '',
    password: '',
  },
});
