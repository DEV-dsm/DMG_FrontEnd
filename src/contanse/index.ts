import { IMenuType, IUserInfoType } from "../types/mypage";
import { Icons } from "../assets/icons";

export const menus: IMenuType[] = [
  {
    name: "My Page",
    id: "myPage",
    BlackIcons: Icons.MyPageBlackIcons,
    whiteIcons: Icons.MyPageWhiteIcons,
  },
  {
    name: "Search user",
    id: "searchUser",
    BlackIcons: Icons.SearchUserBlackIcons,
    whiteIcons: Icons.SearchWhiteIcons,
  },
  {
    name: "Messages",
    id: "messages",
    BlackIcons: Icons.MessageBlackIcons,
    whiteIcons: Icons.MessageWhiteIcons,
  },
  {
    name: "Inquire",
    id: "inquire",
    BlackIcons: Icons.RequireBlackIcons,
    whiteIcons: Icons.RequireWhiteIcons,
  },
];

export const LOGOUT: IMenuType = {
  name: "Log out",
  BlackIcons: Icons.LogOutBlackIcons,
  whiteIcons: Icons.LogOutWhiteIcons,
};

export const UserInfo: IUserInfoType[] = [
  {
    name: "Identity",
    id: 1,
  },
  {
    name: "Name",
    id: 2,
  },
  {
    name: "Number",
    id: 3,
  },
];
