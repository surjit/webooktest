import Vue from 'vue'
window.Vue = Vue;

import VueRouter from 'vue-router'
import { BootstrapVue } from "bootstrap-vue";

import App from './App.vue'
import router from './router/routes'
import { store } from './store'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

window.Vue = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
