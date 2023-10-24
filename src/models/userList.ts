interface ListType {
  userId: string;
  userName: string;
  profile: string;
}

export interface IStudentListType extends ListType {
  number: number;
}

export interface ITeacherListType extends ListType {
  subject: string;
}
