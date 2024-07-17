<script>
export default {
  name: "MonthlyPlans",
};
</script>

<template>
  <section>
    <div class="container-title">
        <h6>MONTHLY PLANS</h6>
        <H2>Pricing Table</H2>
        <p>We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation</p>
    </div>
    <div class="container flex">
      <div class="card">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </div>
        <h3>Standard</h3>
        <p class="price">$490</p>
        <ul class="features">
          <li>Standard Account</li>
          <li>Platform Access</li>
          <li>Business Orientation</li>
          <li>Dedicated Consultant</li>
          <li>Personal Assistance</li>
        </ul>
      </div>
      <div class="card">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </div>
        <h3>Professional</h3>
        <p class="price">$890</p>
        <ul class="features">
          <li>Standard Account</li>
          <li>Platform Access</li>
          <li>Business Orientation</li>
          <li>Dedicated Consultant</li>
          <li>Personal Assistance</li>
        </ul>
      </div>
      <div class="card">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'chart-simple']" />
        </div>
        <h3>Ultimate</h3>
        <p class="price">$1390</p>
        <ul class="features">
          <li>Standard Account</li>
          <li>Platform Access</li>
          <li>Business Orientation</li>
          <li>Dedicated Consultant</li>
          <li>Personal Assistance</li>
        </ul>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use "src/style/general.scss" as *;
.container{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  
}
.container-title{
    text-align: center;
    padding: 4rem;
}
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.icon {
  font-size: 2em;
  color: #00a6a6;
  margin-bottom: 10px;
}

h3 {
  margin: 10px 0;
  font-size: 1.5em;
  color: #333;
}

.price {
  font-size: 1.2em;
  color: #00a6a6;
  margin: 10px 0;
}

.features {
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
  text-align: left;
}

.features li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
  color: #555;
}

.features li:last-child {
  border-bottom: none;
}

section{
    background-color: #eef4ed;
}
</style>