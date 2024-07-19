<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  name: "MonthlyPlans",
};
</script>

<template>
  <section class="pricing-table">
    <div class="container">
      <h6 class="pre-title">MONTHLY PLANS</h6>
      <h2>Pricing Table</h2>
      <p>We can help you deliver and execute your future, wherever you compete, using the latest technologies, from strategy development to implementation.</p>

      <!-- card -->
      <div class="plans">
        <div class="plan">
          <div class="arrow">&rarr;</div>
          <div class="icon">
           <font-awesome-icon icon="bag-shopping" />
          </div>
          <h3>Standard</h3>
          <div class="price">$490 / mo</div>
          <ul>
            <li>Standard Accounting</li>
            <li>Platform Access</li>
            <li class="not-included">Business Orientation</li>
            <li class="not-included">Dedicated Consultant</li>
            <li class="not-included">Personal Assistance</li>
          </ul>
        </div>

        <!-- card -->
        <div class="plan">
          <div class="arrow">&rarr;</div>
          <div class="icon">
            <font-awesome-icon icon="bag-shopping" />
          </div>
          <h3>Professional</h3>
          <div class="price">$890 / mo</div>
          <ul>
            <li>Standard Accounting</li>
            <li>Platform Access</li>
            <li>Business Orientation</li>
            <li class="not-included">Dedicated Consultant</li>
            <li class="not-included">Personal Assistance</li>
          </ul>
        </div>

        <!-- card -->
        <div class="plan">
          <div class="arrow">&rarr;</div>
          <div class="icon">
            <font-awesome-icon icon="bag-shopping" />
          </div>
          <h3>Ultimate</h3>
          <div class="price">$1390 / mo</div>
          <ul>
            <li>Standard Accounting</li>
            <li>Platform Access</li>
            <li>Business Orientation</li>
            <li>Dedicated Consultant</li>
            <li>Personal Assistance</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use "src/style/general.scss" as *;
.container {
  padding: 20px;
  text-align: center;
}

.arrow {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #00a6a6;
}

.pre-title {
  font-weight: bold;
  color: #00a6a6;
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 20px;
  font-weight: 800;
  color: #21333E;
  font-family: Inter,sans-serif;
  font-size: 3rem;
  line-height: 1.2;
}


p {
  margin-bottom: 40px;
  color: #666;
}

.plans {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.plan {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  text-align: left;
  margin: 10px;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
}

.icon {
  background-color: #e6f9fa;
  border-radius: 50%;
  display: inline-block;
  padding: 15px;
  margin-bottom: 20px;
  text-align: center;
}

.icon img {
  width: 40px;
  height: 40px;
}

h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 1.5rem;
}

.price {
  font-family: Inter,sans-serif;
  margin-bottom: 20px;
  color: #00a6a6;
  font-size: 2rem;
  font-weight: 300;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #666;
}

ul li {
  margin-bottom: 10px;
  position: relative;
  padding-right: 25px; 
}

ul li::after {
  content: '✔';
  color: #00a6a6;
  position: absolute;
  right: 0;
}

ul li.not-included::after {
  content: '✘';
  color: #00a6a6;
}

</style>