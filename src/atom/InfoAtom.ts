import { atom } from 'recoil';
import { IUserInfoRequestType } from '../models/Mypage';

export const UserInfoRequestAtom = atom<IUserInfoRequestType>({
  key: 'UserInfoRequestAtom',
  default: {
    identify: '',
    email: '',
    name: '',
    major: '',
    github: '',
    number: 0,
    profile: '',
    background: '',
  },
});
