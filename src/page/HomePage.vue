<script >
import JamboPart from "./HomaPageSection/JamboPart.vue";
import SectionCard from "./HomaPageSection/SectionCard.vue";
import SecondSection from "./HomaPageSection/SecondSection.vue";
import ActionProject from "./HomaPageSection/ActionProject.vue";
import BannerSection from "./HomaPageSection/BannerSection.vue";
import FormSection from "./HomaPageSection/FormSection.vue";
export default {
  name: "HomePage",
  components: {
    JamboPart,
    SectionCard,
    SecondSection,
    ActionProject,
    BannerSection,
    FormSection,
  },
};
</script>

<template>
  <JamboPart />
  <SectionCard />
  <SecondSection />
  <ActionProject />
  <BannerSection />
  <FormSection />
</template>

<style lang="scss" scoped>
@use "../style/partials/variable.scss" as *;
@use "../style/partials/mixin.scss" as *;
@use "../style/general.scss" as *;
</style>