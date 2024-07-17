<script>
export default {
  name: "SectionCard",
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
        <div class="button">SEE ALL</div>
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
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    p {
      flex: 0 0 80%;
      font-size: 1.5rem;
    }
  }
}
</style>