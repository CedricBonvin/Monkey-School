<template>
    <div class="topBar">
        <router-link to="/"> <div class="logo">Monkey-school</div></router-link>
       
       
        <div class="itemRight">
            <router-link class="panier" to="/panier"><i class="fas fa-shopping-cart iconePanier"></i></router-link>
            <topbar-menu></topbar-menu>
        </div>
       
    </div>
</template>

<script>
import topbarMenu from './topbarMenu.vue'
export default {
  components: { topbarMenu },
    
    name: "topbar",
    props : [],
    data : () => {
        return {
           
        }
    },
    mounted()  {
        this.basketItem = JSON.parse(localStorage.getItem("basket"))                
    },
}
</script>


<style scoped>
    .topBar{
        position: fixed;
        z-index: 100;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        width: 100%;
        height: 50px;
        background-color: black;
        color: white;
    } 
    .logo{
        font-weight: bold;
    }
    .itemRight{
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
    .panier{
        margin-right: 30px;
    }
    .iconePanier{
        font-size: 25px;
        padding: 0;
        margin: 0;
    }
    a{
        color: white;
        padding: 0;
        margin: 0;
    }
 
</style>
