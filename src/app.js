import Vue from 'vue';
import Vuex from 'vuex';
import app from './App.vue';
import router from './router';
import http from './utils/http';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(http);
Vue.use(Vuex);

new Vue({
    el: '#root',
    router,
    render: h => h(app)
});
