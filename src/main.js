
import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'  //样式重置
import './assets/css/index.css'  //引入样式设置

import router from './routers/index.js' //引入路由

import pinia from './stores/index.js' //使用pinia状态管理

createApp(App).use(router).use(pinia).mount('#app')
