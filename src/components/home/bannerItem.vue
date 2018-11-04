<template>
    <div class="home-words">
        <user-center-btn></user-center-btn>
        <slot title="words"></slot>
    </div>
</template>

<script>
import userCenterBtn from '../shared/userCenterBtn';
export default {
    name:'carouselItem',
    components:{
        userCenterBtn
    }
}
</script>

<style>

</style>
