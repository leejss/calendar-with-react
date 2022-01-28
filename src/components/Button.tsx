import React from "react";
import { useRecoilState } from "recoil";
import { titleDateState } from "../atom";
import { addMonths, subMonths } from "date-fns";
export const NextMonthButton = () => {
  const [_, setTitleDate] = useRecoilState(titleDateState);
  const handleClick = () => {
    setTitleDate((prevDate) => addMonths(prevDate, 1));
  };
  return <button onClick={handleClick}>Add Month</button>;
};

export const PrevMonthButton = () => {
  const [_, setTitleDate] = useRecoilState(titleDateState);
  const handleClick = () => {
    setTitleDate((prevDate) => subMonths(prevDate, 1));
  };
  return <button onClick={handleClick}>Sub Month</button>;
};
