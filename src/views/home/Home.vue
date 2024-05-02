<template>
  <h1>
    {{say}}
  </h1>
</template>
<script>
import {getHomeData} from '@/api'  // @/ → 是src开始
  export default {
    data () {
      return {
        say:""
      }
    },
    methods: {
       getWelcomeData () {
         getHomeData().then((data)=>{
           this.say = data.data.msg;
         })
      },
    },
    mounted() {
      // 挂载后端数据
      // 方式一：直接写请求
      // getData().then((data)=>{
      //   console.log("首页请求成功",data)
      // })

      // 方式二：把请求写在methods里，而后调用（推荐）
      this.getWelcomeData()
    }
  }
</script>
<style lang="less" scoped>
</style>