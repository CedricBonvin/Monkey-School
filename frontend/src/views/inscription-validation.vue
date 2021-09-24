<template>
    <div>
        <h1>Tout est correct ?</h1>
        <div class="section">
            <h2 class="underLine">Validez vos informations :</h2>
            <div class="containerInfo">
               
                <p class="cours">Cours :   <span id="cours" class="eleveInfo"> {{ infoFormulaire.nomCours}} </span></p>
                <p>Nom :        <span id="nom" class="eleveInfo"> {{ infoFormulaire.nomEleve}} </span></p>
                <p>Prénom :     <span id="prenom" class="eleveInfo"> {{ infoFormulaire.prenom}} </span></p>
                <p>Age :        <span id="age" class="eleveInfo"> {{ infoFormulaire.ageEleve}} </span></p>
                <p>NPA :        <span id="npa" class="eleveInfo"> {{ infoFormulaire.npa}} </span></p>
                <p>Ville :      <span id="ville" class="eleveInfo"> {{ infoFormulaire.ville}} </span></p>
                <p>adresse :    <span id="adresse" class="eleveInfo"> {{ infoFormulaire.adresse}} </span></p>
                <p>Téléphonne : <span id="phonne" class="eleveInfo"> {{ infoFormulaire.phone}} </span></p>
                <p>email :      <span id="mail" class="eleveInfo"> {{ infoFormulaire.mail}} </span></p>
                <div class="boxRemarque">Remarque : 
                    <p id="remarque" class="remarque"> {{ infoFormulaire.remarque }}</p>
                </div>
            </div>
        <div class="boxButton">
            <button class="buttonFull modifier" @click="modifierEleve">Modifier</button>
            <button class="buttonFull buttonInscrire" @click="send">S'inscrire</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "inscription-validation",
    data(){
        return{
            infoFormulaire : {}
        }
    },
    methods : {
        modifierEleve(){
            this.$router.push({path:'/inscription'})
        },
        send(){
            this.$router.push({path: "/panier"})

             let objToPanier = JSON.parse(localStorage.getItem("formulaireInscription"))
             let tabPanier = JSON.parse(localStorage.getItem("panier")) 

             if (tabPanier) {
                 tabPanier.push(objToPanier)
                 localStorage.setItem("panier", JSON.stringify(tabPanier))
             }
             else{
                let newTabPanier = []
                newTabPanier.push(objToPanier)
                localStorage.setItem("panier", JSON.stringify(newTabPanier))
             }

             localStorage.removeItem("formulaireInscription")
             //let obj = JSON.parse(localStorage.getItem("formulaireInscription"))
            // fetch("http://localhost:3000/new-inscription",{
            //     method : "POST",
            //     body : JSON.stringify(obj),
            //     headers : {"Content-type": "application/json; charset=UTF-8",}
            // })
            // .then( () => console.log("ok pour l'envoie au serveur"))
       
        }
    },
    beforeMount(){
        this.infoFormulaire = JSON.parse(localStorage.getItem("formulaireInscription")) 
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
    .section{
        padding: 20px;
    }
    .containerInfo{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        border: solid 1px gray;
        border-radius: 10px;
        padding: 10px;
        margin-top: 10px;
    }
    .cours{
        width: 100%;
    }
    .eleveInfo{
        font-weight: 300;
    }
    p{
        width: 50%;
        margin: 10px 0;
        font-weight: bold;
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
    }
    .buttonInscrire{
        background: green;
    }
    .modifier{
        background: rgb(197, 49, 49);
    }
   
</style>