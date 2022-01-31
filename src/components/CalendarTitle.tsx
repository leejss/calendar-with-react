import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { titleDateState } from "../atom";
import { formatTitleDate } from "../utils/formatDate";
import { NextMonthButton, PrevMonthButton } from "./CalendarButton";
import { StyledH1 } from "./Styled";

const CalendarTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 300px;
  margin: 0 auto;
`;

const CalendarTitle = () => {
  const titleDate = useRecoilValue(titleDateState);
  return (
    <CalendarTitleContainer>
      <PrevMonthButton />
      <StyledH1>{formatTitleDate(titleDate)}</StyledH1>
      <NextMonthButton />
    </CalendarTitleContainer>
  );
};

export default CalendarTitle;
