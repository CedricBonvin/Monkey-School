<template>
    <div v-if="validPage" class="body">
        
        <div class="section">
            <h2 class="underLine">Validez vos informations :</h2>
            <h3>PERSONNE DE CONTACT :</h3>
            <!-- CONTACT -->
            <div class="containerInfo">
                
                <div class="info">Nom :        <span id="nom" class="eleveInfo"> {{ info.contact.nomContact}} </span></div>
                <div class="info">Prénom :     <span id="prenom" class="eleveInfo"> {{ info.contact.prenomContact}} </span></div>
                <div class="info">NPA :        <span id="npa" class="eleveInfo"> {{ info.contact.npaContact}} </span></div>
                <div class="info">Ville :      <span id="ville" class="eleveInfo"> {{ info.contact.villeContact}} </span></div>
                <div class="info">adresse :    <span id="adresse" class="eleveInfo"> {{ info.contact.adresseContact}} </span></div>
                <div class="info">Tél.: : <span id="phonne" class="eleveInfo"> {{ info.contact.phoneContact}} </span></div>
                <div class="info">email :      <span id="mail" class="eleveInfo"> {{ info.contact.mailContact}} </span></div>
               
            </div>
            <!-- ELEVE -->
            <h3>ELEVE :</h3>
            <div class="containerInfo">
                <div class="eleve">Cours :   
                    <div id="eleve" class="eleveInfo"> {{ info.infoCours.nomCours}} </div>
                    <div v-if="info.infoCours.dateChoisie" class="eleve">Date du cours: </div>
                    
                    <!-- date si Noel -->
                     <div v-if="info.infoCours.typeCours === 'Event'" class="sectionDateNoel">
                         <p class="info">Vos dates de cours :</p>
                            <div class="boxDatesNoel" >
                                <div v-for="item in info.infoCours.dateChoisie" :key="item.id">
                                    <div>{{new Date(item).toLocaleDateString("fr-FR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }} </div>
                                </div>
                            </div>
                     </div>


                </div>
                <div class="info">Nom :        <span id="nom" class="eleveInfo"> {{ info.eleve.nomEleve}} </span></div>
                <div class="info">Prénom :     <span id="prenom" class="eleveInfo"> {{ info.eleve.prenomEleve}} </span></div>
                <div class="info">Age :        <span id="age" class="eleveInfo"> {{ info.eleve.ageEleve}} </span></div>
                <div class="info">NPA :        <span id="npa" class="eleveInfo"> {{ info.eleve.npaEleve}} </span></div>
                <div class="info">Ville :      <span id="ville" class="eleveInfo"> {{ info.eleve.villeEleve}} </span></div>
                <div class="info">adresse :    <span id="adresse" class="eleveInfo"> {{ info.eleve.adresseEleve}} </span></div>
                <div class="boxRemarque">Remarque : 
                    <div id="remarque" class="remarque"> {{ info.eleve.remarqueEleve }}</div>
                </div>
            </div>
        <div class="boxButton">
            <button class="buttonFull modifier" @click="modifierEleve">MODIFIER</button>
            <button class="buttonFull buttonInscrire" @click="send">AJOUTER AU PANIER</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "inscription-validation",
    data(){
        return{
            info : {},
            validPage : true
        }
    },
    methods : {
        modifierEleve(){
            this.$router.push({path:'/inscription'})
        },
        send(){  
                 
            if(!JSON.parse(localStorage.getItem("panier"))){
                let panier =[ 
                    {
                        contact : {...JSON.parse(localStorage.getItem("formulaireInscription")).contact},
                        eleve : {...JSON.parse(localStorage.getItem("formulaireInscription")).eleve},  
                        infoCours : {...JSON.parse(localStorage.getItem("formulaireInscription")).infoCours}             
                    },
                ]        
                localStorage.setItem("panier",JSON.stringify(panier))

            } else { 
                let panier = JSON.parse(localStorage.getItem("panier"))
                panier.push(JSON.parse(localStorage.getItem("formulaireInscription")))
                localStorage.setItem("panier",JSON.stringify(panier))   
            }
                       
            localStorage.removeItem("formulaireInscription")     
            this.$router.push({path: "/panier"})
        }
    },
    beforeMount(){
        const info = JSON.parse(localStorage.getItem("formulaireInscription")) 
        if(info){
            this.info = info
        }else {
            this.validPage = false
            this.$router.push({ path : "/cours"})

        } 
    },
    mounted(){
        document.title = "Inscription-validation"
    }
    
}
</script>

<style scoped>
    h1{
        padding-top: 100px;
        text-align: center;
        font-size: 3rem;
        color: white;
    }
    h2{
        display: inline-block;
        position: relative;
        font-size: 30px;
        margin-bottom: 20px;
    }
    .buttonFull{
        font-size: 20px;
    }
    .section{
        padding: 20px;
        margin: auto;
        max-width: 800px;
    }
    .body{
        padding-top: 100px;
    }
    .containerInfo{
        background: rgb(247, 244, 244);
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        border: solid 1px gray;
        border-radius: 10px;
        padding: 10px;
        margin-top: 10px;
    }
    .eleve{
        width: 100%;
        font-weight: bold;
        padding: 10px 0;
    }
    .eleveInfo{
        font-weight: 300;
    }
    .info{
     font-weight: bold;
     width: 50% ;
     min-width: 200px;
     padding: 10px 0;
    }
    .eleveInfo {
        display: inline-block;
    }
    .boxRemarque{
        width: 100%;
        font-weight: bold; 
        margin-top: 30px;
    }
    .remarque{
        padding: 10px;
        width: 80%;
        font-weight: 300;
    }
    .boxButton{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        margin-top: 50px;
        
    }
    .buttonInscrire{
        background: green;
        border-radius: 0;
    }
    .modifier{
        background: rgb(197, 49, 49);
        border-radius: 0;
    }
    h3{
        margin-top: 30px;
        font-weight: bold;
        opacity: 60%;
        font-size: 20px;
        font-style: italic;
    }
    .sectionDateNoel{
        margin-top: 10px;
    }
    .boxDatesNoel{
        background: white;
        padding: 10px;
    }
  
   
</style>