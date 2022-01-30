import { formatISO, startOfMonth } from "date-fns";
import React from "react";
import { useRecoilValue } from "recoil";
import { titleDateState } from "../atom";
import { formatDay } from "../utils/formatDate";
import { generateCalendarDate, generateDays } from "../utils/generateDate";
import { CalendarContainer, StlyedDiv } from "./Styled";
import WeekRow from "./WeekRow";

const CalendarBody = () => {
  const titleDate = useRecoilValue(titleDateState);
  const days = generateDays(titleDate);
  generateCalendarDate(days);
  const handleClick = () => {};

  return (
    <CalendarContainer>
      {days.map((date, index) => {
        return (
          <div
            key={formatISO(date, { representation: "date" })}
            className={index === 0 ? "test" : index === 1 ? "test2" : ""}
          >
            <button data-date={date}>{formatDay(date)}</button>
          </div>
        );
      })}
    </CalendarContainer>
  );
};

export default CalendarBody;
