<script >
export default {
  name: "JamboPart",
  data() {
    return {
      jamboPos1: {
        right: "-98rem",
        left: "",
      },
      TextPos1: {
        top: "15rem",
        left: "0",
        textAlign: "",
      },
    };
  },
  methods: {
    changePhoto(e) {
      const container = this.$refs.container;
      let elementoCliccato = e.target;
      // elimino active
      for (let i = 0; i < container.childNodes.length; i++) {
        if (container.childNodes[i].classList.contains("active")) {
          container.childNodes[i].classList.remove("active");
        }
      }

      //   aggiungo l'active
      elementoCliccato.classList.add("active");

      // Ottieni il numero dell'elemento cliccato
      let numeroPulsante =
        Array.from(container.children).indexOf(elementoCliccato) + 1;
      // console.log("Elemento cliccato:", elementoCliccato);
      // console.log("Numero pulsante:", numeroPulsante);

      // Switch statement per eseguire azioni basate sul numero del pulsante
      switch (numeroPulsante) {
        case 1:
          this.jamboPos1.right = "-98rem";
          this.jamboPos1.left = "";
          this.TextPos1.top = "15rem";
          this.TextPos1.left = "0";
          this.TextPos1.textAlign = "left";
          break;
        case 2:
          this.jamboPos1.right = "-48rem";
          this.jamboPos1.left = "";
          this.TextPos1.top = "7rem";
          this.TextPos1.left = "18rem";
          this.TextPos1.textAlign = "center";
          break;
        case 3:
          this.jamboPos1.right = "";
          this.jamboPos1.left = "-98rem";
          this.TextPos1.top = "15rem";
          this.TextPos1.left = "39rem";
          this.TextPos1.textAlign = "left";
          break;
        default:
          console.log("non lo so");
      }
    },
  },
};
</script>

<template>
  <div class="sfondoAnimato">
    <div class="container">
      <div class="jambo">
        <div class="contImg" :style="jamboPos1">
          <img src="/public/bg-parallax.png" alt="" />
        </div>
        <div class="contText" :style="TextPos1">
          <h2>We Share</h2>
          <h2 class="colorGreen">Good Ideas</h2>
          <p class="colorGreen">
            Escape the comfort zone and achieve better results with the help of
            experts who understand the subject
          </p>
          <div class="button"><span>Get in touch</span></div>
        </div>
      </div>
    </div>
    <div @click="changePhoto" class="contPulsanti">
      <div ref="container">
        <div class="pulsanti active"></div>
        <div class="pulsanti"></div>
        <div class="pulsanti"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;
.sfondoAnimato {
  background-color: #f1f1f1;
  .container {
    .jambo {
      position: relative;
      height: 100vh;
      color: black;
      .contImg {
        height: 115%;
        position: absolute;
        bottom: 0;

        img {
          height: 100%;
        }
      }
      .contText {
        position: absolute;

        width: 47%;
        .colorGreen {
          color: $colorStyleJambo;
          padding-bottom: 1.5rem;
        }
        h2 {
          font-size: 5rem;
        }
        p {
          font-size: 1.5rem;
          padding-bottom: 3rem;
        }
        .button {
          display: inline;
          background-color: $colorStyleJambo;
          color: white;
          padding: 0.5rem 0.7rem;
          border-radius: 10px;
          border: none;

          &:hover {
            cursor: pointer;
            background-color: $colorStyleJambo;
          }
          &:hover span {
            padding: 0.4rem 1rem;
            border-radius: 30px;
            background-color: $colorStyleJamboHover;
          }
          span {
            padding: 0.4rem 1rem;
            border-radius: 30px;
            background-color: $colorStyleJambo;
          }
        }
      }
    }
  }
  .contPulsanti {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translate(0, -50%);
    .pulsanti {
      height: 2rem;
      width: 0.7rem;
      background-color: grey;
      border-radius: 30px;
      margin-bottom: 0.5rem;

      &:hover {
        cursor: pointer;
        background-color: $colorStyleJamboHover;
      }
    }
    .pulsanti.active {
      background-color: $colorStyleJambo;
    }
  }
}
</style>