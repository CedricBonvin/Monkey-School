<template>
    <div class="topBar">
        <div class="logo">Monkey-school</div>
        <!-- menu -->
        <topbar-menu></topbar-menu>
       
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
 
</style>
