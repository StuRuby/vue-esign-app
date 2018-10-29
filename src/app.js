import Vue from 'vue';
import Vuex from 'vuex';
import app from './App.vue';
import router from './router';
import http from './utils/http';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from './components/shared/Fullpage';
import ElementUI from 'element-ui';
// import SvgIcon from './components/shared/svgIcon.vue';
// import './assets/icon/iconfont.css';
// import './assets/icon/iconfont.svg';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(http);
Vue.use(Vuex);
Vue.use(VueFullPage);
// Vue.component('SvgIcon',SvgIcon);

new Vue({
    el: '#root',
    router,
    render: h => h(app)
});
