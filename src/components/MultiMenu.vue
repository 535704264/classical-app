<template>
  <div>
    <template v-for="(item, index) in data">
      <!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况
           情况一：有子集的情况(递归)：        -->
      <el-submenu
          :key="index"
          :index="item.path"
          v-if="item.children && item.children.length > 0"
          @click="clickMenu(item)">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span>{{ item.label }}</span>
        </template>
        <!-- 递归自己调用自己 -->
        <multi-menu :data="item.children"></multi-menu>
      </el-submenu>
      <!-- 情况二：没子集的情况： -->
      <el-menu-item :key="index" v-else :index="item.path" @click="clickMenu(item)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    name: "MultiMenu", // 递归调用必须有name
    // 注意： 在template标签上使用v-for，:key="index"不能写在template标签上，因为其标签不会被渲染，会引起循环错误
  },
  methods: {
    clickMenu(item) {
      // console.log("点击路径", item)
      // 防止自己跳自己的报错
      if(this.$route.path !== item.path && !(this.$route.path==='/home'&&(item.path==='/'))){
        // console.log("路径", this.$route.path, item.path )
        this.$router.push(item.path)
      }
    }
  }
};
</script>

<script setup>
const props = defineProps( {
    data: {
      type: Array,
      default: [],
    },
  // 注意： 在template标签上使用v-for，:key="index"不能写在template标签上，因为其标签不会被渲染，会引起循环错误
});
</script>

