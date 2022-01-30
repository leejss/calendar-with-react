import { atom, selector } from "recoil";
import { generateCalendarDate, generateDays } from "../utils/generateDate";

export const TODAY = new Date();

export const titleDateState = atom({
  key: "titleDateState",
  default: TODAY,
});

export const calendarDayState = selector({
  key: "calendarDayState",
  get: ({ get }) => {
    const titleDate = get(titleDateState);
    return generateCalendarDate(generateDays(titleDate));
  },
});
