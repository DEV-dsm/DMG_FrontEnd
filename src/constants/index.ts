import { IMenuType, IUserInfoDetailType } from '../models/Mypage';
import { Icons } from '../assets/icons';
import { ILoginInputDataType } from '../models/auth';

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
    BlackIcons: Icons.MessageWhiteIcons,
    whiteIcons: Icons.MessageBlackIcons,
  },
  {
    name: 'Add chat',
    id: 'addChat',
    BlackIcons: Icons.addChatBlickIcons,
    whiteIcons: Icons.addChatWhiteIcons,
  },
  {
    name: 'Inquire',
    id: 'inquire',
    BlackIcons: Icons.RequireBlackIcons,
    whiteIcons: Icons.RequireWhiteIcons,
  },
];

export const Logout: IMenuType[] = [
  {
    name: 'Log out',
    id: 'logout',
    BlackIcons: Icons.LogOutBlackIcons,
    whiteIcons: Icons.LogOutWhiteIcons,
  },
];

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
  {
    name: 'email',
    id: 4,
    placeholder: 'email@dsm.hs.kr',
    hasIcon: true,
  },
];

export const TeacherInfo: IUserInfoDetailType[] = [
  {
    name: 'Identify',
    id: 1,
    placeholder: 'Identity',
    hasIcon: false,
  },
  {
    placeholder: 'Name',
    id: 2,
    name: 'Name',
    hasIcon: false,
  },
  {
    name: 'email',
    id: 3,
    placeholder: 'email@dsm.hs.kr',
    hasIcon: false,
  },
];

export const TeacherInfoDetail: IUserInfoDetailType[] = [
  {
    name: 'Other',
    id: 5,
    placeholder: 'Location',
    otherplaceholder: 'Subject',
    theotherplaceholder: 'Duty',
    hasIcon: false,
  },
];

export const UserInfoDetail: IUserInfoDetailType[] = [
  {
    name: 'Other',
    id: 5,
    placeholder: 'Major',
    otherplaceholder: 'Github Username',
    hasIcon: false,
  },
];

export const AuthLogin: ILoginInputDataType[] = [
  {
    name: 'identify',
    placeholder: 'Identify',
  },
  {
    name: 'password',
    placeholder: 'Password',
  },
];

export const FindPWInputs: ILoginInputDataType[] = [
  {
    name: 'email',
    placeholder: 'Email',
    buttonCheck: true,
  },
  {
    name: 'authnumber',
    placeholder: 'Auth Number',
  },
];

export const ChangePWInputs: ILoginInputDataType[] = [
  {
    name: 'password',
    placeholder: 'New Password',
  },
  {
    name: 'passwordCheck',
    placeholder: 'Password Check',
  },
];
