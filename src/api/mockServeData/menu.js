import Mock from 'mockjs'

//  这里全是mock拦截后的假数据
//  
export default {
    getForgedMenu: () => {
        return [
            {
              path: '/',
              name: 'home',
              meta: {
                title: '首页',
                icon: 's-home',
              },
              url: 'home/Home.vue'
            },
            {
              path: '/product', // 二级菜单有子菜单, 这种情况无需path
              name: 'product',
              meta: {
                title: '商品系统',
                icon: 'goods',
              },
              children: [
                {
                  path: '/product/platformAttr', // path和路由index.js里面的path对应，path 应该是唯一的
                  name: 'platformAttr',
                  meta: {
                    title: '平台属性',
                    icon: 'files',
                  },
                  children: [
                    {
                      path: '/product/platformAttr/Attrgroup',
                      name: 'Attrgroup',
                      meta: {
                        title: '属性分组',
                        icon: 'attract',
                      },
                      url: 'product/platformAttr/Attrgroup.vue' // vue文件位置
                    },
                  ]
                },
              ]
            },
            {
              path: '/user',
              name: 'user',
              meta: {
                title: '用户管理',
                icon: 'user',
              },
              url: 'user/User.vue'
            },
            {
              path: '/other',
              name: 'other',
              meta: { // 
                title: '其他', 
                icon: 'location'
              },
              children: [
                {
                  path: '/other/page1',
                  name: 'page1',
                  meta: {
                    title: '页面1', 
                    icon: 'setting'
                  },
                  children: [
                    {
                      path: '/other/page1/page1-2', // 动态路由 path → url
                      name: 'page1-2',
                      meta: {
                        title: '页面1-2',
                        icon: 'setting',
                      },
                      url: 'other/PageOne-Two.vue' // 作动态路由时，url是vue文件路径
                    }
                  ]
                },
                {
                  path: '/other/page2',
                  name: 'page2',
                  meta: {
                    title: '页面2',
                    icon: 'setting',
                  },
                  url: 'other/PageTwo.vue'
                }
              ]
            }
          ]
    }
}