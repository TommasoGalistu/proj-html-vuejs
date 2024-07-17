<script >
export default {
  name: "ShopPage",
};

</script>

<template>
  <div class="container">
    <section class="articles">
      <div class="results">

      </div>
      <ul></ul>
    </section>
    <section class="prices">

    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;

.container{
  background-color: black;
  height: 300vh;
  display: flex;
  flex-direction: row;
  
}

section{
  height: 100%;
}

.articles{
  width: 70%;
  background-color: red;
}

.prices{
  width: 30%;
  background-color: green;
}
</style>