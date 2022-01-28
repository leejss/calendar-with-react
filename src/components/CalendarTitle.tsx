import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { titleDateState } from "../atom";
import { formatTitleDate } from "../utils/formatDate";
import { NextMonthButton, PrevMonthButton } from "./Button";

const CalendarTitle = () => {
  const titleDate = useRecoilValue(titleDateState);
  return (
    <div>
      <PrevMonthButton />
      <h1>{formatTitleDate(titleDate)}</h1>
      <NextMonthButton />
    </div>
  );
};

export default CalendarTitle;
