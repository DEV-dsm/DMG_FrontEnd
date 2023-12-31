export interface messageListDefaultType {
  data: chatRoomResponse[];
  statusCode: number;
  statusMsg: string;
}

export interface chatRoomResponse {
  groupID: number;
  name: string;
  profile: string;
  body: string;
  isAnnounce: number; // boolean
  userID: number;
  chatID: number;
}
