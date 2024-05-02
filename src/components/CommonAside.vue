<template>
   <!---应实现递归多级菜单 -->
    <el-menu  default-active="/home" class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              :collapse="isCollapse"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
      <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
      <!-- 递归动态菜单组件 -->
      <multi-menu :data="menuData"></multi-menu>
  </el-menu>
</template>
<script>
import MultiMenu from "../components/MultiMenu.vue";
import {getMenu} from '@/api' // 后端获取菜单数据接口
export default {
  data() {
    return {
      // isCollapse: false,
      menuData:[]
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
    MultiMenu // 注册多级菜单组件
  },
  computed: {
    isCollapse() {
      // 菜单折叠
      return this.$store.state.tab.isCollapse
    }
  },
  mounted() {
    // 渲染成html后调用
    
  },
  created() {
    // 渲染成html前调用
    // 总结请求流程： 1. 找api包中定义的后端接口 1.1 如果mock.js 进行了拦截定义 → 找 mockServerData中的方法数据

    getMenu().then((data)=>{
        console.log("首页请求成功",data)
        this.menuData = data.data;
    })


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