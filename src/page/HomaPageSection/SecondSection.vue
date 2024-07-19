<script>
export default {
  name: "SecondSection",
};
</script>

<template>
  <div class="sfondo">
    <div class="container">
      <div class="contText">
        <h2>The Company</h2>
        <p>
          FOr 12 years we have been providing audit and warranty, financial
          advice, risk advice, taxes and related services to select client
        </p>
        <div class="contCard">
          <!-- prima card -->
          <div class="card">
            <div class="content icona">
              <font-awesome-icon :icon="['fas', 'hourglass-end']" />
              <h3>Tradition</h3>
            </div>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="content icona">
              <font-awesome-icon :icon="['fas', 'lock']" />
              <h3>Tradition</h3>
            </div>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="content icona">
              <font-awesome-icon :icon="['fas', 'apple-whole']" />
              <h3>Tradition</h3>
            </div>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="card">
            <div class="content icona">
              <font-awesome-icon :icon="['fas', 'user-tie']" />
              <h3>Tradition</h3>
            </div>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contImg">
        <div class="sfuocatura"></div>
        <div class="fixed-image"></div>
      </div>
    </div>
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
    display: flex;
    .contText {
      width: 50%;
      padding: 3rem 0;
      padding-right: 2rem;
      h2 {
        font-size: 3rem;
        color: white;
      }
    }
    .contImg {
      width: 50%;
      position: relative;
      overflow-y: scroll;
      height: 80vh;
      .sfuocatura {
        top: 0;
        left: 64px;
        position: absolute;
        filter: grayscale(70%);
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          42deg,
          rgba(22, 22, 22, 0.5) 52%,
          rgba(203, 203, 203, 0) 70%
        );
      }
      .fixed-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("/public/about-4.jpg");
        background-size: contain;
        background-attachment: fixed;
        background-position: right -4%;
        background-repeat: no-repeat;

        // z-index: -1;
      }
    }
  }
}
</style>