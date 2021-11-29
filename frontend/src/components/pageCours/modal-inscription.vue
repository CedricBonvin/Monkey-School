<template>
    <div class="container">
        <h2>Cours privé..!</h2>
        <i class="fas fa-thumbs-up like"></i>
        <p class="sousTitre">Afin de trouver une date qui convienne et selon nos disponibilités, veuillez nous contacter directement : </p>
        <div class="box">
            <p>Tél.: +41 79 519 04 84</p>
            <p>ou par</p>
            <router-link to="/contact"> Formulaire de Contact</router-link>
        </div>

        <button @click="closeModal" class="buttonFull">OK MERCI</button>
    </div>
</template>

<script>
export default {
    name : "modal-inscription-prive",
    props : ["data"],
    data(){
        return{
        }
    },
    methods : {
        closeModal(){
            console.log("essalie")
            this.data.displayInscriptionPrive = false
        }
    }
   
}
</script>

<style scoped>
    .container{
        position: fixed;
        top: 0;
        left: 10%;
        z-index: 2000;
        width: 80%;
        padding: 0 15px 15px 15px;
        box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.623);
        background: white;
        text-align: center;
        font-size: 20px;
        animation: pop .6s  forwards;
    }
 
    h2{
        border-bottom: 2px solid lightgray;
        background:var(--color-primary);
        padding: 20px;
        color: white;
        width: calc(100% + 30px);
        margin-left: -15px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .sousTitre{
        padding: 20px 0;
    }
    a{
        text-decoration: underline;
        color: blue;
    }
    .buttonFull{
        margin-top: 50px;
    }
    .like{
        color: gray;
        margin-top: 20px;
        margin-bottom: 0;
    }
    .buttonFull{
        display:inline-block;
        margin-right: 0;
        border-radius: 2px;
        margin-top: 30px;  
        padding: 10px 20px;    
    }
</style>