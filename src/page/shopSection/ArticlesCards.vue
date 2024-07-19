<script>
import { store } from "../../store";

export default {
  name: "ArticlesCards",
  data() {
    return {
        store,
        vestiti : store.clothes,
    };
  }
};



</script>

<template>

    <a v-for="(vestito,index) in vestiti" :key="index" href="#"><div class="ShopCards">
        <div class="upper-img">
            <div v-if="vestito.prezzoOriginale" class="sale">
                
            </div>
            <img v-bind:src="vestito.img" alt="">
        </div>

        <div class="lower-price">
                <h2> {{ vestito.nome }} </h2>
            <div class="scritte-container">
                <span class="scontato">{{ vestito.prezzoOriginale }}</span><span class="attuale">{{ vestito.prezzoAttuale }}</span>
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
        background-color: yellow;
        border-radius: 10px;
    }

.upper-img {
  height: 70%;
  width: 100%;
}

    .lower-price h2{
        padding-top: 20px;
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

    .scritte-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

    }

    .scritte-container span{
        font-size: 22px;
    }
    
    .sale{
        
        width: 60px;
        height: 30px;
        position: absolute;
        background-color: aqua;
        border-top-right-radius: 8px;
        border-bottom-right-radius:8px;
        margin-top: 30px;
        display: flex;
        flex-direction: row;
    }

    
</style>