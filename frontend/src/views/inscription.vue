<template>
    <div>
        <Header
            title="Inscription"
            :image="require('@/assets/images/header-Contact.png')"
        />
        <main>
            <form-inscription
                :coursNom="item"
                :eleve="eleve"
             />
        </main>
    </div>
</template>

<script>
import Header from '../components/forAll/header.vue'
import FormInscription from '../components/page-Inscription/formInscription.vue'
export default {
    name:"inscription",
  components: { Header, FormInscription },

    data(){
        return{
            id : "",
            item : "",
            eleve : {}
        }
    },
   
   mounted(){
            this.item = this.$route.query.coursNom      
            this.eleve = this.$route.query.eleve 
   }
 
}
</script>
   

<style scoped>
    main{
        margin-bottom: 50px;
    }
</style>