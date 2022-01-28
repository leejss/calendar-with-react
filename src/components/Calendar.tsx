import React from "react";
import CalendarBody from "./CalendarBody";
import CalendarTitle from "./CalendarTitle";
import { RecoilRoot } from "recoil";

const Calendar = () => {
  return (
    <RecoilRoot>
      <CalendarTitle />
      <CalendarBody />
    </RecoilRoot>
  );
};

export default Calendar;
