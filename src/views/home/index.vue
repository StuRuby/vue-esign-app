<template>

</template>

<script>
export default {
  name: "home",
  data: function() {
    return {};
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
