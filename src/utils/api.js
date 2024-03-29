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
    url: '/v41/Comprehensive/index',
    params,
  });
};
/* 资源对接查询 */
export const getResponses = params => {
  return request({
    method: 'GET',
    url: '/v41/Comprehensive/getResponses',
    params,
  });
};
/* 查询新媒体 */
export const queryrelGetResponses = params => {
  return request({
    method: 'GET',
    url: '/v41/Queryrel/getResponses',
    params,
  });
};
/* 域名查询 */
export const queryrelDomainList = params => {
  return request({
    method: 'GET',
    url: '/v41/Queryrel/domainList',
    params,
  });
};
/* 网站查询 */
export const queryrelWebList = params => {
  return request({
    method: 'GET',
    url: '/v41/Queryrel/webList',
    params,
  });
};
/* 获取办证服务 */
export const getRegistration = data => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/v41/Registration/getRegistration',
    data: qs.stringify(data),
  });
};
/* 添加广告申请 */
export const setAdverti = data => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/v2/Advertising/setAdverti',
    data: qs.stringify(data),
  });
};
/* 获取广告位置 */
export const getPlace = () => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/v2/Advertising/getPlace',
  });
};
/* 获取投放周期 */
export const getCycle = () => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/v2/Advertising/getCycle',
  });
};
/* 靓号统计 */
export const lhcount = data => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/v41/prop/lhcount',
    data,
  });
};
/* 资源详细 */
export const getObtainInfo = params => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'GET',
    url: '/v41/Comprehensive/getObtainInfo',
    params,
  });
};
/* 查询新媒体详情 */
export const getMediaInfo = params => {
  return request({
    method: 'GET',
    url: '/v41/Queryrel/getMediaInfo',
    params,
  });
};
/* 域名查询详情 */
export const getDomainInfo = params => {
  return request({
    method: 'GET',
    url: '/v41/Queryrel/getDomainInfo',
    params,
  });
};
/* 网站详情查询 */
export const getWebInfo = params => {
  return request({
    method: 'GET',
    url: '/v41/Queryrel/getWebInfo',
    params,
  });
};
/* 推荐人脉 */
export const getRecommendList = data => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/friend/getRecommendList',
    data: qs.stringify(data),
  });
};
/* 注册 */
export const sign = data => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/v41/login/sign',
    data: qs.stringify(data),
  });
};
/* 短信接口 */
export const getCode = data => {
  return request({
    header: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    url: '/v41/Alibabasms/sms',
    data: qs.stringify(data),
  });
};
