import { IMenuType, IUserInfoDetailType } from '../types/mypage';
import { Icons } from '../assets/icons';

export const menus: IMenuType[] = [
  {
    name: 'My Page',
    id: 'mypage',
    BlackIcons: Icons.MyPageBlackIcons,
    whiteIcons: Icons.MyPageWhiteIcons,
  },
  {
    name: 'Search user',
    id: 'searchuser',
    BlackIcons: Icons.SearchUserBlackIcons,
    whiteIcons: Icons.SearchWhiteIcons,
  },
  {
    name: 'Messages',
    id: 'message',
    BlackIcons: Icons.MessageBlackIcons,
    whiteIcons: Icons.MessageWhiteIcons,
  },
  {
    name: 'Inquire',
    id: 'inquire',
    BlackIcons: Icons.RequireBlackIcons,
    whiteIcons: Icons.RequireWhiteIcons,
  },
];

export const LOGOUT: IMenuType = {
  name: 'Log out',
  BlackIcons: Icons.LogOutBlackIcons,
  whiteIcons: Icons.LogOutWhiteIcons,
};

export const UserInfo: IUserInfoDetailType[] = [
  {
    placeholder: 'Identity',
    id: 1,
    name: 'Identity',
    hasIcon: false,
  },
  {
    placeholder: 'Name',
    id: 2,
    name: 'Name',
    hasIcon: false,
  },
  {
    placeholder: 'Number',
    id: 3,
    name: 'Number',
    hasIcon: false,
  },
];

export const UserInfoDetail: IUserInfoDetailType[] = [
  {
    name: 'Password',
    id: 4,
    placeholder: 'password',
    placeholder1: 'Check Password',
    hasIcon: true,
  },
  {
    name: 'email',
    id: 5,
    placeholder: 'email@dsm.hs.kr',
    placeholder1: 'Auth Number',
    hasIcon: true,
  },
  {
    name: 'Other',
    id: 6,
    placeholder: 'Major',
    placeholder1: 'Github Username',
    hasIcon: false,
  },
];
