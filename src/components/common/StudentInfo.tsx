import React, { useRef } from 'react';
import styled from 'styled-components';

import SubmitBtn from './SubmitBtn';
import { Images } from '../../assets/mypage';
import UserInfoInput from '../mypage/UserInfoInput';
import { useFileInput } from '../hooks/useFileInput';

const StudentInfo = () => {
  const { image: backgroundImage, onUpload: setBackgroundImage } = useFileInput(Images.BlockImg);
  const {
    backImage: defaultProfileImg,
    onUpload2: setDefaultProfileImage,
    resetImage: resetDefaultProfileImage,
  } = useFileInput(Images.defaultProfile);

  const imgRef = useRef<HTMLInputElement>(null);
  const ProfileImgRef = useRef<HTMLInputElement>(null);

  return (
    <Wrapper>
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
        <CorrectProfile>
          <ProfileChangeImg
            src={Images.BackblackPencil}
            onClick={() => ProfileImgRef.current?.click()}
          />
          <ProfileChangeImg src={Images.dustBin} onClick={resetDefaultProfileImage} />
        </CorrectProfile>
        <FormContainer>
          <UserInfoInput />
          <SubmitBtn text="submit" />
        </FormContainer>
      </ProfileContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 40%;
  align-items: center;
  overflow-y: scroll;
  border-right: 1px solid #393939;
  padding: 50px 60px 85px 60px;
`;

const CorrectProfile = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 10px;
  > img {
    width: 27px;
  }
`;

const FileChangeImg = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 0;
  right: 0;
  margin: 12px;
`;

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 500px;
`;

const BlockImg = styled.img`
  width: 100%;
  object-fit: contain;
  margin: auto;
  max-width: 500px;
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
  transform: translate(-50%, -70%);
  width: 30%;
`;

const ProfileChangeImg = styled.img``;

export default StudentInfo;
