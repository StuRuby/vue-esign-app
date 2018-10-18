import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import config from './httpConfig';
import router from '../router';
/**
 * 以下为可用的实例方法，指定的配置将与实例配置合并.
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */
const Axios = axios.create(config);

//请求拦截器
Axios.interceptors.request.use(
    config => {
        //序列化`post data`
        if (config.method === 'POST') config.data = qs.stringify(config.data);
        // 若是有做鉴权token , 就给头部带上token
        // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用
        // 这里localStorage一般是请求成功后我们自行写入到本地的,因为你放在vuex刷新就没了
        // 一些必要的数据写入本地,优先从本地读取
        if (localStorage.token) config.headers.Authorization = localStorage.token;
        return config;
    },
    error => {
        Message({
            showClose: true,
            message: error && error.data.error.message,
            type: 'error'
        });
        return Promise.reject(error.data.error.message);
    }
);

//响应拦截器
Axios.interceptors.response.use(
    res => {
        //TODO:根据实际项目情况来
        // if (res.data && !res.data.success) {
        //     Message({
        //         showClose: true,
        //         message: res.data.error.message.message
        //             ? res.data.error.message.message
        //             : res.data.error.message,
        //         type: 'error'
        //     });
        //     return Promise.reject(res.data.error.message);
        // }
        return res;
    },
    error => {
        Message({
            showClose: true,
            message: '出错了',
            type: 'error'
        });
        return Promise.reject(error);
        //以下内容根据业务选择性添加
        //用户登录的时候会拿到一个基础信息，比如用户名、token、过期时间戳
        //直接丢`localStorage`或者`sessionStorage`.
        // if (!window.localStorage.getItem('loginUserBaseInfo')) {
        //     router.push({
        //         path: '/login'
        //     });
        // } else {
        //     let lifeTime = JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime * 1000;
        //     let nowTime = new Date().getTime();
        //     if (nowTime > lifeTime) {
        //         Message({
        //             showClose: true,
        //             message: '登录状态过期，请重新登录',
        //             type: 'error'
        //         });
        //         router.push({
        //             path: '/login'
        //         });
        //     } else {
        //         //重定向到404界面
        //         if (error.response.status === 404) {
        //             router.push({
        //                 path: '/error/404'
        //             });
        //         }
        //     }
        // }

        // let errorInfo = error.data.error ? error.data.error.message : error.data;
        // return Promise.reject(errorInfo);
    }
);

export default {
    install: function (Vue, option) {
        Object.defineProperty(
            Vue.prototype,
            '$http',
            {
                value: Axios
            }
        );
    }
};