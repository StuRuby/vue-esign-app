<template>
  <sticky-box left='0' :top='setTop'>
    <el-menu mode="horizontal" background-color="#000" class="el-menu-center" text-color="#fff" active-text-color="#be926f">
      <template v-for="(menuItem) in menus">
        <template v-if="menuItem.type==='item'">
          <menuItem :key="menuItem.id" :menu="menuItem">
          </menuItem>
        </template>
        <template v-if="menuItem.type==='subMenu'">
          <subMenu :key="menuItem.id" :menu="menuItem"></subMenu>
        </template>
      </template>
    </el-menu>
  </sticky-box>
</template>

<script >
import menuItem from "./menuItem.vue";
import subMenu from "./subMenu.vue";
import stickyBox from "../sticky";

export default {
  name: "Menu",
  props: {
    menus: {
      type: Array,
      default: createMenuData
    }
  },
  components: {
    menuItem,
    subMenu,
    stickyBox
  },
  data() {
    return {
      top: "unset"
    };
  },
  computed: {
    setTop() {
      return this.$nextTick(() => {
        const height = window.innerHeight;
        this.top = height - 30 + "px";
      });
    }
  }
};

function createMenuData() {
  const defaultMenuData = [
    {
      type: "item",
      label: "首页",
      index: "1",
      id: "abc123",
      route: {
        type: "inner",
        path: "/index"
      }
    },
    {
      type: "subMenu",
      label: "产品中心",
      index: "2",
      id: "abc124",
      children: [
        {
          type: "subMenu",
          label: "产品介绍",
          index: "2-1",
          id: "abc1241",
          children: [
            {
              type: "item",
              label: "电子签章",
              index: "2-1-1",
              id: "abc12411",
              route: {
                type: "inner",
                path: "/products"
              }
            },
            {
              type: "item",
              label: "电子签名",
              index: "2-1-2",
              id: "abc12412",
              route: {
                type: "inner",
                path: "/products"
              }
            },
            {
              type: "item",
              label: "电子印章",
              index: "2-1-3",
              id: "abc12413",
              route: {
                type: "inner",
                path: "/products"
              }
            },
            {
              type: "item",
              label: "电子合同",
              index: "2-1-4",
              id: "abc12414",
              route: {
                type: "inner",
                path: "/products"
              }
            }
          ]
        },
        {
          type: "item",
          label: "服务介绍",
          index: "2-2",
          id: "abc1242",
          route: {
            type: "inner",
            path: "/products"
          }
        },
        {
          type: "item",
          label: "合同认证",
          index: "2-3",
          id: "abc1243",
          route: {
            type: "inner",
            path: ""
          }
        },
        {
          type: "item",
          label: "数据存证",
          index: "2-4",
          id: "abc1244",

          route: {
            type: "inner",
            path: ""
          }
        }
      ]
    },
    {
      type: "subMenu",
      label: "解决方案",
      index: "3",
      id: "abc125",
      children: [
        {
          type: "item",
          label: "行业应用",
          index: "3-1",
          id: "abc1251",
          route: {
            type: "inner",
            path: "/solutions"
          }
        },
        {
          type: "item",
          label: "未来应用",
          index: "3-2",
          id: "abc1252",
          route: {
            type: "inner",
            path: "/solutions"
          }
        }
      ]
    },
    {
      type: "item",
      label: "下载中心",
      index: "4",
      id: "abc126",
      route: {
        type: "inner",
        path: "/downloads"
      }
    },
    {
      type: "item",
      label: "开发平台",
      index: "5",
      id: "abc127",
      route: {
        type: "inner",
        path: "/develop"
      }
    }
  ];
  return defaultMenuData;
}
</script>

<style scoped >
.el-menu-center {
  display: flex;
  justify-content: center;
}
.el-menu.el-menu--horizontal {
  border-bottom: solid 0 #000 !important;
}
</style>
