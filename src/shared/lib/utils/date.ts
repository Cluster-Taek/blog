import dayjs from 'dayjs';

export function formatDate(date: string | Date) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function getDuration(start: string, end?: string) {
  const totalMonths = dayjs(end).diff(dayjs(start), 'month') + 1;
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;

  const yText = y > 0 ? `${y}년 ` : '';
  const mText = `${m}개월`;

  return `${yText}${mText}`;
}
