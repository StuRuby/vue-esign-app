<template>
    <div class="home-words">
        <Login></Login>
        <slot title="words"></slot>
    </div>
</template>

<script>
import Login from './loginPanel';
export default {
    name:'carouselItem',
    components:{
        Login
    }
}
</script>

<style>

</style>
