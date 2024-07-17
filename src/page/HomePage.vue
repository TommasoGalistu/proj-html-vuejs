<script >
import JamboPart from "./HomaPageSection/JamboPart.vue";
import SectionCard from "./HomaPageSection/SectionCard.vue";
import SecondSection from "./HomaPageSection/SecondSection.vue";
export default {
  name: "HomePage",
  components: {
    JamboPart,
    SectionCard,
    SecondSection,
  },
};
</script>

<template>
  <JamboPart />
  <SectionCard />
  <SecondSection />
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
</style>