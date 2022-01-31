import React from "react";
import styled, { css } from "styled-components";
import { formatDay } from "../utils/formatDate";

const DayContainer = styled.div`
  display: grid;
  gap: 5px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const EventWrapper = styled.div`
  min-height: 5px;
`;

const EventIndicator = styled.div`
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background-color: coral;
`;

interface DayButtonProps {
  isToday: boolean;
}

const DayButton = styled.button<DayButtonProps>`
  position: relative;
  border: none;
  background: none;
  /* width: 100%; */
  ${({ isToday }) =>
    isToday &&
    css`
      color: #fff;
      font-weight: bold;
      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #3535f7;
      }
    `}
`;

interface DayProps {
  day: Date;
  hasEvent: boolean;
  isToday: boolean;
}

const CalendarDay = ({ day, hasEvent, isToday }: DayProps) => {
  const dayText = day ? formatDay(day) : null;
  return (
    <DayContainer>
      <DayButton isToday={isToday}>{dayText}</DayButton>
      <EventWrapper>{hasEvent && <EventIndicator />}</EventWrapper>
    </DayContainer>
  );
};

export default CalendarDay;
