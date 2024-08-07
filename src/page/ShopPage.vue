<script >
import ArticlesCards from "./shopSection/ArticlesCards.vue";
import ArticlesSorting from "./shopSection/ArticlesSorting.vue";
// import Slider from "./shopSection/Slider.vue";
import { store } from "../store";
import ForSale from "./shopSection/ForSale.vue";

export default {
  name: "ShopPage",
  components: {
    ArticlesCards,
    ArticlesSorting,
    // Slider,
    ForSale,
  },
  data() {
    return {
      store,
      // dati nuovi filtrati
      vestiti: "",
      // filtro per type
      filtroType: "",
      // filtro per caratteristiche
      filtroCarat: "",
      // numero visibile all'utente
      sliderValue: 149,
      comparazione: "",
      paginaAttiva: true,
      counter: 0,
    };
  },

  methods: {
    primaPagina() {
      this.paginaAttiva = true;
    },
    secondaPagina() {
      this.paginaAttiva = false;
    },
    filterCapi(valore) {
      if (valore !== "All") {
        this.filtroType = valore;
      } else {
        this.filtroType = "";
      }
    },
    filterClothes(valore) {
      if (valore !== "All") {
        this.filtroCarat = valore;
      } else {
        this.filtroCarat = "";
      }
    },
  },

  mounted() {},
  computed: {
    // dati della prima pagina
    dataFilter() {
      // filtro per mettere in oridine i capi
      switch (this.store.selectionValue) {
        case "menu_order":
          this.vestiti = this.store.clothes;
          break;
        case "popularity":
          this.vestiti = this.store.clothes.sort((a, b) => {
            return b.popularity - a.popularity;
          });
          break;
        case "date":
          this.vestiti = this.store.clothes.sort((a, b) => {
            return a.date - b.date;
          });
          break;
        case "price":
          this.vestiti = this.store.clothes.sort((a, b) => {
            return a.prezzoAttuale - b.prezzoAttuale;
          });
          break;
        case "price-reverse":
          this.vestiti = this.store.clothes.sort((a, b) => {
            return b.prezzoAttuale - a.prezzoAttuale;
          });
          break;
        case "rating":
          this.vestiti = this.store.clothes.sort((a, b) => {
            return b.rating - a.rating;
          });
          break;
      }
      // se selezione il filtro del tipo di vestiario
      if (this.filtroType) {
        this.vestiti = this.store.clothes.filter((vestito) => {
          return vestito.type.includes(this.filtroType);
        });
      }
      // se seleziono caratteristiche aggiuntive
      if (this.filtroCarat) {
        this.vestiti = this.store.clothes.filter((vestito) => {
          return vestito.type.includes(this.filtroCarat);
        });
      }
      // se seleziono il filtro prezzo
      if (this.sliderValue < 149) {
        this.vestiti = this.store.clothes.filter((vestito) => {
          return vestito.prezzoAttuale <= this.sliderValue;
        });
      }
      // se sono nella prima pagina o nella seconda
      if (this.paginaAttiva) {
        this.vestiti = this.vestiti.filter((vestito, index) => {
          return index < 9;
        });
      } else {
        this.vestiti = this.vestiti.filter((vestito, index) => {
          return index > 8;
        });
      }
      this.counter = this.vestiti.length;
      return this.vestiti;
    },

    vestitiScontati() {
      return this.vestiti.filter((vestito) => {
        return vestito.prezzoOriginale;
      });
    },
  },
};
</script>

<template>
  <div class="blueBG"></div>
  <div class="container">
    <section class="articles">
      <div class="results">
        <span
          ><font-awesome-icon icon="fa-solid fa-bars" /> Showing
          {{ counter }} result{{ counter == 1 ? "" : "s" }}
        </span>
        <ArticlesSorting />
      </div>

      <div v-if="paginaAttiva" class="contenitoreCardsUno">
        <ArticlesCards
          v-for="(vestito, index) in dataFilter"
          :key="index"
          :elemento="vestito"
        />
      </div>
      <div v-else class="contenitoreCardsDue">
        <ArticlesCards
          v-for="(vestito, index) in dataFilter"
          :key="index"
          :elemento="vestito"
        />
      </div>
      <div class="numeroPagina">
        <button @click="primaPagina()" class="bottoniPagina">1</button>
        <button
          v-if="vestiti.length > 8"
          @click="secondaPagina()"
          class="bottoniPagina"
        >
          2
        </button>
      </div>
    </section>
    <section class="prices">
      <h3>Filter by price</h3>
      <input
        type="range"
        min="1"
        max="149"
        value="149"
        v-model="sliderValue"
      /><br />
      <strong>{{ sliderValue }} €</strong>
      <div class="spaced"></div>
      <div class="contOnSale">
        <ForSale
          v-for="(vestito, index) in vestitiScontati"
          :key="index"
          :elemento="vestito"
        />
      </div>
      <div class="contFolders">
        <div v-for="(titolo, index) in store.typeClothes" :key="index">
          <font-awesome-icon :icon="['fas', 'folder']" /><span
            @click="filterCapi(titolo)"
            class="tButton"
            >{{ titolo }}</span
          >
        </div>
      </div>
      <div class="productTags">
        <h2>Product Tags</h2>
        <div class="manyTags">
          <div class="col1">
            <button
              class="bottoniTag"
              @click="filterClothes(text)"
              v-for="(text, index) in store.colorClothes"
              :key="index"
            >
              {{ text }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;

.blueBG {
  background-color: #142b41;

  height: 135px;
  width: 100%;
  position: absolute;
  margin-bottom: 200px;
  margin-right: 200px;
}

.bottoniPagina {
  border: none;
  color: rgb(52, 52, 52);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  background-color: white;
}

.bottoniPagina:active {
  background-color: green;
}

.bottoniPagina:hover {
  color: red;
  background-color: none;
}

.spaced {
  margin: 50px;
}
.tbutton {
  cursor: pointer;
}
.bottoniTag {
  border: none;
  color: rgb(52, 52, 52);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  margin: 1px 2px rgb(188, 188, 188);
  cursor: pointer;
  background-color: rgb(188, 188, 188);
}

.bottoniTag:hover {
  background-color: aqua;
  cursor: pointer;
}

.productTags {
  width: 100%;
  // height: 190px;
}

.manyTags {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
}

.col1 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.productTags h2 {
  color: black;
  margin-bottom: 15px;
}

.moved {
  padding-left: 20px;
}

.fa-folder {
  color: #112b46;
  font-size: 30px;
  padding-right: 10px;
}

.contOnSale {
  width: 100%;
  height: 600px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.contFolders {
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contFolders span {
  font-size: 20px;
  background-color: white;
}

.contFolders span:hover {
  color: red;
  opacity: 0.7;
}

.productCategories {
  width: 100%;
  height: 300px;
}

.contenitoreCardsUno,
.contenitoreCardsDue {
  display: flex;
  flex-wrap: wrap;
  gap: $gapCardShop;
}

.contenitoreCardsUno:active {
  display: block;
}

.contenitoreCardsDue:active {
  display: block;
}

.container {
  background-color: white;
  gap: 2rem;
  display: flex;

  padding-bottom: 4rem;
}

section {
  height: 90%;
  margin-top: 200px;
}

.articles {
  width: 90%;
  padding-right: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.results {
  width: 100%;
  height: 3%;
  display: flex;
  justify-content: space-between;
}

.results span {
  font-size: 20px;
}

.prices {
  width: 30%;
}
</style>