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
  components : {Topbar, Footer}
}
</script>


