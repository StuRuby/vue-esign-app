<template>
  <div>
    <carousel></carousel>
    <div>测试专用</div>
  </div>
</template>

<script>
import carousel from "../../components/home/carousel";
export default {
  name: "home",
  data: function() {
    return {};
  },
  components: {
    carousel
  },
  created: function() {
    this.$http
      .get("http://www.weather.com.cn/data/sk/101190408.html")
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log("error");
      });
  }
};
</script>

<style>
</style>
