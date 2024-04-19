import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/style/index.css';
import './assets/style/index-dark.css';
import './assets/style/font/HarmonyOS_Sans_SC/index.css';
import { ElLoading } from 'element-plus';
import Router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(Router);

app.directive('loading', ElLoading.directive);

app.mount('#app');
