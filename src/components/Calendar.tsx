import React from "react";
import CalendarBody from "./CalendarBody";
import CalendarTitle from "./CalendarTitle";

import CalendarWeek from "./CalendarWeek";
import { EventArray, ScheduleArray } from "../types";

interface CalendarProps {
  events: EventArray | null;
}

const Calendar = ({ events }: CalendarProps) => {
  return (
    <section>
      <CalendarTitle />
      <CalendarWeek />
      <CalendarBody events={events} />
    </section>
  );
};

export default Calendar;
