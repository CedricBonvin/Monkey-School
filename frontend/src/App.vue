<template>
  <div id="app">
    <topbar />
    <router-view/>
  </div>
</template>


<script>
import Topbar from './components/topbar.vue'
export default {
  name: "app",
  components : {Topbar}
}
</script>


