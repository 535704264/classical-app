import Vue from 'vue'
import App from './App.vue' // 引入App.vue， 本文件 main.js是程序入口

Vue.config.productionTip = false

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入router
import router from './router'

// 浏览器本地存储
import store from '@/store';

// mockjs
import './api/mock'


// 项目全局都可使用, Vue主实例
new Vue({
  router, // 路由
  store, // 本地存储，状态管理
  render: h => h(App), // 渲染组件
}).$mount('#app') // 挂载App.vue
