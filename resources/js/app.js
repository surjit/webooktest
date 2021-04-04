import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router/routes'
import { store } from './store'

Vue.use(VueRouter);

window.Vue = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');
