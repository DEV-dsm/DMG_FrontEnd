import { useState, ChangeEvent } from 'react';

interface IUseImageUploadType {
  image: string;
  backImage: string;
  onUpload: (e: ChangeEvent<HTMLInputElement>, isBackground?: boolean) => void;
  resetImage: () => void;
}

export const useFileInput = (initialImage: string): IUseImageUploadType => {
  const [image, setImage] = useState<string>(initialImage);
  const [backImage, setBackImage] = useState<string>(initialImage);

  const onUpload = (e: ChangeEvent<HTMLInputElement>, isBackground?: boolean): void => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        if (isBackground) {
          setBackImage(reader.result as string);
        } else {
          setImage(reader.result as string);
        }
      };
    } else if (isBackground) {
      setBackImage(initialImage);
    }
  };

  const resetImage = () => setBackImage(initialImage);

  return { image, backImage, onUpload, resetImage };
};
