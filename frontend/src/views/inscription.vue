<template>
    <div>
       
        <main>
            <form-inscription/>
        </main>
    </div>
</template>

<script>
import FormInscription from '../components/page-Inscription/formInscription.vue'
export default {
    name:"inscription",
    components: {  FormInscription },
    methods : {
        
    },
    mounted(){
        document.title = "Inscription"
    }   
}
</script>
   

<style scoped>
    main{
        margin-bottom: 50px;
        padding-top: 100px;
    }
</style>