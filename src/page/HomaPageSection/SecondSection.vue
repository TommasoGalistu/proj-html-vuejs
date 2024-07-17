<script>
export default {
  name: "SecondSection",
};
</script>

<template>
  <div class="sfondo">
    <div class="container">CIAO SEMPLICEMENTE CIAO</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;

.sfondo {
  width: 100%;
  background-color: #0d1b2a;
  color: grey;
  .container {
  }
}
</style>