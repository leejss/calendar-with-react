import React from "react";
import { useRecoilState } from "recoil";
import { titleDateState } from "../atom";
import { addMonths, subMonths } from "date-fns";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { StyledButton } from "./Styled";
import clickedStateQueue from "../utils/clickedStateQueue";

export const NextMonthButton = () => {
  const [_, setTitleDate] = useRecoilState(titleDateState);
  const handleClick = () => {
    setTitleDate((prevDate) => addMonths(prevDate, 1));
    clickedStateQueue.reset();
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
    clickedStateQueue.reset();
  };
  return (
    <StyledButton onClick={handleClick}>
      <GrLinkPrevious />
    </StyledButton>
  );
};
