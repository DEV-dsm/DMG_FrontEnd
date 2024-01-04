import { atom } from 'recoil';
import { IsearchDataProps } from '../models/userList';

export const searchedUsersState = atom({
  key: 'searchedUsersState',
  default: [] as IsearchDataProps[],
});

export const clickedState = atom<number>({
  key: 'clickedState',
  default: -1,
});

export const selectedState = atom({
  key: 'clickedState',
  default: null,
});
