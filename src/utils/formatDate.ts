import { addDays, parseISO, formatISO, format } from "date-fns";
import { ko } from "date-fns/locale";

export function formatTitleDate(date: Date): string {
  return format(date, "Y년 MMM", { locale: ko });
}

export function formatDay(date: Date): string {
  return format(date, "d");
}
