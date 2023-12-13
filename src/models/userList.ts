type BaseUserListType = {
  user_userId: string;
  qb_userID: string;
  number: number;
  subject: string;
  name: string;
  profile: string;
};

export type StudentListType = Omit<BaseUserListType, 'user_userId' | 'subject'>;

export type TeacherListType = Omit<BaseUserListType, 'qb_userID' | 'number'>;
