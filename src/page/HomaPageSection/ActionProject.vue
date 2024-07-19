<script>
import CardActionProj from "./CardActionProj.vue";
import { store } from "../../store";
export default {
  name: "ActionProject",
  data() {
    return {
      store,
    };
  },
  components: {
    CardActionProj,
  },
  methods: {
    activeMenu(valore) {
      let array = store.menu;
      let elementoCliccato = store.menu[valore];
      array.forEach((element) => {
        element.active = false;
      });
      elementoCliccato.active = true;
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>Action & Project</h2>
    <div class="contMenu">
      <ul>
        <li
          v-for="(voceMenu, index) in store.menu"
          :key="index"
          @click="activeMenu(index)"
          :class="{ active: voceMenu.active }"
        >
          {{ voceMenu.titolo.toUpperCase() }}
        </li>
      </ul>
    </div>
    <div class="contCard">
      <CardActionProj />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;

.container {
  text-align: center;
  padding: 4rem 0;
  h2 {
    font-size: 3rem;
  }
  .contMenu {
    padding: 2rem 0;
    padding-bottom: 3rem;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      li {
        border-radius: 10px;
        padding: 0.5rem 1rem;
        &:hover {
          cursor: pointer;
          background-color: $colorStyleJamboHover;
        }
      }
      li.active {
        color: white;
        background-color: $colorStyleJambo;
      }
    }
  }
  .contCard {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
}
</style>