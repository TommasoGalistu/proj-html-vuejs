<script>
import { store } from "../../store";
export default {
  name: "CardActionProj",
  data() {
    return {};
  },
  props: {
    dettagli: String,
    tempo: String,
    titolo: String,
    text: String,
    path: String,
  },
};
</script>

<template>
  <div class="card">
    <div class="contText">
      <!-- testo in cima -->
      <div class="upPart nascondi up visibility">
        <div>
          <font-awesome-icon :icon="['far', 'user']" />
          <span>{{ dettagli }}</span>
        </div>
        <div>
          <font-awesome-icon :icon="['far', 'clock']" />
          <span>{{ tempo }}</span>
        </div>
      </div>
      <!-- testo sotto -->
      <div class="bottomPart nascondi bottom">
        <h2>{{ titolo }}</h2>
        <p class="visibility">
          {{ text }}
        </p>
      </div>
    </div>
    <!-- immagine di sfondo -->
    <div class="contImg">
      <img :src="path" alt="" />
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
  &:hover .contText {
    filter: blur(100%);
  }
  &:hover .nascondi.up {
    animation: up 0.5s ease-out;
    animation-fill-mode: forwards;
  }
  &:hover .nascondi.bottom {
    animation: bottom 0.5s ease-out;
    animation-fill-mode: forwards;
  }
  &:hover .visibility {
    visibility: visible;
    opacity: 1;
    transition: opacity 1s ease-out, visibility 1s ease-out;
  }
  @keyframes up {
    0% {
      top: -27px;
      left: 50%;
      transform: translate(-50%);
    }
    100% {
      top: 30px;
      left: 50%;
      transform: translate(-50%);
    }
  }
  @keyframes bottom {
    0% {
      bottom: -26px;
      left: 50%;
      transform: translate(-50%);
    }
    100% {
      width: 80%;
      bottom: 30px;
      left: 50%;
      transform: translate(-50%);
    }
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
      span {
        padding-left: 0.3rem;
      }
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
  position: absolute;
}
.nascondi.up {
  top: -27px;
  left: 50%;
  transform: translate(-50%);
}
.nascondi.bottom {
  width: 80%;
  bottom: -26px;
  left: 50%;
  transform: translate(-50%);
}
.visibility {
  visibility: hidden;
  opacity: 0;
}
</style>