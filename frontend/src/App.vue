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
  beforeMount(){
    if(window.location.protocol === "http:" || window.location.href === "https://www.monkey-school.ch/"){
				window.location.href=`${this.$store.state.HOST}`
			}
    const itemPanierLocal = JSON.parse(localStorage.getItem("panier"))
    if (itemPanierLocal){
      this.$store.state.nbrItemPanier = itemPanierLocal.length
    } else this.$store.state.nbrItemPanier  = 0

  }
}
</script>

<style scoped>
 
</style>


