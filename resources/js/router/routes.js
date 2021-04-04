import Router from 'vue-router';

const routes = [
    {
        name: 'dashboard',
        path: '/',
        component: () => import('./dashboard')
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('./login')
    },
    {
        path: '/404',
        name: '404',
        meta: {title: '404'},
        component: require('./utility/404').default,
    },
    // Redirect any unmatched routes to the 404 page. This may
    // require some server configuration to work in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    {
        path: '*',
        redirect: '404',
    }
];

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});

export default router;
