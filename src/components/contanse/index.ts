import { IMenuType } from "../../types/mypage";
import { Icons } from "../../assets/icons";

export const menus: IMenuType[] = [
  {
    name: "My Page",
    BlackIcons: Icons.MyPageBlackIcons,
    whiteIcons: Icons.MyPageWhiteIcons,
  },
  {
    name: "Search user",
    BlackIcons: Icons.SearchUserBlackIcons,
    whiteIcons: Icons.SearchWhiteIcons,
  },
  {
    name: "Messages",
    BlackIcons: Icons.MessageBlackIcons,
    whiteIcons: Icons.MessageWhiteIcons,
  },
  {
    name: "Inquire",
    BlackIcons: Icons.RequireBlackIcons,
    whiteIcons: Icons.RequireWhiteIcons,
  },
];

export const LOGOUT: IMenuType[] = [
  {
    name: "Log out",
    BlackIcons: Icons.LogOutBlackIcons,
    whiteIcons: Icons.LogOutWhiteIcons,
  },
];
