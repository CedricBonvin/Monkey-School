<template>
    <div>
        <h1>Tout est correct ?</h1>
        <div class="section">
            <h2 class="underLine">Validez vos informations :</h2>
            <div class="containerInfo">
                <div class="cours">
                    <p>Cours :   <span id="cours" class="eleveInfo"> {{ eleve.cours}} </span>  </p>
                </div>
                <p>Nom :        <span id="nom" class="eleveInfo"> {{ eleve.nom}} </span>     </p>
                <p>Prénom :     <span id="prenom" class="eleveInfo"> {{ eleve.prenom}} </span>  </p>
                <p>Age :        <span id="age" class="eleveInfo"> {{ eleve.age}} </span>     </p>
                <p>NPA :        <span id="npa" class="eleveInfo"> {{ eleve.npa}} </span>     </p>
                <p>Ville :      <span id="ville" class="eleveInfo"> {{ eleve.ville}} </span>   </p>
                <p>adresse :     <span id="adresse" class="eleveInfo"> {{ eleve.adresse}} </span>   </p>
                <p>Téléphonne : <span id="phonne" class="eleveInfo"> {{ eleve.phone}} </span>   </p>
                <p>email : <span id="mail" class="eleveInfo"> {{ eleve.mail}} </span>   </p>
                <div class="boxRemarque">Remarque : 
                    <p id="remarque" class="remarque"> {{ eleve.remarque }}</p>
                </div>
            </div>
        <div class="boxButton">
            <button class="buttonFull modifier" @click="modifierEleve(eleve)">Modifier</button>
            <button class="buttonFull buttonInscrire">S'inscrire</button>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "inscription-validation",
    data(){
        return{
            eleve : {},
         
        }
    },
    methods : {
        modifierEleve(){
            const eleve = {
                cours : document.getElementById("cours").innerHTML,
                nom : document.getElementById("nom").innerHTML,
                prenom : document.getElementById("prenom").innerHTML,
                age : document.getElementById("age").innerHTML,
                npa : document.getElementById("npa").innerHTML,
                ville : document.getElementById("ville").innerHTML,
                adresse : document.getElementById("adresse").innerHTML,
                mail : document.getElementById("mail").innerHTML,
                remarque : document.getElementById("remarque").innerHTML,
                phonne : document.getElementById("phonne").innerHTML,
            }
           
              const coursComplet =   this.$route.query.cours
            this.$router.push({path:'/inscription', query:{ eleve : eleve, cours: coursComplet }})
        }
    },
    mounted(){
         this.eleve = this.$route.query.eleve
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