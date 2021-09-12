<template>
  <main>
    <Header 
        title="Nos cours"
        :image="require('@/assets/images/header-cours.jpg')"
    />

    <section-recherche /> 

    <div class="sectionRegulier section">
        <h2 class="titleSection">Cours réguliers : <span class="septMai">( Septembre à Mai )</span></h2>
        <div class="boxRegulier">
            <h4>Enfant :</h4>
            <carte-cours v-for="cours  in regulierEnfant" :key="cours.nom"
                :cours="cours"   
            />
            <hr>
            <h4 id="regulierAdulte">Adulte : </h4>
            <carte-cours v-for="cours  in regulierAdulte" :key="cours.nom"
                :cours="cours"
            />
        </div>
    </div>
  </main>
</template>

<script>
import Header from '../components/forAll/header.vue'
import CarteCours from '../components/pageCours/carteCours.vue'
import SectionRecherche from '../components/pageCours/sectionRecherche.vue'
let Bdd = require("../bdd")

export default {
  components: { Header, SectionRecherche, CarteCours },
  data(){
    return{
      regulierEnfant : Bdd.bddCours.regulierEnfant,
      regulierAdulte : Bdd.bddCours.regulierAdulte,
    }
  },
 


}

  
</script>

<style scoped>

    .septMai{
        font-style: italic;
        font-size: 14px;
    }
    hr{
      margin: 20px 20%;
    }
    h4{
        display: inline-block;
        position: relative;
        color: gray;
        text-align: left;
        font-size: 10vmin;
        margin-left: 20px;
    
        padding: 0;
    }
    h4:before{
        content: "";
        position: absolute;
        bottom: 0 ;
        width: 50%;
        border: solid 2px var(--color-secondary);
    }

</style>