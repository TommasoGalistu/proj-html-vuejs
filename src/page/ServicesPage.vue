<script >

import Jumbotron from './serviceSection/Jumbotron.vue';
import ItemCard from './serviceSection/ItemCard.vue';
import BusinessAreas from './serviceSection/BusinessAreas.vue';
import MonthlyPlans from './serviceSection/MonthlyPlans.vue';

export default {
  name: "ServicesPage",
  components: {
    Jumbotron,
    ItemCard,
    BusinessAreas,
    MonthlyPlans,
  }
};
</script>

<template>
  <h1>Services Page</h1>
  <Jumbotron/>
  <ItemCard />
  <BusinessAreas />
  <MonthlyPlans/>
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
</style>