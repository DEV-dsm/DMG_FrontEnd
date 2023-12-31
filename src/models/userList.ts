type BaseUserListType = {
  user_userId: string;
  qb_userID: number;
  number: number;
  subject: string;
  name: string;
  profile: string;
};

export interface IsearchDataProps {
  standard: 'name' | 'number';
  keyword: string;
  buttonActive: 'student' | 'teacher';
}

export type StudentListType = Omit<BaseUserListType, 'user_userId' | 'subject'>;

export type TeacherListType = Omit<BaseUserListType, 'qb_userID' | 'number'>;
