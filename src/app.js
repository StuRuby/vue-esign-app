import Vue from 'vue';
import app from './App.vue';
import router from './router';

new Vue({
    el: '#root',
    router,
    render: h => h(app)
});
