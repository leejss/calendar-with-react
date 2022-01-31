import { isToday } from "date-fns";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { calendarDayState, TODAY } from "../atom";
import { EventArray } from "../types";
import { checkHasEvent } from "../utils/checker";
import CalendarDay from "./CalendarDay";
import { StlyedDiv } from "./Styled";

export const CalendarContainer = styled.div`
  display: grid;
  gap: 10px;
`;

export interface CalendarBodyProps {
  events: EventArray | null;
}

const CalendarBody = ({ events }: CalendarBodyProps) => {
  const days = useRecoilValue(calendarDayState);
  return (
    <CalendarContainer>
      {days.map((w, i) => {
        return (
          <StlyedDiv key={i}>
            {w.map((date, j) => {
              console.log("date", date);
              console.log("TODAY", TODAY);

              return (
                <CalendarDay
                  key={10 * j + i + 10}
                  day={date}
                  hasEvent={checkHasEvent(events, date)}
                  isToday={isToday(date)}
                />
              );
            })}
          </StlyedDiv>
        );
      })}
    </CalendarContainer>
  );
};

export default CalendarBody;
