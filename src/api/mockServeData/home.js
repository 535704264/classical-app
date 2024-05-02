import Mock from 'mockjs'

//  这里全是mock拦截后的假数据
export default {
    getFakeHomeData: () => {
        return {
            code:200,
            msg: "\"hello world\" from back-end"
        }
    },
    getForgedMenu: () => {
        return [
            {
              path: '/',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'home/Home.vue'
            },
            {
              path: '/product', // 二级菜单有子菜单, 这种情况无需path
              name: 'product',
              label: '商品系统',
              icon: 'goods',
              children: [
                {
                  path: '/product/platformAttr', // path和路由index.js里面的path对应，path 应该是唯一的
                  name: 'platformAttr',
                  icon: 'files',
                  label: '平台属性',
                  children: [
                    {
                      path: '/product/platformAttr/Attrgroup',
                      name: 'Attrgroup',
                      icon: 'attract',
                      label: '属性分组',
                      url: 'product/platformAttr/Attrgroup.vue' // vue文件位置
                    },
                  ]
                },
              ]
            },
            {
              path: '/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'user/User.vue'
            },
            {
              path: '/other',
              label: '其他',
              icon: 'location',
              children: [
                {
                  path: '/other/page1',
                  name: 'page1',
                  label: '页面1',
                  icon: 'setting',
                  children: [
                    {
                      path: '/other/page1/page1-2', // 动态路由 path → url
                      name: 'page1-2',
                      label: '页面1-2',
                      icon: 'setting',
                      url: 'other/PageOne-Two.vue' // 作动态路由时，url是vue文件路径
                    }
                  ]
                },
                {
                  path: '/other/page2',
                  name: 'page2',
                  label: '页面2',
                  icon: 'setting',
                  url: 'other/PageTwo.vue'
                }
              ]
            }
          ]
    }
}