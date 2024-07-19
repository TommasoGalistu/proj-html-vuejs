<script >
import ArticlesCards from "./shopSection/ArticlesCards.vue";
import ArticlesSorting from "./shopSection/ArticlesSorting.vue";
import Slider from "./shopSection/Slider.vue";
import {store} from "../store";




export default {
  name: "ShopPage",
  methods: {
        
  },
  components :{
    ArticlesCards,
    ArticlesSorting,
    Slider,
  },
  data() {
    return {
        store,
        vestiti : store.clothes,
    };
}};


</script>

<template>
  
  <div class="container">
    
    <section class="articles">
      <div class="results">
        
        <span><font-awesome-icon icon="fa-solid fa-bars" /> Showing N-N of N results </span>
        <ArticlesSorting v-for="(vestito,index) in vestiti" :key="index" :elemento="vestito" />
      </div>
      <ArticlesCards/>
    </section>
    <section class="prices">
      <h3>Filter by price</h3>
      <Slider/>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;


.container{
  background-color: white;
  height: 300vh;
  display: flex;
  flex-direction: row;
  
}

section{
  height: 90%;
  margin-top: 200px;
}

.articles{
  width: 70%;
  background-color: red;
  display: flex;
  flex-direction: column;
}

.results{
  width: 100%;
  height: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.results span{
  font-size: 20px;
}

.prices{
  width: 30%;
  background-color: green;
}

.sliderContainer{
  width: 80%;
}
.range-slider {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
  height: 6em;
}

.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type=number] {
  border: 1px solid #ddd;
  text-align: center;
  font-size: 1.6em;
  -moz-appearance: textfield;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
  border: 2px solid #ff6347;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497e3;
}

input[type=range]:focus::-ms-fill-lower {
  background: #2497e3;
}

input[type=range]:focus::-ms-fill-upper {
  background: #2497e3;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: #2497e3;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #2497e3;
  height: 18px;
} 
</style>