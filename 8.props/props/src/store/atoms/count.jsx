// store/atoms/count.js
import { atom } from 'recoil';

export const countatom = atom({
  key: 'countAtom', // Unique ID
  default: 0,       // Default value
});
