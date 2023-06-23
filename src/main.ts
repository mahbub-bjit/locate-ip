import './assets/main.css';
import 'vue3-toastify/dist/index.css';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Vue3Toastify, {
    autoClose: 3000,
} as ToastContainerOptions);
app.mount('#app');
