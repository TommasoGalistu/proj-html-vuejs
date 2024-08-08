<script>
// import { store } from "../../store";

export default {
  name: "ForSale",
  props: {
    elemento: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="elemento.prezzoOriginale" class="onSale">
    <div class="leftSale">
      <div class="upPart">
        <h4>{{ elemento.nome }}</h4>
      </div>
      <div class="bottomPart">
        <span class="scontato"> ${{ elemento.prezzoOriginale }}.00</span>
        <span> ${{ elemento.prezzoAttuale }}.00</span>
      </div>
    </div>
    <div class="rightSale">
      <div class="containerOnSaleImg">
        <img v-bind:src="elemento.img" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/general.scss" as *;
.upPart {
  height: 20%;
}
.scontato {
  color: gray;
  text-decoration: line-through;
}

h4 {
  background-color: white;
  padding: 0 3px 0px 3px;
}

h4:hover {
  color: red;
  opacity: 0.7;
  cursor: pointer;
}

.leftSale {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.rightSale {
  width: 40%;
  height: 100%;
  display: flex;
}

.upPart {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.bottomPart {
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  background-color: white;
}

.onSale {
  height: 100px;
  width: 100%;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}

.containerOnSaleImg {
  height: 100%;
  width: 100%;
}

.containerOnSaleImg img {
  height: 100%;
  width: 100%;
}
</style>