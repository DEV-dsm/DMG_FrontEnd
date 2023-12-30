export interface IMenuType {
  name: string;
  id?: string;
  BlackIcons: string;
  whiteIcons: string;
}

export interface IUserInfoDetailType {
  name: string;
  id: number;
  placeholder?: string;
  otherplaceholder?: string;
  theotherplaceholder?: string;
  hasIcon: boolean;
}

// input type
export interface IUserInfoInputType {
  Identity?: string;
  Name?: string;
  Number?: number;
  Password?: string;
  PasswordCheck?: string;
  Email?: string;
  AuthNum?: number;
  Major?: string;
  GitHubName?: string;
}

// user api명세대로
export interface IUserInfoRequestType {
  identify: string;
  email: string;
  name: string;
  major: string;
  github: string;
  number: number;
  profile: string;
  background: string;
}
