import { IMenuType } from "../../types/mypage";
import {
  MyPageBlackIcons,
  SearchUserBlackIcons,
  MessageBlackIcons,
  RequireBlackIcons,
  MyPageWhiteIcons,
  SearchWhiteIcons,
  MessageWhiteIcons,
  RequireWhiteIcons,
  LogOutBlackIcons,
  LogOutWhiteIcons,
} from "../../assets/icons";

export const menus: IMenuType[] = [
  {
    name: "My Page",
    BlackIcons: MyPageBlackIcons,
    whiteIcons: MyPageWhiteIcons,
  },
  {
    name: "Search user",
    BlackIcons: SearchUserBlackIcons,
    whiteIcons: SearchWhiteIcons,
  },
  {
    name: "Messages",
    BlackIcons: MessageBlackIcons,
    whiteIcons: MessageWhiteIcons,
  },
  {
    name: "Inquire",
    BlackIcons: RequireBlackIcons,
    whiteIcons: RequireWhiteIcons,
  },
];

export const LOGOUT: IMenuType[] = [
  {
    name: "Log out",
    BlackIcons: LogOutBlackIcons,
    whiteIcons: LogOutWhiteIcons,
  },
];
