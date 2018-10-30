<template>
  <full-page ref="fullpage" :options="options">
    <banner class="section"></banner>
    <service-we-apply class="section"></service-we-apply>
    <advantages class="section"></advantages>
    <uses class="section"></uses>
  </full-page>
</template>

<script>
import banner from "../../components/home/banner";
import serviceWeApply from "../../components/home/serviceWeApply";
import advantages from '../../components/home/advantages';
import uses from '../../components/home/uses';
export default {
  name: "home",
  data: function() {
    return {
      options: {
        afterLoad: this.afterLoad,
        scrollBar: true,
        navigation: true,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        loopBottom: false, // 滚动到最后一个后，是否循环滚动到第一个
        loopTop: false
      }
    };
  },
  components: {
    banner,
    serviceWeApply,
    advantages,
    uses
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
