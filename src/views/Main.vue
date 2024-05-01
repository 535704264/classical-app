<template>
  <div>
    <el-container class="main-wrapper">
      <!-- 右侧菜单 -->
      <el-aside width="auto">
        <common-aside/>
      </el-aside>
      <!-- 主体 -->
      <el-container>
        <!-- 右头部 -->
        <el-header>
          <common-header/>
        </el-header>
        <el-main>
          <!-- 子路由出口（动态变更的页面）-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader";
export default {
  data () {
    return {}
  },
  components:{
    CommonAside, // 右侧，菜单组件
    CommonHeader // 顶部
  }
}
</script>
<style lang="less" scoped>
.main-wrapper {
  height: 100vh;
  .el-header {
    padding: 0;
  }
}

</style>