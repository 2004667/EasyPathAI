import {createRouter, createWebHashHistory} from 'vue-router';
import Landing from "./Landing.vue"
import Welcome from "./components/WelcomePage.vue"
export default createRouter({
    history: createWebHashHistory(),
    routes:  [
        {path: '/land' , component: Landing},
        {path: '/welcome' , component: Welcome}
    ]
}) 