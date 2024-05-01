import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入router
import router from './router'

// 浏览器本地存储
import store from '@/store';


// 项目全局都可使用
new Vue({
  router, // 路由
  store, // 本地存储，状态管理
  render: h => h(App), // 渲染组件
}).$mount('#app')
