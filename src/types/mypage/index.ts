export interface IMenuType {
  name: string;
  id?: string;
  BlackIcons: string;
  whiteIcons: string;
}

export interface IUserInfoDetailType {
  name: string;
  id: number;
  placeholder: string;
  placeholder1?: string;
  hasIcon: boolean;
}

export interface UserInfoInputType {
  Identity: number;
  Name: string;
  Number: number;
  Password?: string;
  PasswordCheck?: string;
  Email?: string;
  AuthNum?: number;
  Major?: string;
  GitHubName?: string;
}

export interface UserInfoDetailInputType {
  Password: string;
  Email: string;
  Other: string;
}
