import React from "react";
import { useRecoilState } from "recoil";
import { titleDateState } from "../atom";
import { addMonths, subMonths } from "date-fns";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { StyledButton } from "./Styled";

export const NextMonthButton = () => {
  const [_, setTitleDate] = useRecoilState(titleDateState);
  const handleClick = () => {
    setTitleDate((prevDate) => addMonths(prevDate, 1));
  };
  return (
    <StyledButton onClick={handleClick}>
      <GrLinkNext />
    </StyledButton>
  );
};

export const PrevMonthButton = () => {
  const [_, setTitleDate] = useRecoilState(titleDateState);
  const handleClick = () => {
    setTitleDate((prevDate) => subMonths(prevDate, 1));
  };
  return (
    <StyledButton onClick={handleClick}>
      <GrLinkPrevious />
    </StyledButton>
  );
};
