import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { ChattingImages } from '../../../assets/chatting';
import { Images } from '../../../assets/mypage';
import { useChangeChatRoomInfo, useGetChatRoomInfo, useOutChatRoom } from '../../../utils/api/chat';
import { useNavigate } from 'react-router-dom';
import { Icons } from '../../../assets/icons';
import useProfileImageUpload from '../../hooks/useProfileImageUpload';
// import { useUploadImage } from '../../../utils/api/upload';
import { useForm } from '../../hooks/useForm';
import { AxiosError } from 'axios';
import { chatRoomInfoResponse } from '../../../models/ChatRoomInfo';
import Input from '../../common/Input';
import { CommonImages } from '../../../assets/common';

interface propsType {
  groupId: string;
  display: boolean;
  data: chatRoomInfoResponse | undefined;
}

export const ModifyBody = ({ groupId, display, data }: propsType) => {
  const navigate = useNavigate();

  const fileInputRef = useRef<any>(null);

  const { uploadImg, previewImg, responseImg, handleProfileImgChange, clearImage } =
    useProfileImageUpload();

  const onClickHandler = () => fileInputRef.current.click();

  const {
    form: signForm,
    setForm: setSignForm,
    handleChange: signFormChange,
  } = useForm({
    groupID: groupId,
    groupName: '',
  });
  const { groupID, groupName } = signForm;

  const { mutate } = useChangeChatRoomInfo(groupID, groupName, responseImg ? responseImg : '');

  return (
    <Container display={display}>
      <InfoWrapper>
        <ProfileContainer>
          <div>
            {previewImg && <ProfileImg onClick={onClickHandler} src={previewImg} />}
            {!previewImg && <ProfileImg src={data?.thisGroup.profile || CommonImages.logo1} />}
            <ProfileSetIcons>
              <ProfileChangeImg onClick={onClickHandler} src={Images.BackblackPencil} />
              <ProfileChangeImg onClick={clearImage} src={Images.dustBin} />
            </ProfileSetIcons>
            <input
              onChange={(e) => handleProfileImgChange(e, Images, onClickHandler)}
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>

          <Input
            type="text"
            id="groupName"
            name="groupName"
            value={groupName}
            placeholder="변경할 채팅방 이름을 입력해 주세요."
            onChange={signFormChange}
          />

          <Btn
            onClick={() => {
              console.log(signForm);
              mutate();
            }}
          >
            Submit
          </Btn>
        </ProfileContainer>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  width: 100%;
`;

const InfoWrapper = styled.div`
  padding: 50px 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Btn = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #393939;
  border-radius: 100px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`;

const ProfileSetIcons = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

const ProfileImg = styled.img`
  width: 180px;
  border-radius: 50%;
`;

const ProfileChangeImg = styled.img`
  cursor: pointer;
  width: 40px;
`;
