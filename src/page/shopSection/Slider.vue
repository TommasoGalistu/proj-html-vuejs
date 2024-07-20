<script>
  export default{
    name: "Slider",
  }


</script>


<template>
  
  <div class="priceRangeContainer">
    <span>Da</span><input type="text" placeholder="$20" maxlength="3" min="20" pattern="[20-140]">
    <span id="secondo">A</span><input type="text" placeholder="$150" maxlength="3" max="150" pattern="[30-150]">
    <button>Filter</button>
  </div>
  

</template>

<style lang="scss" scoped>

  button{
    height: 40px;
    width: 60px;
    margin-left: 20px;
    font-size: 20px;
    background-color: #058283;
    border-radius: 5px;
  }

  .priceRangeContainer{
    
    padding-top: 20px;
  }
  
  input{
    width: 50px;
    height: 25px;
    
  }

  #secondo{
    padding-left: 10px;
  }
  span{
    padding-right: 10px;
    font-size: 20px;
    
  }
</style>
