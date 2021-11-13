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


        <!-- SI Event -->
        <div v-if="cours.infoCours.typeCours === 'Event'">
            <p> {{cours.infoCours.dateChoisie.length}} cours <span @click="afficherDateNoel" class="afficherCours">afficher</span></p>
            <div class="boxDate" v-if="afficheDate">
                <i @click="afficherDateNoel" class="fas fa-times iconeClose"></i>
                <h4 class="titleDateChoisie">Vos dates de cours :</h4>
                <div class="date" v-for="date in cours.infoCours.dateChoisie" :key="date.id">
                    {{ new Date(date).toLocaleDateString('fr-FR', {weekday : 'long', day: 'numeric', month : 'long', year : 'numeric'})}}
                </div>
            </div>
            <button @click="displayAjoutEleve" class="button ajouterEleve" v-if="cours.infoCours.typeCours === 'Event' ">AJOUTER UN ELEVE</button>  
            <div v-if="displayBoxAjoutEleve" class="boxAjouterEleve">
                <h5 class="titleBoxAjouterCours">J'ajoute un élève au cours</h5>
                    <p class="paraInfo">* ! Nous garderons les mêmes informations de contact ainsi que les mêmes dates de cours choisie. </p>
                <div class="boxInfoNewEleve">
                    <div class="col">
                        <label for="nomNewEleve"> Nom :</label>
                        <input type="text" id="nomNewEleve" v-model="NewEleve.nomEleve">
                        <p class="errorNewEleve" v-if="errorNewEleve.nom"> {{ errorNewEleve.nom }}</p>
                    </div>
                    <div class="col">
                        <label for="prenomNewEleve"> Prénom :</label>
                        <input type="text" id="prenomNewEleve" v-model="NewEleve.prenomEleve">
                        <p class="errorNewEleve" v-if="errorNewEleve.prenom"> {{ errorNewEleve.prenom }}</p>
                    </div>
                    <div class="col">
                        <label for="ageNewEleve"> Age :</label>
                        <input type="text" id="ageNewEleve" v-model="NewEleve.ageEleve">
                        <p class="errorNewEleve" v-if="errorNewEleve.age"> {{ errorNewEleve.age }}</p>
                        
                    </div>
                </div>
                <div class="boxButton">
                    <button @click="displayAjoutEleve" class="button danger">ANNULER</button>
                    <button @click="ajouterNewEleve(cours)" class="button">AJOUTER L'ELEVE</button>
                </div>
            </div>   
        </div>  
  </article>
</template>

<script>
export default {
    name : "sectionPanier",
    props : ["cours","panier"],
    data(){
        return{   
            nbrCours : null,
            afficheDate : false,
            displayBoxAjoutEleve :false,
            NewEleve : {
                nomEleve : "",
                prenomEleve : "",
                ageEleve : "",
            },
            errorNewEleve : {
                nom : "",
                prenom : "",
                age : "",
            }
        }
    },
    methods : {
        supprimerCarte(){
            this.$emit("supprimerCarte")
            localStorage.setItem("panier",JSON.stringify(this.panier))
            this.$store.commit('checkPanier')
        },
        afficherDateNoel(){
            if (this.afficheDate){
                this.afficheDate = false
            }else this.afficheDate = true
        },
        displayAjoutEleve(){
            for (let i in this.errorNewEleve){
                this.errorNewEleve[i] = ""
            }
            if (this.displayBoxAjoutEleve ===false){
                this.displayBoxAjoutEleve = true
            }else this.displayBoxAjoutEleve = false
        },
        ajouterNewEleve(cours){
            // clean
            for (let i in this.errorNewEleve){
                this.errorNewEleve[i] = ""
            }

            if(newEleveValid(this)){
                let newEleve = {
                ...cours,
                }
                newEleve.eleve = {
                    ...cours.eleve,
                    ...this.NewEleve
                }

                this.panier.push(newEleve)
                localStorage.setItem("panier",JSON.stringify(this.panier))
                this.$store.commit('checkPanier')
                this.displayBoxAjoutEleve = false
                console.log(this.panier)
            }

            function newEleveValid(data){
                let valid = true
                if (!data.NewEleve.nomEleve || data.NewEleve.nomEleve.length > 50 ){
                    valid = false
                    data.errorNewEleve.nom = "Veuillez saisir le champ"
                }
                if (!data.NewEleve.prenomEleve || data.NewEleve.prenomEleve.length > 50){
                    valid = false
                    data.errorNewEleve.prenom = "Veuillez saisir le champ"
                }
                const regex = new RegExp("^[0-9]{1,2}$")
                if (!data.NewEleve.ageEleve || !regex.test(data.NewEleve.ageEleve)){
                    valid = false
                    data.errorNewEleve.age = "! Vérifier l'age.."
                }

                if(valid){
                    return true
                }else return false
            }
        }    
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
        border-bottom: solid 2px lightgray;
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
        background: rgb(245, 245, 245);
        padding: 20px;
        width: 80%;
        max-width: 800px;
        margin-bottom: 30px;
        border: solid 1px lightgray;
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

    .afficherCours{
        color: blue;
        text-decoration: underline;
        font-weight: 400;
        cursor: pointer;
        transition: .3s;
    }
    .afficherCours:hover{
        color: rgb(101, 101, 247);
        font-size: 18px;
    }
    .button{
        cursor: pointer;
        padding: 10px 20px;
        background: green;
        color: white;
        border: none;
        border-radius: 2px;
        font-weight: bold;
        margin-top: 20px;
        transition: .3s;
    }
    .button:hover{
        transform: scale(1.1);
        box-shadow: 0 0 10px 1px lightgray;
    }
    .boxDate{
        position: relative;
        border: solid 1px lightgray;
        padding : 10px;
        background: rgb(247, 244, 244);
        margin-top: 10px;
    }
    .date{
        margin: 3px;
        font-size: 14px;
    }
    .boxAjouterEleve{
        padding: 20px;
        background: rgb(255, 255, 255);
    }
    .boxInfoNewEleve{
        display: flex;
        flex-flow: column wrap;
        justify-content: space-evenly;
    }
    .col{
        display: flex;
        flex-flow: column;
        margin-top: 10px;
        
    }
    .ajouterEleve{
        background: var(--color-primary);
    }
    .danger{
        background: rgb(212, 66, 66);
        margin-right: 20px;
    }
    .boxButton{
        display: flex;
        flex-flow: wrap;
        justify-content:right;
        margin-top: 20px;
    }
    .paraInfo{
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 10px;
        font-style: italic;
    }
    .iconeClose{
        color: rgb(177, 177, 177);
        position: absolute;
        top: 5px;
        right: 10px;
        font-size: 30px;
        cursor: pointer;
    }
    .titleDateChoisie{
        display: inline-block;
        font-weight: bold;
        font-size: 18px;
        opacity: 80%;
    }
    .titleBoxAjouterCours{
        font-size: 20px;
        font-weight: bold;
        opacity: 80%;
        padding-bottom: 20px;
    }
    #ageNewEleve{
        width: 50px;
    }
    .errorNewEleve{
        color: red;
        font-size: 14px;
    }
    #nomNewEleve, #prenomNewEleve{
        max-width: 200px;
    }
    input{
        border: none;
        background: rgb(243, 243, 243);
        padding: 3px;
    }
    label{
        font-weight: 400;
    }





    @media screen and (max-width : 450px){
        
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
        .containerCarte{
            width: 98%;
        }
        .sectionCarte{
            width: 100%;
        }
        .iconeClose{
            font-size: 20px;
        }
        .titleDateChoisie{
            margin-bottom: 10px;
        }
    }
  
    
</style>



