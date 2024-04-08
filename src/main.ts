import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/theme-chalk/dark/css-vars.css';
import './assets/style/index.css';
import './assets/style/index-dark.css';
import { ElLoading } from 'element-plus';
import Router from './router';

const app = createApp(App);
app.use(Router);
app.directive('loading', ElLoading.directive);

app.mount('#app');
