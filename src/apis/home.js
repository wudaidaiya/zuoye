import request from '@/utils/request';

export const getRecommendList = (params) =>
request({
    url:'/personalized',
    params,
});
export const getNewsongList = (params) =>
request({
    url:'/personalized/newsong',
    params,
})