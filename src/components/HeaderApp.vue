<script >
import { router } from "../router";
export default {
  name: "HeaderApp",
  data() {
    return {
      routes: router.options.routes,
    };
  },
};
</script>

<template>
  <header>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="{ name: route.name }">{{ route.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
</style>