import { MutateOptions, useMutation, useQuery } from 'react-query';
import instance from '../../axios';
import { messageListDefaultType } from '../../../models/MessageList';
import { chatRoomInfoDefaultType } from '../../../models/ChatRoomInfo';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';

const path = '/chat';

/**
 * 채팅방 목록 조회 API
 * @param
 * @returns 채팅방 목록 조회 data
 */
export const useGetChatRoomList = () => {
  return useQuery(['getChatRoomList'], async () => {
    const { data } = await instance.get<messageListDefaultType>(`${path}/list`);
    return data;
  });
};

/**
 * 채팅방 정보 조회 API
 * @param groupID
 * @returns 채팅방 정보 조회 data
 */
export const useGetChatRoomInfo = (groupID: string) => {
  return useQuery(['getChatRoomInfo', groupID], async () => {
    const queryString = groupID ? `?groupID=${groupID}` : '';
    const { data } = await instance.get<chatRoomInfoDefaultType>(`${path}/info${queryString}`);
    return data;
  });
};

/**
 * 새로운 멤버 초대
 * @param groupID
 * @param newUser
 * @returns 성공 시
 */
export const useNewMember = (groupID: number, newUser: number[]) => {
  const navigate = useNavigate();

  return useMutation(
    async () => instance.post(`${path}/invite`, { groupID: groupID, newUser: newUser }),
    {
      onSuccess: () => {
        navigate(`/message/${groupID}`);
        toast.success(`새로운 멤버 초대를 성공했습니다!`, { duration: 1500 });
      },
      onError: (err: AxiosError) => {
        if (err.response) {
          switch (err.response.status) {
            case 401:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 404:
              toast.error('존재하지 않는 유저입니다.', { duration: 1500 });
              break;
            case 409:
              toast.error('채팅방에 이미 존재하는 유저입니다.', { duration: 1500 });
              break;
          }
        } else toast.error('네트워크 연결 상태를 확인해 주세요.', { duration: 1500 });
      },
    },
  );
};

/**
 * 채팅방 나가기
 * @param groupID
 * @returns 성공 시
 */
export const useOutChatRoom = (groupID: string) => {
  const navigate = useNavigate();
  const queryString = groupID ? `?groupID=${groupID}` : '';

  return useMutation(async () => instance.delete(`${path}/gone${queryString}`), {
    onSuccess: () => {
      navigate(`/message`);
      toast.success(`채팅방을 나갔습니다.`, { duration: 1500 });
    },
    onError: (err: AxiosError) => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
            toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
            break;
          case 404:
            toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
            break;
          case 409:
            toast.error('새로운 관리자를 추가해야 나갈 수 있습니다.', { duration: 1500 });
            break;
        }
      } else toast.error('네트워크 연결 상태를 확인해 주세요.', { duration: 1500 });
    },
  });
};

/**
 * 채팅방 정보 변경
 * @param groupID
 * @param groupName
 * @param groupProfile
 * @returns 성공 시
 */
export const useChangeChatRoomInfo = (groupID: string, groupName: string, groupProfile: string) => {
  return useMutation(
    async () =>
      instance.patch(`${path}/info`, {
        groupID: Number(groupID),
        groupName: groupName,
        groupProfile: groupProfile,
      }),
    {
      onSuccess: () => {
        toast.success(`채팅방 정보 변경을 성공했습니다.`, { duration: 1500 });
      },
      onError: (err: AxiosError) => {
        if (err.response) {
          switch (err.response.status) {
            case 401:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 403:
              toast.error('관리자만 채팅방 정보를 변경할 수 있습니다.', { duration: 1500 });
              break;
            case 404:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
          }
        } else toast.error('네트워크 연결 상태를 확인해 주세요.', { duration: 1500 });
      },
    },
  );
};

/**
 * 새로운 관리자 추가
 * @param groupID
 * @param userID
 * @returns 성공 시
 */
export const useNewManager = () => {
  return useMutation(
    async ({ groupID, userID }: { groupID: string; userID: number }) => {
      const queryString = groupID && userID ? `?groupID=${groupID}&userID=${userID}` : '';
      await instance.patch(`${path}/manage${queryString}`);
    },
    {
      onSuccess: () => {
        toast.success(`새로운 관리자 추가가 성공했습니다.`, { duration: 1500 });
      },
      onError: (err: AxiosError) => {
        if (err.response) {
          switch (err.response.status) {
            case 401:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 403:
              toast.error('관리자만 새로운 관리자를 추가할 수 있습니다.', { duration: 1500 });
              break;
            case 404:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 409:
              toast.error('해당 멤버는 이미 관리자입니다.', { duration: 1500 });
              break;
          }
        } else toast.error('네트워크 연결 상태를 확인해 주세요.', { duration: 1500 });
      },
    },
  );
};

/**
 * 멤버 강제퇴장
 * @param groupID
 * @param userID
 * @returns 성공 시
 */
export const useOutMember = () => {
  return useMutation(
    async ({ groupID, userID }: { groupID: string; userID: number }) => {
      const queryString = groupID && userID ? `?groupID=${groupID}&userID=${userID}` : '';
      await instance.delete(`${path}/getOut${queryString}`);
    },
    {
      onSuccess: () => {
        // toast.success(`멤버 강제퇴장이 성공했습니다.`, { duration: 1500 });
      },
      onError: (err: AxiosError) => {
        if (err.response) {
          switch (err.response.status) {
            case 401:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 403:
              toast.error('관리자만 멤버 강제퇴장할 수 있습니다.', { duration: 1500 });
              break;
            case 404:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 409:
              toast.error('본인과 관리자는 강제퇴장할 수 없습니다.', { duration: 1500 });
              break;
          }
        } else toast.error('네트워크 연결 상태를 확인해 주세요.', { duration: 1500 });
      },
    },
  );
};

/**
 * 관리자 해제
 * @param groupID
 * @param userID
 * @returns 성공 시
 */
export const useOutManager = () => {
  return useMutation(
    async ({ groupID, userID }: { groupID: string; userID: number }) => {
      const queryString = groupID && userID ? `?groupID=${groupID}&userID=${userID}` : '';
      await instance.patch(`${path}/manage/dismiss${queryString}`);
    },
    {
      onSuccess: () => {
        // toast.success(`멤버 강제퇴장이 성공했습니다.`, { duration: 1500 });
      },
      onError: (err: AxiosError) => {
        if (err.response) {
          switch (err.response.status) {
            case 401:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 403:
              toast.error('관리자만 관리자 해제할 수 있습니다.', { duration: 1500 });
              break;
            case 404:
              toast.error('개발자에게 문의해 주세요.', { duration: 1500 });
              break;
            case 409:
              toast.error('채팅방에는 한 명 이상의 관리자가 필요합니다.', { duration: 1500 });
              break;
          }
        } else toast.error('네트워크 연결 상태를 확인해 주세요.', { duration: 1500 });
      },
    },
  );
};
