<script>
import { store } from "../../store";
export default {
  name: "CardActionProj",
  data() {
    return {
      card: store.cardHomePage,
    };
  },
};
</script>

<template>
  <div v-for="(element, index) in card" :key="index" class="card">
    <div class="contText">
      <div class="upPart">
        <div class="nascondi up">
          <font-awesome-icon :icon="['far', 'user']" />
          <span>{{ element.tipo }}</span>
        </div>
        <div class="nascondi up">
          <font-awesome-icon :icon="['far', 'clock']" />
          <span>{{ element.tempo }}</span>
        </div>
      </div>
      <div class="bottomPart">
        <h2>{{ element.titolo }}</h2>
        <p class="nascondi bottom">
          {{ element.text }}
        </p>
      </div>
    </div>
    <div class="contImg">
      <img :src="element.path" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;

.card {
  position: relative;
  height: 350px;
  width: 350px;
  background-color: grey;
  border-radius: 10px;
  color: rgb(180, 180, 180);
  &:hover .nascondi {
    display: block;
    animation: visible 10s linear 1;
  }
  @keyframes visible {
  }
  &:hover {
    cursor: pointer;
  }
  .contText {
    position: absolute;

    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba($color: black, $alpha: 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;

    .upPart {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
    .bottomPart {
      h2 {
        padding: 1rem 0;
        color: white;
      }
    }
  }
  .contImg {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    img {
      border-radius: 10px;
      height: 100%;
      width: 100%;
    }
  }
}
.nascondi {
  // position: absolute;
}
</style>