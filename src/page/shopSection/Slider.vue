<script>
    import MultiRangeSlider from "../../../node_modules/multi-range-slider-vue";

    export default{
        name: "Slider",
        components: {
            MultiRangeSlider
        },
        methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    }
  },
        data() {
    return {
      barMinValue: 20,
      barMaxValue: 150
    };
  },

    }
</script>

<template>
    <MultiRangeSlider
    :baseClassName="multi-range-slider-bar-only"
    :min="0"
    :max="100"
    :step="10"
    :ruler="true"
    :label="true"
    :minValue="barMinValue"
    :maxValue="barMaxValue"
    @input="UpdateValues"
  />
</template>

<style lang="scss" scoped>
    @use "/src/style/general.scss" as *;


</style>