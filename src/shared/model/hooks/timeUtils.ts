export const formattedTime = (ms: number) => {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);

  return { seconds, minutes, hours, days, weeks, months };
};

export const getCurrentTime = () => {
  const now = Date.now();
  return { milliseconds: now, ...formattedTime(now) };
};

export const getFormatTime = (lastVisit: string | number | Date) => {
  const now = Date.now();
  const last = new Date(lastVisit).getTime();
  const diff = now - last;

  const { seconds, minutes, hours, days, weeks, months } = formattedTime(diff);

  if (seconds < 60) return { formatted: "just now." };
  if (minutes < 60) return { formatted: `${minutes} minute(s)` };
  if (hours < 24) return { formatted: `${hours} hour(s)` };
  if (days < 7) return { formatted: `${days} day(s)` };
  if (weeks < 4) return { formatted: `${weeks} week(s)` };
  if (months < 12) return { formatted: `${months} month(s)` };

  return { formatted: new Date(lastVisit).toLocaleDateString("en-US") };
};
