<script>
export default {
  name: "CardActionProj",
};
</script>

<template>
  <div class="card">
    <div class="contText">
      <div class="upPart">
        <div>
          <font-awesome-icon :icon="['far', 'user']" />
          <span>Coding</span>
        </div>
        <div>
          <font-awesome-icon :icon="['far', 'clock']" />
          <span>3 Years</span>
        </div>
      </div>
      <div class="bottomPart">
        <h2>Portfolio e sti cazzi non so scrivo dopo</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate..
        </p>
      </div>
    </div>
    <div class="contImg">
      <img src="/public/avocado.jpg" alt="avocado" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/partials/variable.scss" as *;
@use "../../style/partials/mixin.scss" as *;
@use "../../style/general.scss" as *;

.card {
  position: relative;
  height: 300px;
  width: 300px;
  background-color: grey;
  border-radius: 10px;
  color: rgb(180, 180, 180);
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
</style>