<template>
  <article class="containerCarte" >
        
            <div class="headerCarte">
                <h3>{{cours.infoCours.typeCours}}: <span class="nomCours"> {{ cours.infoCours.nomCours}}</span></h3>
                <i @click="supprimerCarte()" class="fas fa-trash-alt supprimer"></i>
            </div>
            
            <div class="carte">
                <!-- info Cours -->
                <div class="infoCours">
                    <h4 >Info cours :</h4>
                    <div class="bold">Jour : <span> {{ cours.infoCours.jour}} </span></div>
                    <div class="bold">heure : <span class="donne">{{ cours.infoCours.heure}} </span></div>
                </div>
                <!-- Info Eleve -->
                <div class="infoEleve">
                    <h4>Info élève :</h4>
                    <div class="bold">Nom : <span class="donne">{{ cours.eleve.nomEleve}}</span></div>
                    <div class="bold">Penom : <span class="donne">{{ cours.eleve.prenomEleve}}</span></div>
                    <div class="bold">Age : <span class="donne">{{cours.eleve.ageEleve}} ans</span> </div>
                </div>
                <div>
                    <h4>Prix :</h4>
                    <div class="bold">CHF : <span class="donne">{{ cours.infoCours.prix}}.-</span></div>
                </div>       
            </div>
         
      
  </article>
</template>

<script>
export default {
    name : "sectionPanier",
    props : ["cours"],
    data(){
        return{
            panier : [],         
        }
    },
    methods : {
        supprimerCarte(){
            this.$emit("supprimerCarte")
        },
    },
}
</script>

<style scoped>
   
    .section{
        padding: 20px;
        padding-top: 0;
        margin-top: 20px;
    }
    .headerCarte{
        display: flex;
        justify-content: space-between;
        border-bottom: solid 2px var(--color-primary);
        padding-bottom: 10px;
        margin-bottom: 10px;
    }
    .supprimer{
        margin: 0;
        padding: 0;
        display: block;
        color: rgb(143, 143, 143);
        font-size: 20px;
        cursor: pointer;
    }
    .containerCarte{
        margin: auto;
        margin-top: 50px;
        background: white;
        padding: 20px;
        width: 80%;
        max-width: 800px;
    }
    h3{
        font-size: 25px;
        font-weight: bold;
        font-style: italic;
        color: rgb(70, 70, 70);

    }
    h4{
        color: rgb(75, 75, 75);
        text-align: left;
        font-size: 16px;
        padding: 0;
        margin-bottom: 20px;
        border-bottom: solid 2px var(--color-primary);
        font-style: italic;
    }
    .nomCours{
        font-size: 20px;
        font-weight: bold;
        color : rgb(145, 145, 145)
    }
    .carte{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding: 10px;
        font-size: 14px;
    }  
    .bold{
        font-weight: bold;
        margin: 5px 0;
    }
    .donne{
        font-weight: 300;
    }

    /* AUTRE PARTICIPANT  */

    .boxAutreParticipant{
        width: 100%;;
    }
    .boxEleve{
        border: solid 1px gray;
        padding: 10px;
        margin: 10px;
    }

    @media screen and (max-width : 400px){
        .carte{
            display: block;
        }
        h4{
            margin: 0;
            padding: 0;
        }
        .infoEleve{
            margin: 20px 0;
        }
    }
  
    
</style>