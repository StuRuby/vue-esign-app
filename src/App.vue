<template>
    <div class="root">
        <Menu />
        <router-view></router-view>
    </div>
</template>
<script>
import Menu from "./components/shared/Menu/menu.vue";

export default {
  components: {
    Menu
  }
};
</script>
<style>
.root {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
}
</style>
