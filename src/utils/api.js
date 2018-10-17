import axios from 'axios';
import qs from 'qs';
import { Message } from 'element-ui';
import { ApiRoot } from './apiUrl';
import router from '../router';

const Axios = axios.create({
    baseURL: ApiRoot,
    timeout: 10000,
    responseType: 'json',
    withCredentials: true, //是否允许携带`cookie`
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
});


//请求拦截器
Axios.interceptors.request.use(
    config => {
        //序列化`post data`
        config.method === 'POST' && config.data=qs.stringify(config.data);
        // 若是有做鉴权token , 就给头部带上token
        // 若是需要跨站点,存放到 cookie 会好一点,限制也没那么多,有些浏览环境限制了 localstorage 的使用
        // 这里localStorage一般是请求成功后我们自行写入到本地的,因为你放在vuex刷新就没了
        // 一些必要的数据写入本地,优先从本地读取
        localStorage.token && config.headers.Authorization=localStorage.token;
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
Axios.interceptors.response.use({

});

