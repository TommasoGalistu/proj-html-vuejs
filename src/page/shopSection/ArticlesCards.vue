<script>
export default {
  name: "ArticlesCards",
};
</script>

<template>
  <div class="ShopCards">
    <div class="upper-img">
      <div class="sale"></div>
    </div>
    <div class="lower-price">
      <h2></h2>
      <span></span>
      <i></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "src/style/general.scss" as *;
.ShopCards {
  height: 150px;
  width: 100px;
}

.upper-img {
  height: 70%;
  width: 100%;
}

.lower-price {
  height: 30%;
  width: 100%;
}

.sale {
  background-color: aqua;
}
</style>