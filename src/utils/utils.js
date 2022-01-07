export const isNull = data => {
  let boolean = false;
  if (data === null || data.length === 0) boolean = true;
  return boolean;
};
export const timestampYMDHM = data => {
  let date = new Date(data);
  let y = date.getFullYear();
  let m = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  let h = date.getHours();
  let mm = date.getMinutes();
  return `${y}-${m}-${d} ${h}:${mm}`;
};