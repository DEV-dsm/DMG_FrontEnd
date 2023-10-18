import React, { useRef } from 'react';
import styled from 'styled-components';

import { Images } from '@/assets/mypage';
import UserInfoInput from '../mypage/UserInfoInput';
import { useFileInput } from '../hooks/useFileInput';
import SubmitBtn from '../common/InfoButton';

const StudentInfo = () => {
  const { image: backgroundImage, onUpload: setBackgroundImage } = useFileInput(Images.BlockImg);
  const {
    backImage: defaultProfileImg,
    onUpload: setDefaultProfileImage,
    resetImage: resetDefaultProfileImage,
  } = useFileInput(Images.defaultProfile);

  const imgRef = useRef<HTMLInputElement>(null);
  const ProfileImgRef = useRef<HTMLInputElement>(null);

  return (
    <UserInfoWrapper>
      <ImageContainer>
        <BlockImg src={backgroundImage} />
        <FileChangeImg src={Images.whitePencil} onClick={() => imgRef.current?.click()} />
      </ImageContainer>

      <input
        type="file"
        id="fileInput"
        accept="image/*"
        ref={imgRef}
        style={{ display: 'none' }}
        onChange={(e) => setBackgroundImage(e)}
      />

      <ProfileContainer>
        <ProfileImg src={defaultProfileImg} alt="" />
        <input
          type="file"
          id="fileInputs"
          accept="image/*"
          ref={ProfileImgRef}
          style={{ display: 'none' }}
          onChange={(e) => setDefaultProfileImage(e)}
        />

        <ProfileSetIcons>
          <ProfileChangeImg
            src={Images.BackblackPencil}
            onClick={() => ProfileImgRef.current?.click()}
          />
          <ProfileChangeImg src={Images.dustBin} onClick={resetDefaultProfileImage} />
        </ProfileSetIcons>

        <UserInfoInput />
        <SubmitBtn text="submit" width="50%" />
      </ProfileContainer>
    </UserInfoWrapper>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  border-right: 1px solid #393939;
  padding: 50px 60px 85px 60px;
`;

const ProfileSetIcons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  padding-top: 30px;
`;

const FileChangeImg = styled.img`
  position: absolute;
  width: 23px;
  height: 23px;
  bottom: 7px;
  right: 5px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const BlockImg = styled.img`
  width: 100%;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -75%);
  width: 33%;
`;

const ProfileChangeImg = styled.img`
  width: 25px;
`;

export default StudentInfo;
