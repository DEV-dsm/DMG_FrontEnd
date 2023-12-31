import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { ChattingImages } from '../../../assets/chatting';
import { Images } from '../../../assets/mypage';
import {
  useGetChatRoomInfo,
  useNewManager,
  useOutChatRoom,
  useOutManager,
  useOutMember,
} from '../../../utils/api/chat';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../../assets/icons';
import { toast } from 'react-hot-toast';
import { CommonImages } from '../../../assets/common';

interface propsType {
  groupID: string;
  display: boolean;
  display2: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  newManager: boolean[];
  newManager2: boolean[];
}

export const InfoBody = ({
  groupID,
  display,
  display2,
  setDisplay,
  newManager,
  newManager2,
}: propsType) => {
  const navigate = useNavigate();

  const {
    data: chatRoomInfoData,
    isLoading: chatRoomInfoLoading,
    isError: chatRoomInfoError,
  } = useGetChatRoomInfo(groupID);

  const { mutate: outChatMutate } = useOutChatRoom(groupID);
  const { mutate: newManagerMutate } = useNewManager();
  const { mutate: outMemberMutate } = useOutMember();
  const { mutate: outManagerMutate } = useOutManager();

  const handleNewManager = async (groupID: string, userID: number) => {
    try {
      await newManagerMutate({ groupID, userID });
    } catch (err) {
      console.error('handleNewManager Error:', err);
    }
  };

  const handleOutMember = async (groupID: string, userID: number) => {
    try {
      await outMemberMutate({ groupID, userID });
    } catch (err) {
      console.error(err);
    }
  };

  const handleOutManager = async (groupID: string, userID: number) => {
    try {
      await outManagerMutate({ groupID, userID });
    } catch (err) {
       console.error(err)
    }
  };

  return (
    <Container display={display} display2={display2}>
      {chatRoomInfoLoading && <div>Loading...</div>}
      {chatRoomInfoError && <div>Error</div>}
      {chatRoomInfoData && (
        <InfoWrapper>
          <ImgWrapper>
            <Img src={chatRoomInfoData?.data.thisGroup.profile || CommonImages.logo1} />
          </ImgWrapper>

          <TitleWrapper>
            <Title>채팅방 이름</Title>
            <Title style={{ fontWeight: 500 }}>{chatRoomInfoData?.data.thisGroup.name}</Title>
          </TitleWrapper>

          <Wrapper>
            <TitleWrapper>
              <Title>채팅방 멤버</Title>
              <Btn onClick={() => navigate(`/message/${groupID}/addUser`)}>
                <Img3 src={ChattingImages.plus} />
              </Btn>
            </TitleWrapper>

            <ListWrapper>
              {chatRoomInfoData.data.member.map((v, i) => (
                <Member key={i}>
                  <div style={{ display: 'flex' }}>
                    <Img
                      src={v.profile || Images.defaultProfile}
                      style={{ width: '50px', marginRight: '15px' }}
                    />

                    <NameWrapper>
                      <UserName>{v.name}</UserName>
                      <Number>{v.identify}</Number>
                    </NameWrapper>
                  </div>

                  <Mark display={Boolean(v.isManager)} />
                </Member>
              ))}
            </ListWrapper>
          </Wrapper>

          <TitleWrapper>
            <Title>채팅방 나가기</Title>

            <Btn2 title="채팅방 나가기" onClick={() => outChatMutate()}>
              <Img src={Icons.LogOutBlackIcons} style={{ width: '35px' }} />
            </Btn2>
          </TitleWrapper>

          <TitleWrapper>
            <Title>채팅방 설정 변경</Title>

            <Btn2 onClick={() => setDisplay(!display2)}>
              <Img src={ChattingImages.modify} style={{ width: '35px' }} />
            </Btn2>
          </TitleWrapper>

          <Wrapper>
            <TitleWrapper>
              <Title>새로운 관리자 지정 & 채팅방 멤버 강제퇴장</Title>
            </TitleWrapper>

            <ListWrapper>
              {chatRoomInfoData.data.member.map((v, i) => (
                <Member key={i}>
                  <div style={{ display: 'flex' }}>
                    <Img
                      src={v.profile || Images.defaultProfile}
                      style={{ width: '50px', marginRight: '15px' }}
                    />

                    <NameWrapper>
                      <UserName>{v.name}</UserName>
                      <Number>{v.identify}</Number>
                    </NameWrapper>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Btn3 onClick={() => handleOutMember(groupID, v.userID)}>
                      <Img src={Images.dustBin} style={{ width: '25px' }} />
                    </Btn3>
                    <Mark display={Boolean(v.isManager)} />
                    <MarkBtn
                      style={{
                        background: newManager[i] ? '#393939' : '#ffffff',
                        border: newManager[i] ? 'none' : '1px solid #393939',
                      }}
                      display={!Boolean(v.isManager)}
                      onClick={() => handleNewManager(groupID, v.userID)}
                    />
                  </div>
                </Member>
              ))}
            </ListWrapper>
          </Wrapper>

          <Wrapper>
            <TitleWrapper>
              <Title>관리자 해제</Title>
            </TitleWrapper>

            <ListWrapper>
              {chatRoomInfoData.data.member.map((v, i) => (
                <Member key={i}>
                  <div style={{ display: 'flex' }}>
                    <Img
                      src={v.profile || Images.defaultProfile}
                      style={{ width: '50px', marginRight: '15px' }}
                    />

                    <NameWrapper>
                      <UserName>{v.name}</UserName>
                      <Number>{v.identify}</Number>
                    </NameWrapper>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {/* <Mark display={Boolean(v.isManager)} /> */}
                    <MarkBtn
                      style={{
                        background: newManager2[i] ? '#393939' : '#ffffff',
                        border: newManager2[i] ? 'none' : '1px solid #393939',
                      }}
                      // display={!Boolean(v.isManager)}
                      display={true}
                      onClick={() => handleOutManager(groupID, v.userID)}
                    />
                  </div>
                </Member>
              ))}
            </ListWrapper>
          </Wrapper>
        </InfoWrapper>
      )}
    </Container>
  );
};

const Container = styled.div<{ display: boolean; display2: boolean }>`
  display: ${({ display, display2 }) => (display || display2 ? 'none' : 'block')};
  width: 100%;
`;

const InfoWrapper = styled.div`
  padding: 20px 150px;
  width: 100%;
  height: 865px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  overflow-y: scroll;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 180px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Member = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 10px 15px;
  gap: 15px;

  &:hover {
    background: #ececef;
  }
`;

const UserName = styled.div`
  margin-bottom: 5px;
  font-family: Noto Sans;
  font-size: 18px;
  font-weight: 600;
`;

const Number = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  color: #393939;
`;

const Btn = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2.5px solid #393939;
  border-radius: 100px;
`;

const Img3 = styled.img`
  width: 15px;
`;

const Btn2 = styled.button`
  margin: 0;
  padding: 0;
  background: transparent;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MarkBtn = styled.button<{
  display: boolean;
}>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  width: 25px;
  height: 25px;
  border-radius: 100px;
`;

const Btn3 = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
`;

const Mark = styled.div<{
  display: boolean;
}>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  width: 25px;
  height: 25px;
  background: #393939;
  border-radius: 100px;
`;
