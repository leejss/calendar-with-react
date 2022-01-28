import { startOfMonth, endOfMonth, isWithinInterval, addDays } from "date-fns";

type DateArray = Array<Date>;

export function generateDate(titleDate: Date): DateArray {
  const result: DateArray = [];
  const firstDayOfMonth = startOfMonth(titleDate);
  const endDayOfMonth = endOfMonth(titleDate);
  let cursor = firstDayOfMonth;
  while (
    isWithinInterval(cursor, { start: firstDayOfMonth, end: endDayOfMonth })
  ) {
    result.push(cursor);
    cursor = addDays(cursor, 1);
  }
  return result;
}
