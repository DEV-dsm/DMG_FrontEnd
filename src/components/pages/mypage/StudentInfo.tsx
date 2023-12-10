import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Images } from '../../../assets/mypage';
import UserInfoInput from '../mypage/UserInfoInput';
import SubmitBtn from '../../common/InfoButton';
import { IUserInfoRequestType } from '../../../models/Mypage';

const StudentInfo = () => {
  const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>('');
  const [inputs, setInputs] = useState<IUserInfoRequestType>({
    identify: '',
    email: '',
    name: '',
    major: '',
    github: '',
    number: 0,
    profile: '',
    background: '',
  });

  const BackGroundImgRef = useRef<HTMLInputElement>(null);
  const ProfileImgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = () => {
    const file = ProfileImgRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
      };
    }
  };

  return (
    <UserInfoWrapper>
      <ImageContainer>
        <BlockImg src={Images.Background} />
        <FileChangeImg src={Images.whitePencil} onClick={() => BackGroundImgRef.current?.click()} />
      </ImageContainer>

      <input
        type="file"
        id="fileInput"
        accept="image/*"
        ref={BackGroundImgRef}
        style={{ display: 'none' }}
      />

      <ProfileContainer>
        <div>
          <ProfileImg src={imgFile ? imgFile.toString() : `${Images.defaultProfile}`} />
          <input
            type="file"
            id="profileImg"
            accept="image/*"
            ref={ProfileImgRef}
            style={{ display: 'none' }}
            onChange={saveImgFile}
          />

          <ProfileSetIcons>
            <ProfileChangeImg
              src={`${Images.BackblackPencil}`}
              onClick={() => ProfileImgRef.current?.click()}
            />
            <ProfileChangeImg src={Images.dustBin} />
          </ProfileSetIcons>
        </div>

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
  padding: 60px 70px 95px 70px;
`;

const ProfileSetIcons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  padding-top: 30px;
`;

const FileChangeImg = styled.img`
  cursor: pointer;
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const ProfileChangeImg = styled.img`
  cursor: pointer;
  width: 25px;
`;

export default StudentInfo;
