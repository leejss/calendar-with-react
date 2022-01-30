import React from "react";
import CalendarBody from "./CalendarBody";
import CalendarTitle from "./CalendarTitle";
import { RecoilRoot } from "recoil";
import CalendarWeek from "./CalendarWeek";

const Calendar = () => {
  return (
    <RecoilRoot>
      <CalendarTitle />
      <CalendarWeek />
      <CalendarBody />
    </RecoilRoot>
  );
};

export default Calendar;
