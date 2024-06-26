export default {
    state: {
        isCollapse: false, // 控制菜单的展开还是收起
        tabList: [
            //动态面包屑的数据:点了哪个路由,首页是一定有的 （从菜单点击使获得）
            {
                path: '/',
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 's-home',
                },
                url: 'home/Home.vue'
            }
        ],

    },
    mutations: {
        // 修改菜单展开还是收起
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑的数据
        selectMenu(state, item) {
            // 如果点击的不在面包屑数据中,则添加
            const index = state.tabList.findIndex(val => val.name === item.name)
            if (index === -1) {
                state.tabList.push(item)
            }
        },
    }
}
