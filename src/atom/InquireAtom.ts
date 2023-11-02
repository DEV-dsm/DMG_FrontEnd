import { atom } from 'recoil';

export const QustionInputTypeAtom = atom({
  key: 'QustionInputTypeAtom',
  default: {
    title: '',
    content: '',
  },
});
