<script>
export default {
  name: "BannerSection",
  data() {},
  methods: {},
};
</script>
<template>
  <div class="sfondo">
    <div class="container">
      <div class="contText">
        <h2>Results in Numbers</h2>
        <p>
          Our goal is to exceed ecpectations by delivering the best job possible
        </p>
      </div>
      <div class="contNumber">
        <div class="number">
          <span><strong>128</strong></span>
          <p>Certifications</p>
        </div>
        <div class="number">
          <span><strong>128</strong></span>
          <p>Certifications</p>
        </div>
        <div class="number">
          <span><strong>128</strong></span>
          <p>Certifications</p>
        </div>
        <div class="number">
          <span><strong>128</strong></span>
          <p>Certifications</p>
        </div>
      </div>
    </div>
    <div class="sfondo2">
      <div class="container">
        <div class="contBanner">
          <div class="contImg">
            <img src="/logo-1.png" alt="" />
          </div>
          <div class="contImg">
            <img src="/logo-2.png" alt="" />
          </div>
          <div class="contImg">
            <img src="/logo-3.png" alt="" />
          </div>
          <div class="contImg">
            <img src="/logo-4.png" alt="" />
          </div>
          <div class="contImg">
            <img src="/logo-5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;

.sfondo {
  background-color: #0d1922;
  width: 100%;

  p {
    color: rgb(176, 176, 176);
    padding: 1rem 0;
  }

  .container {
    padding: 4rem 0;
    text-align: center;

    .contText {
      h2 {
        padding: 1.5rem 0;
        color: white;
      }
    }

    .contNumber {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;

      .number {
        span {
          font-size: 3rem;
          color: $colorStyleJambo;
        }
      }
    }
  }
}
.sfondo2 {
  background-color: #1b4965;
  .contBanner {
    height: 12rem;
    padding: 4rem 0;

    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-x: auto;

    //   debug
    border: 1px solid white;

    .contImg {
      img {
        filter: grayscale(100%) brightness(50%);
      }
    }
  }
}
</style>