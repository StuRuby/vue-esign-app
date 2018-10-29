<template>
    <el-carousel arrow="never" :interval="3000" trigger="click" :height="height" class="full-page-banner" >
        <el-carousel-item>
            <img class="homepage" src='../../assets/images/首页_01.jpg'>
            <bannerItem>
                <template slot="words">
                    <div><a class="homePageWords1"> 便捷</a> <a class="homePageWords2">签章</a></div>
                    <div><a class="homePageWords3">电子合同服务</a> </div>
                    <div> <a class="homePageWords5">高效便捷，专业可靠，合法有效</a> </div>
                    <div class="homePageBtn">
                        <router-link to="/Enter" class="login-log">免费试用</router-link>
                    </div>
                </template>
            </bannerItem>
        </el-carousel-item>
        <el-carousel-item>
            <img class="homepage" src="../../assets/images/首页003.jpg">
            <bannerItem>
                <template slot="words">
                    <a class="homePageWords4">专业的电子签约及印章管理平台</a>
                </template>
            </bannerItem>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import bannerItem from "./bannerItem";
export default {
  name: "banner",
  components: {
    bannerItem
  },
  computed: {
    height: function() {
      return window.innerHeight  + "px";
    }
  }
};
</script>

<style scoped>
.homepage {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
}
.full-page-banner{
    left: 0;
    top: -60px;
    right: 0;
}
</style>

