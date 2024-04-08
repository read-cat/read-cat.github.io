import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/theme-chalk/dark/css-vars.css';
import { ElLoading } from 'element-plus';

const app = createApp(App);

app.directive('loading', ElLoading.directive);

app.mount('#app');
