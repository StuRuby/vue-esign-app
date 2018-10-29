<template>
  <full-page ref="fullpage" :options="options">
    <banner class="section"></banner>
    <service-we-apply class="section"></service-we-apply>
  </full-page>
</template>

<script>
import banner from "../../components/home/banner";
import serviceWeApply from "../../components/home/serviceWeApply";
export default {
  name: "home",
  data: function() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollBar: false,
        navigation: true
      }
    };
  },
  components: {
    banner,
    serviceWeApply
  },
  created: function() {},
  methods: {
    afterLoad: function() {
      console.log("event after loaded emitted");
    }
  }
};
</script>

<style scoped>
</style>
