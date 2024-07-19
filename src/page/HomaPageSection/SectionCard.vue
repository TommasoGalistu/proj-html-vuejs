<script>
import ServiceCard from "../serviceSection/ServiceCard.vue";
import { store } from "../../store";
export default {
  name: "SectionCard",
  data() {
    return {
      store,
    };
  },
  components: {
    ServiceCard,
  },
};
</script>

<template>
  <div class="sfondo">
    <div class="container">
      <h2>
        Excellence in
        <span class="evidenziata"
          >Services <span class="sottolineatura"></span
        ></span>
      </h2>
      <div class="contFlex">
        <p>
          We are leaders in providing consultancy services with a set of
          cutting-edge technologies and a team of experienced and renowned
          professionals. These are some otions that you can hire.
        </p>
        <div class="button"><span>SEE ALL</span></div>
      </div>
      <div class="contCard">
        <ServiceCard
          v-for="(element, index) in store.card"
          :key="index"
          :icon="element.icon"
          :title="element.title"
          :description="element.description"
          :dividendo="3"
          :gapTotale="20"
          :colorTitle="'black'"
          :colorText="'#949494'"
          :backgroundColor="'#ebecef'"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;

.sfondo {
  padding: 5rem 0;
  width: 100%;
  background-color: #e2e3e7;

  h2 {
    font-size: 3rem;
    .evidenziata {
      position: relative;
      color: #058283;
      .sottolineatura {
        height: 1rem;
        width: 4rem;
        background-color: #c0dade;
      }
    }
  }
  .contFlex {
    padding: 1.5rem 0;
    display: flex;
    gap: 2rem;
    justify-content: space-between;

    p {
      flex: 0 0 80%;
      font-size: 1.3rem;
    }
    .button {
      @include button-styles(0.5rem 1rem, 0.4rem 1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .contCard {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>