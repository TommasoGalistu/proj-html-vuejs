<script >
import ArticlesCards from "./shopSection/ArticlesCards.vue";
import ArticlesSorting from "./shopSection/ArticlesSorting.vue";
import Slider from "./shopSection/Slider.vue";
import { store } from "../store";
import ForSale from "./shopSection/ForSale.vue";

export default {
  name: "ShopPage",
  methods: {},
  components: {
    ArticlesCards,
    ArticlesSorting,
    Slider,
    ForSale,
  },
  data() {
    return {
      store,
      vestiti: store.clothes,
      comparazione: "",
    };
  },
  methods: {
    filterCapi(titoloValore) {
      this.comparazione = titoloValore.toLowerCase();
    },
    filterClothes(valore) {
      this.comparazione = valore.toLowerCase();
    },
  },
  computed: {
    // dati di contenitore uno
    dataFilter() {
      console.log(this.store.selectionValue);
      if (
        !this.store.selectionValue ||
        this.store.selectionValue === "menu_order"
      ) {
        return this.vestiti.filter((vestito) => {
          if (!this.comparazione) {
            return vestito && vestito.id < 10;
          } else {
            return vestito.type.includes(this.comparazione);
          }
        });
      } else {
        switch (this.store.selectionValue) {
          case "popularity":
            return this.store.clothes.sort((a, b) => {
              return a.rating - b.rating;
            });
          case "date":
            return this.store.clothes.sort((a, b) => {
              return a.date - b.date;
            });
          case "price":
            return this.store.clothes.sort((a, b) => {
              return a.prezzoAttuale - b.prezzoAttuale;
            });
          case "price-reverse":
            return this.store.clothes.sort((a, b) => {
              return b.prezzoAttuale - a.prezzoAttuale;
            });
          case "rating":
            return this.store.clothes.sort((a, b) => {
              return a.rating - b.rating;
            });
        }
      }
    },
    // data contenitore 2
    // dataFilter() {
    //   console.log(this.store.selectionValue);
    //   if (
    //     !this.store.selectionValue ||
    //     this.store.selectionValue === "menu_order"
    //   ) {
    //     return this.vestiti.filter((vestito) => {
    //       if (!this.comparazione) {
    //         return vestito && vestito.id > 10;
    //       } else {
    //         return vestito.type.includes(this.comparazione);
    //       }
    //     });
    //   } else {
    //     switch (this.store.selectionValue) {
    //       case "popularity":
    //         return this.store.clothes.sort((a, b) => {
    //           return a.rating - b.rating;
    //         });
    //       case "date":
    //         return this.store.clothes.sort((a, b) => {
    //           return a.date - b.date;
    //         });
    //       case "price":
    //         return this.store.clothes.sort((a, b) => {
    //           return a.prezzoAttuale - b.prezzoAttuale;
    //         });
    //       case "price-reverse":
    //         return this.store.clothes.sort((a, b) => {
    //           return b.prezzoAttuale - a.prezzoAttuale;
    //         });
    //       case "rating":
    //         return this.store.clothes.sort((a, b) => {
    //           return a.rating - b.rating;
    //         });
    //     }
    //   }
    // },
    vestitiScontati() {
      return this.vestiti.filter((vestito) => {
        return vestito.prezzoOriginale;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <section class="articles">
      <div class="results">
        <span
          ><font-awesome-icon icon="fa-solid fa-bars" /> Showing N-N of N
          results
        </span>
        <ArticlesSorting />
      </div>
      <!-- mettere un contenitore e modificare css -->
      <div class="contenitoreCards uno">
        <ArticlesCards
          v-for="(vestito, index) in dataFilter"
          :key="index"
          :elemento="vestito"
        />
      </div>
      <div class="contenitoreCards due"></div>
    </section>
    <section class="prices">
      <h3>Filter by price</h3>
      <Slider />
      <div class="spaced"></div>
      <div class="contOnSale">
        <ForSale
          v-for="(vestito, index) in vestitiScontati"
          :key="index"
          :elemento="vestito"
        />
      </div>
      <div class="contFolders">
        <font-awesome-icon :icon="['fas', 'folder']" />
        <div v-for="(titolo, index) in store.typeClothes" :key="index">
          <h4 @click="filterCapi(titolo)" class="tButton">{{ titolo }}(8)</h4>
          <br />
        </div>
      </div>
      <div class="productTags">
        <h2>Product Tags</h2>
        <div class="manyTags">
          <div class="col1">
            <button
              @click="filterClothes(button)"
              v-for="(button, index) in store.colorClothes"
              :key="index"
            >
              {{ button }}
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

.spaced {
  margin: 100px;
}
.tbutton {
  cursor: pointer;
}
button {
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

button:hover {
  background-color: aqua;
  cursor: pointer;
}

.productTags {
  width: 100%;
  height: 190px;
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
  background-color: blue;
  font-size: 30px;
}

.contOnSale {
  width: 100%;
  height: 600px;
}

.contFolders {
  width: 100%;
  height: 180px;
}

.contFolders h4 {
  font-size: 20px;
  background-color: white;
}

.productCategories {
  width: 100%;
  height: 300px;
}

.contenitoreCards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.container {
  background-color: white;
  height: 210vh;
  display: flex;
  flex-direction: row;
}

section {
  height: 90%;
  margin-top: 200px;
}

.articles {
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.results {
  width: 100%;
  height: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.results span {
  font-size: 20px;
}

.prices {
  width: 30%;
}
</style>