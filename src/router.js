import { createRouter, createWebHashHistory } from 'vue-router';
import Landing from './Landing.vue';
import ProfessionMain from './ProffessionMain.vue';
import Welcome from './components/WelcomePage.vue';
import store from './store';

const routes = [
    {
        path: '/land',
        component: Landing,
        beforeEnter: (to, from, next) => {
            if (store.getters.loggedIn) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/',
        component: Welcome
    },
    {
        path: '/prof',
        component: ProfessionMain
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// Глобальный навигационный охранник
router.beforeEach((to, from, next) => {
    if (to.path === '/' && store.getters.loggedIn) {
        // Если пользователь авторизован и пытается перейти на главную страницу, перенаправить на /land
        next('/land');
    } else if (to.path !== '/' && !store.getters.loggedIn) {
        // Если пользователь не авторизован и пытается перейти на защищенную страницу, перенаправить на /
        next('/');
    } else {
        // Разрешить переход в остальных случаях
        next();
    }
});

export default router;