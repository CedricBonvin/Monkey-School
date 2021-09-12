<template>
    <div>
        <Header 
        title="Contact"
        :image="require('@/assets/images/header-Contact.png')"
        />
        <card-contact />
        <section-formulaire-contact />
        <nous-trouver />
     


    </div>
</template>

<script>
import CardContact from '../components/pageContact/cardContact.vue'

import Header from '../components/forAll/header.vue'
import SectionFormulaireContact from '../components/pageContact/sectionFormulaireContact.vue'
import NousTrouver from '../components/pageContact/nousTrouver.vue'
export default {
    name : "contact",
    components: {Header, CardContact, SectionFormulaireContact, NousTrouver},
    data(){
        return{
            bdd : {}
        }
    },
}

</script>

<style scoped>





</style>