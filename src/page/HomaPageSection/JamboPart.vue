<script>
export default {
  name: "JamboPart",
  data() {
    return {
      jamboPos1: {
        right: "-94rem",
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

      // aggiungo l'active
      elementoCliccato.classList.add("active");

      // Ottieni il numero dell'elemento cliccato
      let numeroPulsante =
        Array.from(container.children).indexOf(elementoCliccato) + 1;
      // console.log("Elemento cliccato:", elementoCliccato);
      // console.log("Numero pulsante:", numeroPulsante);

      // Switch statement per eseguire azioni basate sul numero del pulsante
      switch (numeroPulsante) {
        case 1:
          this.jamboPos1.right = "-94rem";
          this.jamboPos1.left = "";
          this.TextPos1.top = "15rem";
          this.TextPos1.left = "0";
          this.TextPos1.textAlign = "left";
          break;
        case 2:
          this.jamboPos1.right = "-43rem";
          this.jamboPos1.left = "";
          this.TextPos1.top = "7rem";
          this.TextPos1.left = "18rem";
          this.TextPos1.textAlign = "center";
          break;
        case 3:
          this.jamboPos1.right = "";
          this.jamboPos1.left = "-94rem";
          this.TextPos1.top = "15rem";
          this.TextPos1.left = "39rem";
          this.TextPos1.textAlign = "left";
          break;
        default:
          console.log("non lo so");
      }
    },

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
        square.style.backgroundColor = "black";
        square.style.opacity = "0.8";
        square.style.top = `${posY}px`;
        square.style.left = `${posX}px`;

        // Imposta una durata di animazione casuale e un ritardo iniziale
        const duration = Math.random() * 10 + 5; // da 5 a 15 secondi
        const delay = Math.random() * 5; // da 0 a 5 secondi
        square.style.animation = `move ${duration}s linear infinite`;
        square.style.animationDelay = `${delay}s`;

        // Aggiungi le proprietà CSS custom per la direzione del movimento
        square.style.setProperty("--distanceX", `${distanceX}px`);
        square.style.setProperty("--distanceY", `${distanceY}px`);

        background.appendChild(square);
      }
    },
  },
  mounted() {
    this.animazione(30);
  },
};
</script>

<template>
  <div ref="sfondoAnimato" class="sfondoAnimato">
    <!-- <div class="square"></div> -->
    <div class="container">
      <div class="jambo">
        <div class="contImg" :style="jamboPos1">
          <img src="/bg-parallax.png" alt="" />
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
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f1; /* Colore di sfondo */

  overflow: hidden; /* Nasconde qualsiasi overflow */
}

.square {
  position: absolute; /* Posizionamento assoluto */
  width: 5rem;
  height: 5rem;
  background-color: black; /* Colore del quadrato */
  opacity: 0.8;
  animation: move linear infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(var(--distanceX), var(--distanceY));
  }
}

.container {
  .jambo {
    position: relative;
    height: 100vh;
    color: black;
    .contImg {
      height: 108%;
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
        font-size: 1.35rem;
        padding-bottom: 3rem;
      }
      .button {
        @include button-styles(0.5rem 1rem, 0.4rem 1);
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
</style>