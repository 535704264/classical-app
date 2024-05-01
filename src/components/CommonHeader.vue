<template>
  <!--整个头部区域   -->
  <div class="header-container">
    <!--  头部左边边区域   -->
    <div class="l-content">
      <el-button style="margin-right: 20px" @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
      <!--  面包屑区域（无标签版，顶上的文字版）-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in breadCrumbList" :key="item.path" :to="{ path: item.path}" >{{ item.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--  头部右边区域   -->
    <div class="r-content">
      <el-dropdown @command="handleClick">
        <!--个人中心下拉菜单-->
        <span class="el-dropdown-link">
           <img class="user" src="../assets/images/user.png">
        </span>
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item >个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    handleMenu(){
      // 左侧菜单收缩/展开
      this.$store.commit('collapseMenu')
    },
    handleClick(){}
  },
  components: {
  },
  computed: {
    breadCrumbList() {
      // 当下匹配的所以路由记录，比如地址是/ware/PurchaseItem → /,/ware,/PurchaseItem 三个
      // console.log(this.$route.matched);
      // return this.$route.matched;
    }
  }
}
</script>
<style lang="less" scoped>
// 头部样式
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }

  .r-content {
    .user {
      width: 40px;
      border-radius: 50%;

    }
  }

  .l-content {
    display: flex;
    // 上下居中
    align-items: center;

    // 文字面包屑样式
    .el-breadcrumb {
      margin-left: 15px;

      // deep 强制生效
      /deep/ .el-breadcrumb__item {
        // 所有的默认色
        .el-breadcrumb__inner {
          &.is-link {
            color: #666;
          }
        }

        // 最后一个的颜色
        &:last-child {
          .el-breadcrumb__inner {
            color: #fff;
          }
        }

      }
    }
  }
}


</style>