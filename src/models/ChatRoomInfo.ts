export interface chatRoomInfoDefaultType {
  data: chatRoomInfoResponse;
  statusCode: number;
  statusMsg: string;
}

export interface chatRoomInfoResponse {
  thisGroup: thisGroupType;
  member: memberType[];
  isOrganization: boolean;
}

export interface thisGroupType {
  groupID: number;
  name: string;
  profile: string;
}

export interface memberType {
  userID: number;
  isManager: number; // boolean
  identify: string;
  name: string;
  profile: string;
}
