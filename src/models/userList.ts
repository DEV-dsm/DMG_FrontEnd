export interface BaseUserListType {
  user_userID: number;
  qb_userID: number;
  number: number;
  subject: string;
  name: string;
  profile: string;
}

export interface IsearchDataProps {
  user_userID: number;
  name: string;
  profile: string | null;
  number: string;
}

export interface IsearchResponseDataProps {
  data: {
    user_userID: number;
    name: string;
    profile: string | null;
    number: string;
  }[];
  statusCode: number;
  statusMsg: string;
}

export interface IsearchUserDataTypeDTO {
  userID: number;
  identify: string | number;
  name: string;
  password: string;
  email: string;
  profile: string;
  background: string;
  isStudent: true;
  major: string;
  github: string;
  number: number | string;
  isOnline: true;
}

export type StudentListType = Omit<BaseUserListType, 'user_userId' | 'subject'>;

export type TeacherListType = Omit<BaseUserListType, 'qb_userID' | 'number'>;
