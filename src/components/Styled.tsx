import styled from "styled-components";

export const StlyedDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-areas: "sun mon tue wed thu fri sat";
  text-align: center;
`;
