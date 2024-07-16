<script >
export default {
  name: "HomePage",
};
</script>

<template>
  <div class="sfondoAnimato">
    <div class="container">
      <div class="jambo">
        <div class="contImg">
          <img src="/public/bg-parallax.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
.sfondoAnimato {
  background-color: #f1f1f1;
  .container {
    .jambo {
      height: 100vh;
      .contImg {
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>