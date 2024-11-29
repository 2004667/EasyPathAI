import { createRouter, createWebHashHistory } from 'vue-router';
import Landing from './components/Landing/Landing.vue';
import ProfessionMain from './components/ProffesionCard/ProffessionMain.vue';
import Welcome from './components/WelcomePage.vue';
import ProfessionDetail from './components/CardDetails/ProfessionDetail.vue';
import InfoMain from './components/Landing/InfoMain.vue'
import AIChat from './components/Aichat/AIChat.vue'
import store from './store';
import Mentors from './components/Mentors/Mentors.vue';
import Interview from './components/Interview/Interview.vue'
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
    },
    {
        path: '/profDetails',
        component: ProfessionDetail
    },
    {
        path: '/land',
        component: InfoMain
    },
    {
        path: '/aichat',
        component: AIChat
    },
    {
        path: '/mentors',
        component: Mentors
    },
    {
        path: '/interview',
        component: Interview
    },
      
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