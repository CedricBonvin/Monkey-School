<template>
    <main>    
        <section-header />
        <section-event />
        <section-monkey />
        <section-cours />
        <section-escalade-pour-tous />
        <section-la-salle />
    </main>
</template>

<script>
import sectionLaSalle from '../components/pageAcceuil/sectionLaSalle.vue'
import SectionCours from '../components/pageAcceuil/sectionCours.vue'
import SectionEscaladePourTous from '../components/pageAcceuil/sectionEscaladePourTous.vue'
import SectionEvent from '../components/pageAcceuil/sectionEvent.vue'
import SectionMonkey from '../components/pageAcceuil/sectionMonkey.vue'
import SectionHeader from '../components/pageAcceuil/sectionHeader.vue'
export default {
    name : "acceuil",
    components : { SectionCours, SectionEscaladePourTous, SectionEvent,sectionLaSalle, SectionMonkey, SectionHeader},
    mounted(){
        document.title = "Accueil"
    }
}    

</script>

<style scoped>

</style>