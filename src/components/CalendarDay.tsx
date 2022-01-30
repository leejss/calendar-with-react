import type { FC } from "react";
import React from "react";
import styled from "styled-components";
import { formatDay } from "../utils/formatDate";

interface DayProps {
  day: Date;
  hasEvent?: boolean;
}

const DayContainer = styled.div`
  display: grid;
  gap: 5px;
  button {
    border: none;
    background: none;
    width: 100%;
    &:active {
      background-color: coral;
    }
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const EventIndicator = styled.div`
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background-color: coral;
`;

const CalendarDay: FC<DayProps> = ({ day, hasEvent = false }) => {
  return (
    <DayContainer>
      <button>{day ? formatDay(day) : null}</button>
      <div>{hasEvent && <EventIndicator />}</div>
    </DayContainer>
  );
};

export default CalendarDay;
