import { useState, useRef } from 'react';

const AddImgButton = () => {
  const [imgFile, setImgFile] = useState<string | ArrayBuffer | null>('');
  const imgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = () => {
    const file = imgRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result);
      };
    }
  };

  return (
    <>
      <img src={imgFile ? imgFile.toString() : '/images/icon/user.png'} alt="프로필 이미지" />
      <input type="file" accept="image/*" id="profileImg" onChange={saveImgFile} ref={imgRef} />
    </>
  );
};

export default AddImgButton;
