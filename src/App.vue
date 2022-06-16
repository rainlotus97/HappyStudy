<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import http from "@/utils/http";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    async getHttp() {
      const result = await http("GET", "/user/repos", "");
      console.log(result);
    },
  },
});
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app{
  background: 0 0;
  // background: linear-gradient(-45deg, rgba(147, 26, 222, 0.83) 0%, rgba(28, 206, 234, 0.82) 100%);
}
</style>
