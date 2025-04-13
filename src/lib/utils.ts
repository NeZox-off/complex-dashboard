import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Time = {
  dateTime: Date,
  days: number
  hours: number
  min: number
  sec: number
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatLastVisit(lastVisit: string | number | Date) {
  const now = new Date();
  const last = new Date(lastVisit);
  const diffMs = now.getTime() - last.getTime();

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHours = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHours / 24);

  const time: Time = {
    dateTime: new Date(lastVisit), 
    days: diffDays,
    hours: diffDays,
    min: diffDays,
    sec: diffDays,
  };

  if (diffSec < 60)
    return {
      ...time,
      formatted: ` just now.`,
    };
  if (diffMin < 60)
    return {
      ...time,
      formatted: ` ${diffMin} minute(s) ago.`,
    };
  if (diffHours < 24)
    return {
      ...time,
      formatted: ` ${diffHours} hour(s) ago.`,
    };
  if (diffDays < 7)
    return {
      ...time,
      formatted: ` ${diffDays} day(s) ago.`,
    };

  return {
    ...time,
    formatted: ` ${last.toLocaleDateString("en-US")}`,
  };
}
