import Vue from 'vue';
import app from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
    el: '#root',
    router,
    render: h => h(app)
});
