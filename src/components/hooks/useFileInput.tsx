import { useState, ChangeEvent } from 'react';

interface IUseImageUploadType {
  image: string;
  backImage: string;
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  onUpload2: (e: ChangeEvent<HTMLInputElement>) => void;
  resetImage: () => void;
}

export const useFileInput = (initialImage: string): IUseImageUploadType => {
  const [image, setImage] = useState<string>(initialImage);
  const [backImage, setBackImage] = useState<string>(initialImage);

  const onUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
    } else {
      return;
    }
  };

  const onUpload2 = (e?: ChangeEvent<HTMLInputElement>): void => {
    if (e?.target.files?.[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        setBackImage(reader.result as string);
      };
    } else {
      setBackImage(initialImage);
    }
  };

  const resetImage = () => {
    setBackImage(initialImage);
  };

  return { image, backImage, onUpload, onUpload2, resetImage };
};
