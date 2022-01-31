import { formatISO } from "date-fns";
import { EventArray } from "../types";

export function checkHasEvent(events: EventArray | null, date: Date | null) {
  if (!events || !date) return false;
  const parsed = formatISO(date, { representation: "date" });
  return events.includes(parsed);
}
