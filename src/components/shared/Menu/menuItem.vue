<template>
    <el-menu-item v-if="menu.route " :index="menu.index" :route="menu.route">
        <router-link :to="menu.route" tag="li">{{menu.label}}</router-link>
    </el-menu-item>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    menu: {
      type: Object
    }
  }
};
</script>

<style>
</style>
