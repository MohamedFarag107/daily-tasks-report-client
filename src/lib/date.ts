import { format } from "date-fns";

export const formateTaskDate = (date: Date | string): string => {
  return format(new Date(date), "yyyy-MM-dd");
};
