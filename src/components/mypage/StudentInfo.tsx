import React, { useRef } from 'react';
import styled from 'styled-components';

import SubmitBtn from '../common/InfoButton';
import { Images } from '../../assets/mypage';
import UserInfoInput from '../mypage/UserInfoInput';
import { useFileInput } from '../hooks/useFileInput';

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
    <Wrapper>
      <ImageContainer>
        <BlockImg src={backgroundImage} />
        <FileChangeImg src={Images.whitePencil} onClick={() => imgRef.current?.click()} />
        <input
          type="file"
          accept="image/*"
          ref={imgRef}
          style={{ display: 'none' }}
          onChange={(e) => setBackgroundImage(e)}
        />
      </ImageContainer>

      <ProfileContainer>
        <ProfileImg src={defaultProfileImg} />
        <input
          type="file"
          accept="image/*"
          ref={ProfileImgRef}
          style={{ display: 'none' }}
          onChange={(e) => setDefaultProfileImage(e, true)}
        />
        <CorrectProfile>
          <ProfileChangeImg
            src={Images.BackblackPencil}
            onClick={() => ProfileImgRef.current?.click()}
          />
          <ProfileChangeImg src={Images.dustBin} onClick={resetDefaultProfileImage} />
        </CorrectProfile>
        <UserInfoInput />
        <SubmitBtn text="submit" />
      </ProfileContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 30vw;
  align-items: flex-start;
  overflow-y: scroll;
  border-right: 1px solid #393939;
  padding: 50px 70px 95px 70px;
  gap: 10px;
`;

const CorrectProfile = styled.div`
  display: flex;
  padding-top: 20px;
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

const ImageContainer = styled.div`
  position: relative;
`;

const BlockImg = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 50px;
  height: auto;
`;

const ProfileImg = styled.img`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -85%);
  width: 30%;
`;

const ProfileChangeImg = styled.img``;

export default StudentInfo;
