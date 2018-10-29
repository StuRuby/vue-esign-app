<template>
    <svg v-if="iconId" class="svg-icon" aria-hidden="true">
        <use :xlink:href="iconId"></use>
    </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    id: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconId: function() {
      return this.id ? `#${this.id}` : "";
    }
  }
};
</script>

<style>
</style>
