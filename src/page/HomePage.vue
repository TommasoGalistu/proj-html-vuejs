<script >
import JamboPart from "./HomaPageSection/JamboPart.vue";
import SectionCard from "./HomaPageSection/SectionCard.vue";
export default {
  name: "HomePage",
  components: {
    JamboPart,
    SectionCard,
  },
};
</script>

<template>
  <JamboPart />
  <SectionCard />
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
</style>