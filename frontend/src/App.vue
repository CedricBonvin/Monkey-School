<template>
  <div id="app">
    <Topbar />
    <router-view/>
    <Footer />
  </div>
</template>


<script>
import Footer from './components/template/footer.vue'
import Topbar from './components/template/topbar.vue'
export default {
  name: "app",
  components : {Topbar, Footer},
  mounted(){
    const itemPanierLocal = JSON.parse(localStorage.getItem("panier"))
    if (itemPanierLocal){
      this.$store.state.nbrItemPanier = itemPanierLocal.length
    } else this.$store.state.nbrItemPanier  = 0

  }
}
</script>


