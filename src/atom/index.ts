import { atom } from "recoil";

const TODAY = new Date();

export const titleDateState = atom({
  key: "titleDateState",
  default: TODAY,
});
