<template>
    <div>
        <Menu/>
        <router-view></router-view>
    </div>
</template>
<script>
    import Menu from './components/shared/menu/index.vue';

    export default {
        components:{
            Menu
        }
    }
</script>