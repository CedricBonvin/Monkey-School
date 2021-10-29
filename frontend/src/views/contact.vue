<template>
    <div>
        <div >
            <modal
                v-if="modalMessage"
                :text="modalMessage"
                @close-modal="closeModal"
            
            />
        </div>
        <Header 
        title="Contact"
        :image="require('@/assets/images/header-Contact.png')"
        />
        <card-contact />
        <section-formulaire-contact
            @listenresponse="displayModal"
        />
        <nous-trouver />
     


    </div>
</template>

<script>
import CardContact from '../components/pageContact/cardContact.vue'

import Header from '../components/forAll/header.vue'
import SectionFormulaireContact from '../components/pageContact/sectionFormulaireContact.vue'
import NousTrouver from '../components/pageContact/nousTrouver.vue'
import Modal from '../components/forAll/modal.vue'
export default {
    name : "contact",
    components: {Header, CardContact, SectionFormulaireContact, NousTrouver, Modal},
    data(){
        return{
            bdd : {},
            modalMessage : ""
        }
    },
    methods :{
        // $emit de modal
        displayModal(succes){
            if (succes === false){
                this.modalMessage = "Nous éprouvons des difficultés... veuillez réeassayer.. "
            }else if (succes === true) {
                this.modalMessage = "Votre Message à été envoyé avec succès. Nous vous répondrons dans les plus brefs délais."
            } 
        },
        // $emit de modal
        closeModal(){
            this.modalMessage = ""
        }
    },
    mounted(){
        document.title = "Contact"
    }
}

</script>

<style scoped>





</style>