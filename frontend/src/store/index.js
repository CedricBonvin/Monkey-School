import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nbrItemPanier : 0,
  //  HOST : "http://localhost:8000",
    HOST : "https://monkey-school.herokuapp.com"
  },
  mutations: {
    checkPanier(state){
      const local =JSON.parse(localStorage.getItem("panier")) 
      if (local && local.length > 0){
        state.nbrItemPanier = local.length
      } else state.nbrItemPanier = 0
    },
    

  },
  actions: {
  },
  modules: {
  }
})
