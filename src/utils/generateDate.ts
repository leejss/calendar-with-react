import {
  startOfMonth,
  endOfMonth,
  isWithinInterval,
  addDays,
  getWeekOfMonth,
} from "date-fns";

type DateArray = Array<Date>;

export function generateDays(titleDate: Date): DateArray {
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

export function generateCalendarDate(days: DateArray): Date[][] {
  const calendar = initCalendar(6);

  days.forEach((day) => {
    const index = getWeekOfMonth(day) - 1;
    calendar[index].push(day);
  });

  const result = calendar.map((week, index) => {
    const full = new Array(7).fill(null);
    for (let i = 0; i < 7; i++) {
      if (week[i]) {
        full[i] = week[i];
      }
    }
    return full;
  });

  result[0] = flipArray(result[0]).reverse();
  if (isEmpty(result[5])) {
    result.pop();
  }

  return result;
}

function initCalendar(length: number) {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(new Array<Date>());
  }
  return result;
}

function flipArray(arr: Date[]) {
  let i = 0;
  const extracted = [];
  while (arr[i]) {
    extracted.push(arr[i]);
    i++;
  }
  const reversed = extracted.reverse();
  const result = arr.map((item, index) => {
    if (reversed[index]) return reversed[index];
    else return item;
  });
  return result;
}

function isEmpty(arr: Date[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return false;
  }
  return true;
}
