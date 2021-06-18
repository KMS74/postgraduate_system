<template>
  <div id="app">
    <the-navigation />
    <router-view />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>
<style></style>
