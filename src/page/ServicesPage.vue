<script >

import Jumbotron from './serviceSection/Jumbotron.vue';

export default {
  name: "ServicesPage",
  components: {
    Jumbotron,
  }
};
</script>

<template>
  <h1>Services Page</h1>
  <Jumbotron/>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
</style>