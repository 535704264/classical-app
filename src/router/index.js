import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 引入Home.vue, User.vue 组件
import Main from '../views/Main.vue'
import Home from '../views/home/Home.vue'
import User from '../views/user/User.vue'
import Attrgroup from '../views/product/platformAttr/Attrgroup.vue'
import PageOneTwo from '../views/other/PageOne-Two.vue'
import PageTwo from '../views/other/PageTwo.vue'

// 1.创建路由组件
// 2.将路由和组件进行映射
// 3.创建router，并对外暴露
// 4.将router挂载到根节点（main.js）
// 5.App.vue设置路由出口

const routes = [
    // 主路由
    {
        path: '/',
        component: Main, // 页面主体，这里的配置只是说当点击个菜单主体页面跟着转到那页面
        redirect: '/home', // 重定向 当 / 挑转 /home
        children: [
            // 子路由 （/去掉）
            {path: 'home',component: Home}, // 会自动加上/， 菜单数据的path需要加/
            {path: 'user',component: User},
            {path: 'product/platformAttr/Attrgroup',component: Attrgroup},
            {path: 'other/page1/page1-2',component: PageOneTwo},
            {path: 'other/page2',component: PageTwo}
        ]
    }
]

const route = new VueRouter({routes})
export default route