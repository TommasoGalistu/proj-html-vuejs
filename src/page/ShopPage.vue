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
    };
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
      <div class="contenitoreCards">
        <ArticlesCards
        v-for="(vestito, index) in vestiti"
        :key="index"
        :elemento="vestito"/>
      </div>
      
    </section>
    <section class="prices">
      <h3>Filter by price</h3>
      <Slider/>
      <div class="spaced"></div>
      <div class="contOnSale">
        <ForSale v-for="(vestito, index) in vestiti"
        :key="index"
        :elemento="vestito"/>
      </div>
      <div class="contFolders">
      <a href="">
        <font-awesome-icon icon="fa-regular fa-folder"/>
        <h4>Clothing (8)</h4> 
        <br>
        <h4 class="moved">Hoodies (6)</h4>  
        <br>
        <h4 class="moved">Tshirts (2)</h4> 
        <br>
        <h4>Decor (2)</h4> 
        <br>
      </a>
      </div>
      <div class="productTags">
        <h2>Product Tags</h2>
        <div class="manyTags">
          <div class="col1">
            <button>Black</button>
            <button>Blue</button>
            <button>Brown</button>
            <button>Gray</button>
            <button>House</button>
          </div>
          <div class="col2">
            <button>Long Sleeve</button>
            <button>Ninja</button>
            <button>Red</button>
            <button>Shirt</button>
          </div>
          
          <div class="col3">
            <button>Skull</button>
            <button>White</button>
            <button>With Hood</button>
            <button>With print</button>
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

.spaced{
  margin: 100px;
}

button{
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

button:hover{
  background-color: aqua;
}

.productTags{
  width: 100%;
  height: 190px;
  
}

.manyTags{
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
}

.col1,.col2,.col3{
  height: 33%;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
}



.productTags h2{
  color: black;
  margin-bottom: 15px;
}

.moved{
  padding-left: 20px;
}

.fa-folder{
  background-color: blue;
  font-size: 30px;
}

.contOnSale{
  width: 100%;
  height: 600px;
}

.contFolders{
  width: 100%;
  height: 180px;
 
}

.contFolders h4{
  font-size: 20px;
  background-color: white;
}

.productCategories{
  width: 100%;
  height: 300px;
 
}

.contenitoreCards{
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