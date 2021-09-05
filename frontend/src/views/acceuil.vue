<template>
    <main>
        <!-- HEADER -->
        <section class="header">
            <img class="headerImage" src="../assets/images/header.png" alt="image singe ">
            <div class="headerTitleBox">
                <h1>Monkey-school</h1>
            </div>
        </section>

        <section-event />
        <section-monkey />
        <section-cours />
        <section-escalade-pour-tous />
        <la-salle />

    

    </main>
</template>

<script>
import LaSalle from '../components/laSalle.vue'
import SectionCours from '../components/sectionCours.vue'
import SectionEscaladePourTous from '../components/sectionEscaladePourTous.vue'
import SectionEvent from '../components/sectionEvent.vue'
import SectionMonkey from '../components/sectionMonkey.vue'
export default {
    name : "acceuil",
    components : { SectionCours, SectionMonkey, SectionEscaladePourTous, SectionEvent, LaSalle},
}    
</script>

<style scoped>

   /* HEADER ///////////////////////////////////*/
    .header{
        position: relative;
    }
    .headerImage{
        width: 100%;
        height: 80vh;
        object-fit: cover;   
    }
    .headerTitleBox{
        margin-top: var(--top-bar-height);
        position: absolute;
        top: 50px;
        width: 70%;
        color: white;
        font-size: 6vw;
        padding: 3px;
    }

  
   

    
   
</style>