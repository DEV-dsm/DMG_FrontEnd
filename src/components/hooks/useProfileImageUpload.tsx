import { useState } from 'react';
import instance from '../../utils/axios';

const useProfileImageUpload = () => {
  const [previewImg, setPreviewImg] = useState<any>();
  const [uploadImg, setUploadImg] = useState<File>();
  const [responseImg, setResponseImg] = useState<string>();

  const handleProfileImgChange = async (
    e: any,
    Images: any,
    backGroundonClickHandler: () => void
  ) => {
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
        const responseData = response.data.data;
        setResponseImg(responseData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const clearImage = () => {
    setPreviewImg(null);
  };

  return {
    uploadImg,
    previewImg,
    responseImg,
    handleProfileImgChange,
    clearImage,
  };
};

export default useProfileImageUpload;
