import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from "vue3-google-login"
const app = createApp(App);
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_GOOGLE,
});
app.use(router);
app.use(store);
app.mount('#app')