<script >
import HeaderApp from "./components/HeaderApp.vue";
import FooterApp from "./components/FooterApp.vue";
import { router } from "./router";
export default {
  name: "App",
  data() {
    return {
      router,
    };
  },
  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<template>
  <HeaderApp />
  <main>
    <router-view></router-view>
  </main>
  <FooterApp />
</template>

<style lang="scss" spoped>
@use "./style/general.scss" as *;
@use "./style/partials/mixin.scss" as *;
@use "./style/partials/variable.scss" as *;

// div {
//   background-color: $color;
// }
</style>
