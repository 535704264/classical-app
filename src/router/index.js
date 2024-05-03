import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 引入Home.vue, User.vue 组件
import Main from '../views/Main.vue'
import Home from '../views/home/Home.vue'
import User from '../views/user/User.vue'
import Attrgroup from '../views/product/platformAttr/Attrgroup.vue'
import PageOneTwo from '../views/other/PageOne-Two.vue'
import PageOne from '../views/other/PageOne.vue'
import PageTwo from '../views/other/PageTwo.vue'

// 1.创建路由组件
// 2.将路由和组件进行映射(每个路由映射一个组件)
// 3.创建router，并对外暴露
// 4.将router挂载到根节点（main.js）
// 5.App.vue设置路由出口

const routes = [
    // 主路由
    // 
    {
        path: '/',
        name: '根路径',
        component: Main, // 页面主体Main.vue，这里的配置只是说当点击个菜单主体页面跟着转到那页面, Main.vue 配置了router-view 路由出口
        redirect: '/home', // 路由出口（嵌套的主页面的显示）挑转 → /home
        children: [ // 这个children里面就是可以跳转的主体动态页面
            // Main.vue下的子路由 （/去掉）, path和name应和菜单数据一致
            {path: 'home',name: '首页',component: Home}, // 会自动加上/根路径（因为父级就是/）， 菜单数据的path需要加/(绝对路径)
            {path: 'user',name: '用户',component: User},
            {path: 'product/platformAttr/Attrgroup',name: '属性分组',component: Attrgroup},
            // {path: 'other/page1',name: '页面1',component: PageOne},
            {path: 'other/page1',name: '页面1'},
            {path: 'other/page1/page1-2',name: '页面1-2',component: PageOneTwo},
            {path: 'other/page2',name: '页面2',component: PageTwo}
        ]
    }
]

// 解决点击路由重复控制台报错问题(面包屑重复点击报错)
// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const route = new VueRouter({routes})
export default route

