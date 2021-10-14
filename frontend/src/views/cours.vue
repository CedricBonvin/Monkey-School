<template>
  <main>
    <Header 
        title="Nos cours"
        :image="require('@/assets/images/header-cours.jpg')"
    /> -->
    <!-- RECHERCHE -->
    <section-recherche />   

   <!-- REGULIER -->
    <!-- enfant -->
    <div class="section" id="regulierEnfant">
        <h2 class="titleSection">Régulier Enfant</h2>
        <p class="phraseType">Cours régulier pour les Jeunes et les enfants .!</p>
        <div class="sectionCard">
            <carte-cours 
                v-for="item in regulierEnfant" :key="item.nomCours"
                :cours="item"
            />
        </div>
    </div>
    <!-- Adulte -->
    <div class="section" id="regulierAdulte">
        <h2 class="titleSection">Régulier Adulte</h2>
        <p class="phraseType">Cours régulier pour Adultes.!</p>

        <div v-for="item in regulierAdulte" :key="item.nomCours">
            <carte-cours 
                :cours="item"
            />
        </div>
    </div>
    <!-- PRIVEE -->
    <div class="section" id="privee">
        <h2 class="titleSection">Cours Privée</h2>
        <p class="phraseType">Pour ce qu'ils veulent apprendre à leur ryhtme.!</p>
        <div v-for="item in coursPrive" :key="item.nomCours">
            <carte-cours 
                :cours="item"
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
    components: { Header, SectionRecherche,CarteCours },
    data(){
        return{
            initiation : Bdd.bddCours.initiation,
            regulierEnfant : Bdd.bddCours.regulierEnfant,
            regulierAdulte : Bdd.bddCours.regulierAdulte,
            coursPrive : Bdd.bddCours.coursPrive,
            autonomie : Bdd.bddCours.autonomie,
            famille : Bdd.bddCours.famille,
        }
    },   
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