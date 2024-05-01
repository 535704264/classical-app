<template>
   <!---应实现递归多级菜单 -->
    <el-menu  default-active="/home" class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :collapse="isCollapse"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
      <h3>通用后台管理系统</h3>
      <!-- 递归动态菜单组件 -->
      <multi-menu :data="menuData"></multi-menu>
  </el-menu>
</template>
<script>
import MultiMenu from "../components/MultiMenu.vue";
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
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
              path: '/page1',
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
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    }
  },
  components: {
    MultiMenu // 注册多级
  },
  computed: {

  }
}
</script>
<style lang="less" scoped>
// 菜单样式
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px; // 导航宽度
  min-height: 400px; // 最小高度
}

//
.el-menu {
  height: 100vh; //vh与浏览器高度一致
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }

  border-right: none;
}

</style>