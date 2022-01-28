import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { titleDateState } from "../atom";
import { formatISO } from "date-fns";
const CalendarTitle = () => {
  const [titleDate, setTitleDate] = useRecoilState(titleDateState);
  return <div>{formatISO(titleDate, { representation: "date" })}</div>;
};

export default CalendarTitle;
