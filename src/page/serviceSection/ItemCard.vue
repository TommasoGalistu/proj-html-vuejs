<script>
export default {
  name: "ItemCard",
};
</script>

<template>
  <!-- Sezione dei Servizi -->
  <section class="services">
    <div class="container">
      <!-- card human capital -->
      <div class="service-card">
        <div class="icon"><i class="fa-solid fa-user-group"></i></div>
        <h2>Human Capital</h2>
        <p>
          Humanizing business: Harness the power of technology to improve the
          way people work.
        </p>
      </div>

      <!-- card core business -->
      <div class="service-card">
        <div class="icon"><i class="fa-solid fa-chart-pie"></i></div>
        <h2>Core Business</h2>
        <p>
          It takes innovative approaches to transform, modernize, and run
          existing platforms.
        </p>
      </div>

      <!-- card performance -->
      <div class="service-card">
        <div class="icon"><i class="fa-solid fa-gauge-high"></i></div>
        <h2>Performance</h2>
        <p>
          Achieving maximum impact and value from investments in finance and
          supply chains.
        </p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use "src/style/general.scss" as *;

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services {
  background-color: #eef4ed;
  padding: 2rem 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  height: 400px;
}
.service-card {
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 10px;
  flex: 1;

  .icon {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
    margin-bottom: 1rem;
    border-radius: 50%;
    background-color: #d9f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    transform: translateY(-5px);
  }

  .fa-solid,
  .fas {
    color: #158a8b;
  }
}
</style>