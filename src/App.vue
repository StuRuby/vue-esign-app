<template>
    <div>
        <Menu/>
        <router-view></router-view>
    </div>
</template>
<script>
    import Menu from './components/shared/Menu/menu.vue';

    export default {
        components:{
            Menu
        }
    }
</script>