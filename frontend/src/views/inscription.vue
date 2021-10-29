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
        placeRestante(){
            fetch("http://localhost:3000/check-place-restante")
                .then(res => res.json())
                .then( response => {
                     for (let item of response){
                         let parent = document.getElementById(item.dateTypeDate)
                         parent.querySelector(".nbrCoursRestant").innerHTML = item.nbr_participants
                     }                    
                })
                .catch(err => { console.log(err)})
        }
    },
    mounted(){
        this.placeRestante()
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