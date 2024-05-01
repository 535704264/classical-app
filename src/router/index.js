import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 引入Home.vue, User.vue 组件
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

// 1.创建路由组件
// 2.将路由和组件进行映射
// 3.创建router，并对外暴露
// 4.将router挂载到根节点（main.js）
// 5.App.vue设置路由出口

const routes = [
    // 主路由
    {
        path: '/',
        component: Main,
        children: [
            // 子路由 （/可去掉）
            {path: 'home',component: Home},
            {path: 'user',component: User}
        ]
    }
]
const route = new VueRouter({routes})
export default route