<script>
import { store } from "../../store";
export default {
  name: "JamboPart",
  data() {
    return {
      store,
      jamboPos1: {
        right: "-110rem",
        left: "",
      },
      TextPos1: {
        top: "12rem",
        left: "0",
        textAlign: "",
      },

      textInsert: {
        title: store.textJambo[0].title,
        titleEvidenziato: store.textJambo[0].titleEvidenziato,
        text: store.textJambo[0].text,
      },
    };
  },

  methods: {
    caroselloAuto(numPulsante) {
      switch (numPulsante) {
        case 1:
          this.jamboPos1.right = "-110rem";
          this.jamboPos1.left = "";
          this.TextPos1.top = "12rem";
          this.TextPos1.left = "0";
          this.TextPos1.textAlign = "left";
          this.textInsert.title = this.store.textJambo[numPulsante - 1].title;
          this.textInsert.titleEvidenziato =
            this.store.textJambo[numPulsante - 1].titleEvidenziato;
          this.textInsert.text = this.store.textJambo[numPulsante - 1].text;
          break;
        case 2:
          this.jamboPos1.right = "-60.5rem";
          this.jamboPos1.left = "";
          this.TextPos1.top = "11rem";
          this.TextPos1.left = "18rem";
          this.TextPos1.textAlign = "center";
          this.textInsert.title = this.store.textJambo[numPulsante - 1].title;
          this.textInsert.titleEvidenziato =
            this.store.textJambo[numPulsante - 1].titleEvidenziato;
          this.textInsert.text = this.store.textJambo[numPulsante - 1].text;
          break;
        case 3:
          this.jamboPos1.right = "";
          this.jamboPos1.left = "-110rem";
          this.TextPos1.top = "12rem";
          this.TextPos1.left = "39rem";
          this.TextPos1.textAlign = "left";
          this.textInsert.title = this.store.textJambo[numPulsante - 1].title;
          this.textInsert.titleEvidenziato =
            this.store.textJambo[numPulsante - 1].titleEvidenziato;
          this.textInsert.text = this.store.textJambo[numPulsante - 1].text;
          break;
        default:
          console.log("non lo so");
      }
    },

    changePhoto(e) {
      const container = this.$refs.container;

      let elementoCliccato = e.target;
      // elimino active
      for (let i = 0; i < container.childNodes.length; i++) {
        if (container.childNodes[i].classList.contains("active")) {
          container.childNodes[i].classList.remove("active");
        }
      }

      // aggiungo l'active
      elementoCliccato.classList.add("active");

      // Ottieni il numero dell'elemento cliccato
      let numeroPulsante =
        Array.from(container.children).indexOf(elementoCliccato) + 1;
      this.isActive = false;
      // Switch statement per eseguire azioni basate sul numero del pulsante
      this.caroselloAuto(numeroPulsante);
    },
    // animazione quadrati che si muovono nello spazio
    animazione(number) {
      const background = this.$refs.sfondoAnimato;

      for (let i = 0; i < number; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Genera dimensioni casuali tra 2rem e 7rem
        const size = Math.random() * 5 + 2; // da 2 a 7
        const sizeRem = `${size}rem`;

        // Posizionamento iniziale casuale
        const posX = Math.random() * background.clientWidth;
        const posY = Math.random() * background.clientHeight;

        // Calcola la direzione in base alla posizione iniziale
        const directionX = posX > background.clientWidth / 2 ? -1 : 1;
        const directionY = posY > background.clientHeight / 2 ? -1 : 1;

        // Calcola la distanza da percorrere per uscire dallo schermo
        const distanceX = directionX * (background.clientWidth + 100);
        const distanceY = directionY * (background.clientHeight + 100);

        // Imposta gli stili
        square.style.position = "absolute";
        square.style.width = sizeRem;
        square.style.height = sizeRem;
        square.style.backgroundColor = "rgba(190, 190, 190, 0.4)";
        square.style.opacity = "0.8";
        square.style.top = `${posY}px`;
        square.style.left = `${posX}px`;

        background.appendChild(square);

        // Crea l'animazione usando il metodo animate
        const duration = Math.random() * 80 + 20; // da 20 a 30 secondi
        const delay = Math.random() * 1; // da 0 a 5 secondi

        square.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: `translate(${distanceX}px, ${distanceY}px)` },
          ],
          {
            duration: duration * 1000, // converti in millisecondi
            delay: delay * 1000, // converti in millisecondi
            iterations: Infinity,
            easing: "linear",
            fill: "forwards",
          }
        );
      }
    },
  },
  mounted() {
    this.animazione(30);
    this.caroselloAuto();
  },
};
</script>



<template>
  <div ref="sfondoAnimato" class="sfondoAnimato">
    <div class="container">
      <div class="jambo">
        <div class="contImg" :style="jamboPos1">
          <img src="/bg-parallax.png" alt="" />
        </div>
        <div class="contText" :style="TextPos1">
          <h2>{{ textInsert.title }}</h2>
          <h2 class="colorGreen">{{ textInsert.titleEvidenziato }}</h2>
          <p class="colorGreen">
            {{ textInsert.text }}
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
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1; /* Colore di sfondo */

  overflow: hidden; /* Nasconde qualsiasi overflow */
}

.container {
  .jambo {
    position: relative;
    height: 100vh;
    color: black;

    .contImg {
      height: 133%;
      position: absolute;
      bottom: -147px;
      z-index: 10;

      img {
        height: 100%;
      }
    }
    .contText {
      z-index: 10;
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
        font-size: 1.35rem;
        padding-bottom: 3rem;
      }
      .button {
        @include button-styles(0.5rem 1rem, 0.4rem);
      }
    }
  }
}

.contPulsanti {
  z-index: 10;
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
</style>