export function formatDateTime(date: string) {
  const time = new Date(date);
  time.setHours(time.getHours()+8);
  return time.toJSON().slice(0, 16).replace('T', ' ');
}