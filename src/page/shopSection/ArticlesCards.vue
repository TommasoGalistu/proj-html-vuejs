<script>

// importo store, store.clothes.length

export default {
  name: "ArticlesCards",
  props: {
    elemento: {
      type: Object,
      required: true,
    },
  },
  
};
</script>

<template>

    <a href="#"><div class="ShopCards">
        <div class="upper-img">
            <div v-if="elemento.prezzoOriginale" class="sale">
                <p>SALE!</p>
            </div>
            <img v-bind:src="elemento.img" alt="">
        </div>

        <div class="lower-price">
            <h2> {{ elemento.nome }} </h2>
            <div class="scritte-container">
                <span class="scontato">{{ elemento.prezzoOriginale }}</span><span class="attuale">{{ elemento.prezzoAttuale }}</span>
                <a href="#"><font-awesome-icon icon="bag-shopping"/></a>
            </div>

        </div>
    </div></a>

</template>

<style lang="scss" scoped>
    @use "src/style/general.scss" as *;

    

    a{
        text-decoration: none;
    }
    .fa-bag-shopping{
        font-size: 25px;
        color: rgb(255, 255, 255);
        
        background-color: rgb(75, 159, 155);
        padding: 8px;
        border-radius: 50%;
    }
    .ShopCards{
        height: 380px;
        width: 280px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid black;
        
    }

.upper-img {
  height: 70%;
  width: 100%;
}

    .lower-price h2{
        padding-top: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis ;
    }
    .upper-img img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }

    .lower-price{
        height: 30%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .lower-price h2{
        font-size: 20px;
    }

    .scritte-container{
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .scritte-container span{
        font-size: 19px;
    }
    
    .sale{
        
        width: 60px;
        height: 30px;
        position: absolute;
        background-color: #058283;
        border-top-right-radius: 8px;
        border-bottom-right-radius:8px;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
    }

    .sale p{
        padding-top: 5px;
        color: white;
        padding-left: 5px;
    }

    .scontato{
        color: gray;
        text-decoration: line-through;
        
    }

    

    
    

</style>