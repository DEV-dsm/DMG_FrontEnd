import { useEffect, useState } from 'react';
import Message from './Message';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Header } from '../components/pages/chatting/header';
import { ChatBodyArea } from '../components/pages/chatting/ChatBodyArea';
import { InputBlock } from '../components/pages/chatting/inputBlock';
import { useGetChatRoomInfo } from '../utils/api/chat';
import { InfoBody } from '../components/pages/chatting/InfoBody';
import { ModifyBody } from '../components/pages/chatting/ModifyBody';

interface propsType {
  is?: boolean;
  click?: boolean;
}

const ChattingPage = ({ is, click = true }: propsType) => {
  const [click1, setClick1] = useState(click);
  const [click2, setClick2] = useState(false);

  const { groupID } = useParams<{ groupID: string }>();

  const [newManager, setNewManager] = useState<boolean[]>([]);

  const {
    data: chatRoomInfoData,
    isLoading: chatRoomInfoLoading,
    isError: chatRoomInfoError,
  } = useGetChatRoomInfo(groupID ? groupID : '');

  useEffect(() => {
    if (chatRoomInfoData?.data && chatRoomInfoData?.data.member) {
      setNewManager(Array(chatRoomInfoData.data.member.length).fill(false));
    }
  }, [chatRoomInfoData?.data?.member]);
  return (
    <>
      <Message display={is} />

      <Container>
        <Header
          data={chatRoomInfoData?.data}
          isLoading={chatRoomInfoLoading}
          isError={chatRoomInfoError}
          click={click1}
          setClick={setClick1}
        />

        <ChatBodyArea display={click1} />
        <InputBlock display={click1} />

        <InfoBody
          groupID={groupID ? groupID : ''}
          display={click1}
          display2={click2}
          setDisplay={setClick2}
          newManager={newManager}
          newManager2={newManager}
        />

        <ModifyBody
          groupId={groupID ? groupID : ''}
          display={click2}
          data={chatRoomInfoData?.data}
        />
      </Container>
    </>
  );
};

export default ChattingPage;

const Container = styled.div`
  width: 50vw;
  overflow-y: hidden;
`;
