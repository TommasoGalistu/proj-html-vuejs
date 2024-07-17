<script>
export default {
  name: "BusinessAreas",
};
</script>

<template>
  <section class="services">
    <div class="container">
      <h6 class="pre-title">OUR BUSINESS AREAS</h6>
      <h2>Excellence in Services</h2>
      <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>

      <!-- card -->
      <div class="cards">
        <div class="card">
          <div class="icon">📊</div>
          <div class="content">
            <h3>Audit & Assurance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="arrow">&rarr;</div>
        </div>

        <!-- card -->
        <div class="card">
          <div class="icon">📊</div>
          <div class="content">
            <h3>Financial Advisory</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="arrow">&rarr;</div>
        </div>

        <!-- card -->
        <div class="card">
          <div class="icon">📊</div>
          <div class="content">
            <h3>Analytics and M&A</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="arrow">&rarr;</div>
        </div>

        <!-- card -->
        <div class="card">
          <div class="icon">📊</div>
          <div class="content">
            <h3>Middle Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="arrow">&rarr;</div>
        </div>

        <!-- card -->
        <div class="card">
          <div class="icon">📊</div>
          <div class="content">
            <h3>Legal Consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="arrow">&rarr;</div>
        </div>

        <!-- card -->
        <div class="card">
          <div class="icon">📊</div>
          <div class="content">
            <h3>Regulatory Risk</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="arrow">&rarr;</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/style/general.scss" as *;

body {
  font-family: Arial, sans-serif;
  background-color: #1a1a1a;
  color: #fff;
  margin: 0;
  padding: 0;
}

.services{
  background-color: #111117;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

.pre-title {
  font-weight: bold;
  color: #00a6a6;
  margin-bottom: 10px;
}

h2 {
  margin-bottom: 20px;
  color: #fff;
  font-family: Inter,sans-serif;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.2;
}

p {
  margin-bottom: 40px;
  color: #ccc;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.card {
  background-color: #19191f;
  border-radius: 8px;
  padding: 20px;
  width: calc(50% - 20px);
  position: relative; 
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.icon {
  font-size: 2rem;
  color: #00a6a6;
}

.content {
  flex-grow: 1;
}

h3 {
  margin: 0;
  color: #fff;
  font-family: Inter,sans-serif;
  line-height: 1.2;
  margin: 1.5rem 0;
  word-wrap: break-word
}

p {
  color: #ccc;
}

.arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  color: #00a6a6;
}

</style>