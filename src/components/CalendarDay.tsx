import React, { useRef } from "react";
import styled, { css } from "styled-components";
import clickedStateQueue from "../utils/clickedStateQueue";
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

const circle = (background: string) => `
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${background};
  }
`;

const todayIndicator = () => `
  ${circle("#3535f7")}
   
`;
const clickedIndicator = () => `
  ${circle("#000")}
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
      ${todayIndicator()}
    `}

  &.clicked {
    color: #fff;
    font-weight: bold;
    ${clickedIndicator()};
  }
`;

interface DayProps {
  day: Date;
  hasEvent: boolean;
  isToday: boolean;
}

const CalendarDay = ({ day, hasEvent, isToday }: DayProps) => {
  let ref: HTMLButtonElement | null = null;
  const dayText = day ? formatDay(day) : null;
  const handleClick = () => {
    if (!ref) return;
    clickedStateQueue.enqueue(ref);
  };
  return (
    <DayContainer>
      <DayButton
        ref={(el) => {
          if (el) ref = el;
        }}
        isToday={isToday}
        onClick={handleClick}
      >
        {dayText}
      </DayButton>
      <EventWrapper>{hasEvent && <EventIndicator />}</EventWrapper>
    </DayContainer>
  );
};

export default CalendarDay;
