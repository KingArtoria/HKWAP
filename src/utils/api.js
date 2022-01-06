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
/* 资源对接查询 */
export const getResponses = params => {
  return request({
    method: 'GET',
    url: '/v3/Comprehensive/getResponses',
    params,
  });
};
/* 查询新媒体 */
export const queryrelGetResponses = params => {
  return request({
    method: 'GET',
    url: '/v3/Queryrel/getResponses',
    params,
  });
};
/* 域名查询 */
export const queryrelDomainList = params => {
  return request({
    method: 'GET',
    url: '/v3/Queryrel/domainList',
    params,
  });
};
/* 网站查询 */
export const queryrelWebList = params => {
  return request({
    method: 'GET',
    url: '/v3/Queryrel/webList',
    params,
  });
};
