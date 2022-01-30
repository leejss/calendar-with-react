import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { calendarDayState, titleDateState } from "../atom";
import CalendarDay from "./CalendarDay";
import { StlyedDiv } from "./Styled";

export const CalendarContainer = styled.div`
  display: grid;
  gap: 10px;
`;

const CalendarBody = () => {
  const days = useRecoilValue(calendarDayState);
  return (
    <CalendarContainer>
      {days.map((w, i) => {
        return (
          <StlyedDiv key={i}>
            {w.map((d, j) => (
              <CalendarDay
                key={10 * j + i + 10}
                day={d}
                hasEvent={d ? true : false}
              />
            ))}
          </StlyedDiv>
        );
      })}
    </CalendarContainer>
  );
};

export default CalendarBody;
