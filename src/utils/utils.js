/* 非空校验 */ export const isNull = data => {
  let boolean = false;
  if (data === null || data.length === 0) boolean = true;
  return boolean;
};
/* 时间转码 */ export const timestampYMDHM = data => {
  let date = new Date(data);
  let y = date.getFullYear();
  let m = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  let d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  let h = date.getHours();
  let mm = date.getMinutes();
  return `${y}-${m}-${d} ${h}:${mm}`;
};
/* 区分设备 */ export const isDevice = () => {
  let u = navigator.userAgent;
  let ua = navigator.userAgent.toLowerCase();
  let device = 'and';
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (ua.match(/MicroMessenger/i) == 'micromessenger') device = 'wx';
  else if (isIOS) device = 'ios';
  return device;
};
/* 关键词 */ export const keyWords = () => {
  return ['']
}