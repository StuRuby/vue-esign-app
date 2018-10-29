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

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 0px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}


</style>
