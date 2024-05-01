import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 引入Home.vue, User.vue 组件
import Home from '../views/Home.vue'
import User from '../views/User.vue'

// 1.创建路由组件
// 2.将路由和组件进行映射
// 3.创建router，并对外暴露
// 4.将router挂载到根节点（main.js）

const routes = [
    {path: '/home',component: Home},
    {path: '/user',component: User}
]
const route = new VueRouter({routes})
export default route