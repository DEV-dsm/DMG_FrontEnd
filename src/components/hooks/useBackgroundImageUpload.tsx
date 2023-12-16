import { useState } from 'react';
import instance from '../../utils/axios';

const useBackgroundImageUpload = () => {
  const [backGrounduploadImg, setBackGroundUploadImg] = useState<File>();
  const [backGroundpreviewImg, setBackGroundPreviewImg] = useState<any>();
  const [backGroundresponseImg, setBackGroundResponseImg] = useState<string>();

  const handleBackGroundImgChange = async (
    e: any,
    Images: any,
    backGroundonClickHandler: () => void
  ) => {
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
        const responseData = response.data.data;
        setBackGroundResponseImg(responseData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return {
    backGrounduploadImg,
    backGroundpreviewImg,
    backGroundresponseImg,
    handleBackGroundImgChange,
  };
};

export default useBackgroundImageUpload;
