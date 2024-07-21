<script>
export default {
  name: "BannerSection",
  data() {
    return {
      certNumber: 0,
      emploNumber: 0,
      customNumber: 0,
      countrNumber: 0,
      // certNumber: 128,
      // emploNumber: 230,
      // customNumber: 517,
      // countrNumber: 94,
      isAnimate: false,
    };
  },
  methods: {
    startAnimation() {
      // Riferimento all'elemento DOM Vue
      const element = this.$refs.rifSpan;
      if (!element) return;

      // Posizione dell'elemento
      const rect = element.getBoundingClientRect();
      console.log(rect);
      // Altezza della viewport
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Controlla se l'elemento è visibile nella viewport
      if (rect.top <= windowHeight && !this.isAnimate) {
        this.isAnimate = true;
        this.animateNumbers();
      }
    },
    animateNumbers() {
      this.animateNumber(128, "certNumber");
      this.animateNumber(230, "emploNumber");
      this.animateNumber(517, "customNumber");
      this.animateNumber(94, "countrNumber");
    },
    animateNumber(endNumber, dataKey) {
      const start = 0;
      const duration = 2000; // Durata dell'animazione in millisecondi
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        this[dataKey] = Math.floor(progress * endNumber);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    },
  },
  mounted() {
    this.startAnimation();
    window.addEventListener("scroll", this.startAnimation);
  },
  // beforeDestroy(){
  //   window.addEventListener('scroll')
  // }
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
          <span ref="rifSpan"
            ><strong>{{ certNumber }}</strong></span
          >
          <p>Certifications</p>
        </div>
        <div class="number">
          <span
            ><strong>{{ emploNumber }}</strong></span
          >
          <p>Employees</p>
        </div>
        <div class="number">
          <span
            ><strong>{{ customNumber }}</strong></span
          >
          <p>Customers</p>
        </div>
        <div class="number">
          <span
            ><strong>{{ countrNumber }}</strong></span
          >
          <p>Countries Served</p>
        </div>
      </div>
    </div>
    <div class="sfondo2">
      <div class="sfuocatura"></div>
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
    padding: 1rem 0;
    text-align: center;

    .contText {
      h2 {
        font-size: 3rem;
        padding: 1.5rem 0;
        color: white;
      }
    }

    .contNumber {
      padding: 1rem 0;
      padding-bottom: 4rem;
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
  position: relative;
  .sfuocatura {
    top: 0;
    left: 0px;
    position: absolute;
    filter: grayscale(70%);
    z-index: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(
    //   42deg,
    //   rgba(22, 22, 22, 0.5) 52%,
    //   rgba(203, 203, 203, 0) 70%
    // );
    background: linear-gradient(
      90deg,
      rgba(13, 25, 34) 10%,
      rgba(237, 237, 237, 0) 70%
    );
  }
  .contBanner {
    z-index: 5;
    height: 12rem;
    padding: 4rem 0;
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow-x: auto;

    .contImg {
      height: 1.5rem;
      img {
        height: 100%;
        z-index: 10;
        filter: invert(1) brightness(0.8) grayscale(1);
      }
    }
  }
}
</style>