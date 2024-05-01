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
      <multi-menu :data="menu"></multi-menu>
  </el-menu>
</template>
<script>
import MultiMenu from "../components/MultiMenu.vue";
export default {
  data() {
    return {
      isCollapse: false,
      menuArr: [
        {
          name: "前端三大框架",
          path: "前端三大框架",
          icon: "el-icon-star-off",
          children: [
            {
              name: "vue页面",
              path: "/vue",
              icon: "el-icon-star-off",
              children: [],
            },
            {
              name: "react页面",
              path: "/react",
              icon: "el-icon-star-off",
              children: [],
            },
            {
              name: "angular页面",
              path: "/angular",
              icon: "el-icon-star-off",
              children: [],
            },
          ],
        },
        {
          name: "后端两大框架",
          path: "后端两大框架",
          icon: "el-icon-star-off",
          children: [
            {
              name: "Spring Boot页面",
              path: "/springBoot",
              icon: "el-icon-star-off",
              children: [],
            },
            {
              name: "Spring页面",
              path: "Spring页面", // 有children，name和path就保持一致；没有的话，path的值就是路由表中用到的，不保持一致也行，因为不会用到
              icon: "el-icon-star-off",
              children: [
                {
                  name: "MySql页面",
                  path: "/mysql",
                  icon: "el-icon-star-off",
                  children: [],
                },
                {
                  name: "Redis页面",
                  path: "/redis",
                  icon: "el-icon-star-off",
                  children: [],
                },
              ],
            },
            {
              name: "Mybatis页面",
              path: "/mybatis",
              icon: "el-icon-star-off",
              children: [],
            }
            ],
        }
      ],
      menu: [
        {
          path: '/home',
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
          // url: 'product/Mall.vue',
          children: [
            {
              path: '/product/category',
              name: 'category',
              icon: 'files',
              label: '分类维护',
              url: 'product/Category.vue',
            },
            {
              path: '/product/brand',
              name: 'brand',
              icon: 's-flag',
              label: '品牌管理',
              url: 'product/Brand.vue'
            },
            {
              path: '/product/platformAttr', //
              name: 'platformAttr',
              icon: 'files',
              label: '平台属性',
              children: [
                {
                  path: '/product/platformAttr/Attrgroup',
                  name: 'Attrgroup',
                  icon: 'attract',
                  label: '属性分组',
                  url: 'product/Attrgroup.vue'
                },
                {
                  path: '/product/BaseAttr',
                  name: 'BaseAttr',
                  icon: 'attract',
                  label: '规格参数',
                  url: 'product/BaseAttr.vue'
                },
                {
                  path: '/product/SaleAttr',
                  name: 'SaleAttr',
                  icon: 'attract',
                  label: '销售属性',
                  url: 'product/SaleAttr.vue'
                },
              ]
            },
            {
              path: '/product/maintain',
              name: 'maintain',
              icon: 's-flag',
              label: '商品维护',
              children: [
                {
                  path: '/product/Spu',
                  name: 'Spu',
                  icon: 'attract',
                  label: 'spu管理',
                  url: 'product/Spu.vue'
                },
                {
                  path: '/product/SpuAdd',
                  name: 'Publish',
                  icon: 'attract',
                  label: '发布商品',
                  url: 'product/SpuAdd.vue'
                },
                {
                  path: '/product/Manager',
                  name: 'Manager',
                  icon: 'attract',
                  label: '商品管理',
                  url: 'product/Manager.vue'
                },

              ]
            },
          ]
        },
        {
          path: "ware",
          name: 'ware',
          label: '库存系统',
          icon: 's-custom',
          children: [
            {
              path: '/ware/WareInfo',
              name: 'WareInfo',
              icon: 'refrigerator',
              label: '仓库维护',
              url: 'ware/WareInfo.vue'
            },
            {
              path: '/ware/Sku',
              name: 'wareSku',
              icon: 'ice-tea',
              label: '商品库存',
              url: 'ware/Sku.vue'
            },
            {
              path: "/ware/PurchaseMaintain",
              name: 'PurchaseMaintain',
              icon: 'fork-spoon',
              label: '采购单维护',
              children: [
                {
                  path: '/ware/PurchaseItem',
                  name: 'PurchaseItem',
                  icon: 'brush',
                  label: '采购需求',
                  url: 'ware/PurchaseItem.vue'
                },
                {
                  path: '/ware/Purchase',
                  name: 'PurchaseInfo',
                  icon: 'wallet',
                  label: '采购单',
                  url: 'ware/Purchase.vue'
                }
              ]
            },
          ]
        },
        {
          path: 'member',
          name: 'member',
          label: '用户系统',
          icon: 's-promotion',
          children: [
            // {
            //     path: '/member/list',
            //     name: 'MemberList',
            //     icon: 'crop',
            //     label: '会员列表',
            //     url: 'member/list.vue'
            // },
            {
              path: '/member/Level',
              name: 'MemberLevel',
              icon: 'medal',
              label: '会员等级',
              url: 'member/Level.vue'
            },
            // {
            //     path: '/member/change',
            //     name: 'MemberChange',
            //     icon: 'heavy-rain',
            //     label: '积分变化',
            //     url: 'member/change.vue'
            // },{
            //     path: '/member/stat',
            //     name: 'MemberStat',
            //     icon: 'files',
            //     label: '统计信息',
            //     url: 'member/stat.vue'
            // },
          ]
        },
        {
          path: 'user',
          name: 'user',
          label: '用户管理DEMO',
          icon: 'user',
          url: 'user/User.vue'
        },
        {
          path: 'other',
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'pageOne/PageOne.vue',
              children: [
                {
                  path: '/page1-2',
                  name: 'page1-2',
                  label: '页面1-2',
                  icon: 'setting',
                  url: 'pageTwo/PageTwo.vue'
                }
              ]
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'pageTwo/PageTwo.vue'
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