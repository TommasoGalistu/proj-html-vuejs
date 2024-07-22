<script>
export default {
  name: "ServiceCard",
  props: {
    // path icona
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    // es. dividendo: 2, verrà diviso per 100%
    dividendo: {
      type: Number,
    },
    // somma dei gap
    gapTotale: {
      type: Number,
    },
    // colore titolo
    colorTitle: {
      type: String,
    },
    // colore testo
    colorText: {
      type: String,
    },
    // colore card
    backgroundColor: {
      type: String,
    },
  },
  data() {
    return {};
  },
  computed: {
    grandezzaCard() {
      return {
        width: `calc((100% / ${this.dividendo}) - ${this.gapTotale}px)`,
        backgroundColor: `${this.backgroundColor}`,
      };
    },
    colorTitle() {
      return {
        color: `${this.colorTitle}`,
      };
    },
    colorText() {
      return {
        color: `${this.colorText}`,
      };
    },
  },
};
</script>

<template>
  <div class="card" :style="grandezzaCard">
    <img :src="icon" class="svg-icon" alt="Icon" />
    <div class="content">
      <h3 :style="colorTitle">{{ title }}</h3>
      <p :style="colorText">{{ description }}</p>
    </div>
    <div class="contArrow"></div>
    <font-awesome-icon class="arrow" :icon="['fas', 'arrow-right']" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  // background-color: #19191f;
  border-radius: 8px;
  padding: 30px;
  // width: calc((100% / 2) - 20px);
  position: relative;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  // gap: 10px;
  &:hover {
    cursor: pointer;
    animation: upper 0.5s;
    animation-fill-mode: forwards;
  }
  &:hover .contArrow {
    animation: radarWave 1s ease-in-out infinite;
  }

  @keyframes radarWave {
    0% {
      border: 1px solid #00a6a6;
      background-color: #00a6a6;
      transform: scale(1);
      opacity: 1;
    }
    100% {
      border: 1px solid #00a6a6;
      background-color: #00a6a6;
      transform: scale(10);
      opacity: 0;
    }
  }
  @keyframes upper {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-10px);
    }
  }
}

.svg-icon {
  width: 50px;
  height: auto;
}

.content {
  flex-grow: 1;
}

h3 {
  margin: 0;
  // color: #fff;
  // font-family: Inter, sans-serif;
  line-height: 1.2;
  margin: 1.5rem 0;
  word-wrap: break-word;
  font-size: 1.5rem;
}

p {
  color: #ccc;
}

.arrow {
  position: absolute;

  top: 25px;
  right: 43px;
  width: 21px;
  height: 21px;
  font-size: 1.5rem;
  color: #00a6a6;
  // background-color: blue;

  border-radius: 50%;
}
.contArrow {
  position: absolute;
  top: 32px;
  right: 53px;

  height: 4px;
  width: 4px;
  font-size: 1.5rem;
  color: #00a6a6;
  // background-color: blue;

  // padding: 20px;
  border-radius: 50%;
}
</style>


