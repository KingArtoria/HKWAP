import request from '../utils/request';
import qs from 'qs';
/* 获取广告 */
export const getPic = data => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/advert/getPic',
    data: qs.stringify(data),
  });
};
/* 推荐接口 */
export const comprehensiveIndex = params => {
  return request({
    method: 'GET',
    url: '/v3/Comprehensive/index',
    params,
  });
};
