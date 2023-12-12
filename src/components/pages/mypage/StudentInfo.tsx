import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Images } from '../../../assets/mypage';
import UserInfoInput from '../mypage/UserInfoInput';
import SubmitBtn from '../../common/InfoButton';
import { IUserInfoRequestType } from '../../../models/Mypage';
import instance from '../../../utils/axios';

const StudentInfo = () => {
  const fileInputRef = useRef<any>(null);
  const BackGroundFileInputRef = useRef<any>(null);

  const [previewImg, setPreviewImg] = useState<any>(); // 미리보기
  const [uploadImg, setUploadImg] = useState<File>(); // uproad
  const [responseImg, setResponseImg] = useState<string>(); // uproad후 서버로받은 이미지

  const [backGroundpreviewImg, setBackGroundPreviewImg] = useState<any>();
  const [backGrounduploadImg, setBackGroundUploadImg] = useState<File>();
  const [backGroundresponseImg, setBackGroundResponseImg] = useState<string>();

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

  const onClickHandler = () => fileInputRef.current.click();
  const backGroundonClickHandler = () => BackGroundFileInputRef.current.click();
  const clearImage = () => setPreviewImg(null);

  const proFileImgChange = async (e: any) => {
    const seletectedImage = e.target.files[0];

    if (seletectedImage) {
      setUploadImg(seletectedImage);

      const reader: FileReader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewImg(reader.result);
        }
      };
      reader.readAsDataURL(seletectedImage);
      try {
        const formData = new FormData();
        formData.append('file', seletectedImage);
        const response = await instance.post('/upload', formData);
        setResponseImg(response?.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const BackGroundImgChange = async (e: any) => {
    const seletectedImage = e.target.files[0];

    if (seletectedImage) {
      setBackGroundUploadImg(seletectedImage);

      const reader: FileReader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setBackGroundPreviewImg(reader.result);
        }
      };
      reader.readAsDataURL(seletectedImage);
      try {
        const formData = new FormData();
        formData.append('file', seletectedImage);
        const response = await instance.post('/upload', formData);
        setBackGroundResponseImg(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <UserInfoWrapper>
        {/* 배경 이미지 변경 */}
        <ImageContainer>
          {backGroundpreviewImg && (
            <BlockImg onClick={backGroundonClickHandler} src={backGroundpreviewImg} />
          )}
          {!backGroundpreviewImg && <BlockImg src={Images.Background} />}
          <FileChangeImg onClick={backGroundonClickHandler} src={Images.whitePencil} />
        </ImageContainer>

        <input
          onChange={BackGroundImgChange}
          type="file"
          ref={BackGroundFileInputRef}
          accept="image/*"
          style={{ display: 'none' }}
        />

        {/* 배경 이미지 변경 */}
        {/* 프로필 변경  */}
        <ProfileContainer>
          <div>
            {previewImg && <ProfileImg onClick={onClickHandler} src={previewImg} />}
            {!previewImg && <ProfileImg src={Images.defaultProfile} />}
            <ProfileSetIcons>
              <ProfileChangeImg onClick={onClickHandler} src={Images.BackblackPencil} />
              <ProfileChangeImg onClick={clearImage} src={Images.dustBin} />
            </ProfileSetIcons>
            <input
              onChange={proFileImgChange}
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>
          {/* 프로필 변경  */}
          <UserInfoInput />
          <SubmitBtn text="submit" width="50%" />
        </ProfileContainer>
      </UserInfoWrapper>
    </>
  );
};

const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  border-right: 1px solid #393939;
  overflow: auto;
  padding: 60px 70px 95px 70px;
`;

const ProfileSetIcons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 7px;
  padding-top: 35px;
`;

const FileChangeImg = styled.img`
  cursor: pointer;
  position: absolute;
  width: 23px;
  height: 23px;
  bottom: 15px;
  right: 8px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const BlockImg = styled.img`
  width: 330px;
  height: 170px;
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
