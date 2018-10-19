<template>
    <el-carousel arrow="never" :interval="3000" trigger="click">
        <el-carousel-item>
            <img class="homepage" src='../../assets/images/首页_01.jpg'>
            <carouselItem>
                <template slot="words">
                    <div><a class="homePageWords1"> 便捷</a> <a class="homePageWords2">签章</a></div>
                    <div><a class="homePageWords3">电子合同服务</a> </div>
                    <div> <a class="homePageWords5">高效便捷，专业可靠，合法有效</a> </div>
                    <div class="homePageBtn">
                        <router-link to="/Enter" class="login-log">免费试用</router-link>
                    </div>
                </template>
            </carouselItem>
        </el-carousel-item>
        <el-carousel-item>
            <img class="homepage" src="../../assets/images/首页003.jpg">
            <carousel-item>
                <template slot="words">
                    <a class="homePageWords4">专业的电子签约及印章管理平台</a> 
                </template>
            </carousel-item>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import carouselItem from "./carouselItem.vue";
export default {
  name: "carousel",
  components: {
    carouselItem
  }
};
</script>

<style>
</style>
