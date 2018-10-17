<template>
    <el-submenu :index='menu.index'>
        <template slot="title">
            <i></i>{{menu.label}}
        </template>
        <template v-if="menu.children!==null">
            <template v-for="item in menu.children">
                <template v-if="item.type==='item'">
                    <menuItem :key="item.index" :menu="item">
                    </menuItem>
                </template>
                <template v-if="item.type==='subMenu'">
                    <subMenu :key="item.index" :menu="item"></subMenu>
                </template>
            </template>
        </template>
    </el-submenu>
</template>

<script>
import menuItem from "./menuItem";
export default {
  name: "subMenu",
  props: {
    menu: {
      type: Object
    }
  },
  components: {
    menuItem
  }
};
</script>

<style>
</style>
