<template>
  <div>
    <el-container>
      <!-- 右侧菜单 -->
      <el-aside width="200px">
        <common-aside/>
      </el-aside>
      <!-- 主体 -->
      <el-container>
        <el-header>Header</el-header>
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
export default {
  data () {
    return {}
  },
  components:{
    CommonAside // 菜单组件
  }
}
</script>
<style>

</style>