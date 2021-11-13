<template>
  <main>
    <Header 
        title="Nos cours"
        :image="require('@/assets/images/header-cours.jpg')"
    />
    <!-- RECHERCHE -->
    <section-recherche />   

   <!-- REGULIER -->
    <!-- enfant  -->
  <div class="section" id="regulierEnfant">
        <h2 class="titleSection">Régulier Enfant</h2>
        <p class="phraseType">Cours régulier pour les jeunes et les enfants .!</p>
        <div class="sectionCard">
            <carte-cours :cours="miniSpider" />
            <carte-cours :cours="gecko" />
            <carte-cours :cours="monkey" />
        </div>
    </div> 

    <!-- Adulte -->
    <div class="section" id="regulierAdulte">
        <h2 class="titleSection">Régulier Adulte</h2>
        <p class="phraseType">Cours régulier pour les adultes.!</p>
         <carte-cours :cours="superMonkey" /> 
    </div> 

    <!-- PRIVEE -->
    <div class="section" id="privee">
        <h2 class="titleSection">Cours Privé</h2>
        <p class="phraseType">Pour ce qu'ils veulent apprendre à leur rythme.!</p>
        <carte-cours :cours="privee" />
    </div>

    <!-- NOEL -->
    <div class="section" id="noel">
        <h2 class="titleSection">Noël</h2>
        <p class="phraseType">Après le ski, venez grimper 3 heures en toutes sécurités avec un professionnel de l'escalade... </p>
        <carte-cours :cours="noel" />
    </div> 
  </main>
</template>

<script>
  import Header from '../components/forAll/header.vue'
 import CarteCours from '../components/pageCours/carteCours.vue'
 import SectionRecherche from '../components/pageCours/sectionRecherche.vue'
 const BDDimport = require("../bdd")
 const BDD = BDDimport.bddCours

export default {
     components: { Header, SectionRecherche,CarteCours },
    data(){
        return{
            // initiation : Bdd.bddCours.initiation,
               miniSpider : BDD.miniSpider,
               gecko : BDD.gecko,
               monkey : BDD.monkey,
               superMonkey : BDD.superMonkey,
               privee : BDD.privee,
               noel : BDD.noel,
        }
    },
    methods : {
    }, 
    mounted(){
        document.title = "Cours"
    }
    
}

  
</script>

<style scoped>
    .section{
        padding: 20px 0;
        background: rgb(241, 241, 241);
    }
    .sectionCard{
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
    }
    .phraseType{
        font-size: 25px;
        margin-left: 5vw;
        margin-bottom: 50px;
        font-style: italic;
    }
</style>