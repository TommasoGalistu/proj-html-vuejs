<script>
export default {
  name: "BusinessAreas",
};
</script>

<template>
  <section>
    <div class="container">
        <div class="container title">
            <h6 class="pre-title">
                OUR BUSINESS AREAS
            </h6>
             <h2>Excellence in Services</h2>
            <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>
        </div>
           
        
        <div class="business-areas">
          <div class="business-area">
            <div class="icon"><i class="fa-solid fa-chart-simple"></i></div>
            <h3>Audit & Assurance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="business-area">
            <div class="icon"><i class="fa-solid fa-chart-simple"></i></div>
            <h3>Financial Advisory</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="business-area">
            <div class="icon"><i class="fa-solid fa-chart-simple"></i></div>
            <h3>Analytics and M&A</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="business-area">
            <div class="icon"><i class="fa-solid fa-chart-simple"></i></div>
            <h3>Middle Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="business-area">
            <div class="icon"><i class="fa-solid fa-chart-simple"></i></div>
            <h3>Legal Consulting</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
          <div class="business-area">
            <div class="icon"><i class="fa-solid fa-chart-simple"></i></div>
            <h3>Regulatory Risk</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia.</p>
          </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "src/style/general.scss" as *;

.container  .title {
  text-align: center;
  padding: 2rem;
  color: #fff;
  
}

.business-areas {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; 
}

.business-area {
  background-color: #19191f;
  color: #fff;
  padding: 20px;
  border-radius: 4px 4px 4px 4px;
  transition: transform 0.3s, background-color 0.3s;
  flex: 0 1 calc(50% - 20px); 

  &:hover {
    transform: translateY(-5px);
    background-color: #1e1e24;
  }

  .icon {
    font-size: 2em;
    margin-bottom: 10px;
    color: #58c4c6;
  }
}

h2, h3 {
  margin: 0;
  padding: 0;
}

h2 {
  margin-bottom: 1rem;
}

section {
  background-color: #111117;
  padding: 3rem 0;
}

.pre-title{
    font-weight: 600;
    color: #00a6a6;
}

</style>