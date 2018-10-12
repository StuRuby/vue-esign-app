import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: resolve => require(['../views/home/index.vue'], resolve)
    },
    {
        path: '/products',
        meta: {
            title: '产品中心'
        },
        component: resolve => require(['../views/products/index.vue'], resolve)
    },
    {
        path: '/solutions',
        meta: {
            title: '解决方案'
        },
        component: resolve => require(['../views/solutions/index.vue'], resolve)
    },
    {
        path: '/downloads',
        meta: {
            title: '下载中心'
        },
        component: resolve => require(['../views/downloads/index.vue'], resolve)
    },
    {
        path: '/develop',
        meta: {
            title: '开发平台'
        },
        component: resolve => require(['../views/develop/index.vue'], resolve)
    },
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: resolve => require(['../views/home/index.vue'], resolve)
    },
];

const router = new VueRouter({
    routes
});

export default router;