export type ScheduleArray = Array<ISchedule>;
export interface ISchedule {
  id: string;
  title: string;
  start: string;
  end: string;
}

export type EventArray = string[];
