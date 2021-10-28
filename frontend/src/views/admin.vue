<template>
    <div class="body">
        <h1> ADMINISTRATION</h1>
        <section class="sectionRecherche">
            <h2>Rechercher des participants :</h2>
            <!-- RECHERCHE -->
            <div class="boxRecherche">
                <div>
                    <label for="nomCours">Nom du cours</label>
                    <select name="nomCours" id="nomCours" v-model="query.typeCours">
                        <option value="null">Tous</option>
                        <option value="regulier">regulier</option>
                        <option value="Noel">Noel</option>
                    </select>
                </div>
                <!--RECHERCHE Nom Eleve -->
                <div>
                    <label for="nomEleve">Nom Eleve</label>
                    <input type="text" name="nomEleve" id="nomEleve" value="null" placeholder="ex.: De la tour" v-model="query.nomEleve">
                </div>
            </div>
        <button class="buttonChercher" @click="recherche">CHECHER</button>
        </section>

         <!-- DONNEE -->
        <!-- donnees ä afficher  -->
        <div class="titleQuery">{{titleQuery}}</div>
        <div class="row" v-for="item in cours" :key="item.nom">
            <div :id="item._id" >
                <!-- BASE ELEVE -->
                <div class="eleve">
                    <div class="col">
                        <div class="clefEleve">Nom</div>
                        <div>{{item.eleve.nomEleve}}</div>
                    </div>
                    <div class="col">
                        <div class="clefEleve">Prenom </div>
                        <div>{{item.eleve.prenomEleve}}</div>
                    </div>
                    <div class="col">
                        <div class="clefEleve">Age </div>
                        <div>{{item.eleve.ageEleve}}</div>
                    </div>
                    <div class="col">
                        <div class="clefEleve">Npa </div>
                        <div>{{item.eleve.npaEleve}}</div>
                    </div>
                    <div class="col">
                        <div class="clefEleve">ville </div>
                        <div>{{item.eleve.villeEleve}}</div>
                    </div>
                    <div class="col">
                        <div class="clefEleve">Adresse </div>
                        <div>{{item.eleve.adresseEleve}}</div>
                    </div>
                </div>
                <div class="boxButton">
                    <button class="button" @click="afficherInfoCours(item, '.boxInfo',$event)">INFO COURS</button>
                    <button class="button" @click="afficherInfoCours(item ,'.boxContact',$event)">CONTACT ELEVE</button>
                </div>
                
                <!-- INFO COURS -->
                <div class=" box boxInfo" style="display : none">
                    <h2>INFO DU COURS :</h2>
                    <div class="ligne">
                        <p class="clef">Type de cours :</p>
                        <p> {{ item.infoCours.typeCours}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">Nom du cours :</p>
                        <p> {{ item.infoCours.nomCours}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">Prix du cours :</p>
                        <p> {{ item.infoCours.prix}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">Prix à Payer :</p>
                        <p> {{ item.infoCours.prixAPaye}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">Dates Choisie :</p>
                        <div v-for="date in item.infoCours.dateChoisieNoel" :key="date.id">
                            {{ new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}                   
                         </div>

                    </div>
                    <div class="ligne">
                        <p class="clef">Date d'inscription :</p>
                        <p>{{ new Date(item.infoCours.dateInscription).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}  </p>                 

                    </div>

                </div>

                <!-- CONTACT ELEVE -->
              <div class=" box boxContact" style="display : none">
                    <h2>CONTACT DE L'ELEVE</h2>
                    <div class="ligne">
                        <p class="clef">Nom :</p>
                        <p> {{ item.contact.nomContact}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">Prénom :</p>
                        <p> {{ item.contact.prenomContact}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">Npa :</p>
                        <p> {{ item.contact.npaContact}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">Adresse :</p>
                        <p> {{ item.contact.adresseContact}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">ville :</p>
                        <p> {{ item.contact.villeContact}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">téléphonne :</p>
                        <p> {{ item.contact.phoneContact}}</p>
                    </div>
                    <div class="ligne">
                        <p class="clef">E-mail :</p>
                        <p> {{ item.contact.mailContact}}</p>
                    </div>
                

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "admin",
    data(){
        return{
            cours : [],
            query : {},
            infoCours : {},
            titleQuery : ""
        }
    },
    methods : {
        recherche(){
            let obj = {
                ...this.query
            }
            this.titleQuery = obj
            
            fetch("http://localhost:3000/recherche",{
                method : "POST",
                body : JSON.stringify(obj),
                headers: {"Content-type": "application/json; charset=UTF-8",}

            })
            .then(response => response.json())
            .then(result => {
                this.cours = result
                console.log(this.cours)
            })
        },
        afficherInfoCours(item,target,event){
        let parent =  document.getElementById(item._id)
        let cible = parent.querySelector(target)
            if(cible.style.display === "block"){
                cible.style.display = "none"
                event.target.style.background = "green"
            }else{
                cible.style.display = "block"
                event.target.style.background = "gray"
            }
            
        }
    }
}
</script>

<style scoped>
    .body{
        min-height: 100vh;
        background: rgb(212, 212, 212);
    }
    .boxButton{
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
    }
    .button{
        padding: 10px 20px ;
        border: none;
        cursor: pointer;
        background: green;
        color: white;
        font-weight: bold;
        transition: .3s;

    }
    .button:hover{
        transform: scale(1.1);
        box-shadow: 0 0 5px 0px gray;
    }

    h1{
        padding-top: 100px;
    }
    h2{
        padding: 20px 0;
        text-decoration: underline;
        font-weight: bold;
        opacity: 80%;
    }
    .row{
        font-size: 14px;
        background: rgb(255, 255, 255);
        margin-top: 10px;
        padding: 10px;
        margin:  20px;
    }
    
    label{
        display: block;
    }
   
    
    .buttonChercher{
        background: rgb(245, 63, 63);
        color: white;
        padding: 10px 20px;
        border: none;
        font-size: 20px;
        margin-top: 50px;
        cursor: pointer;
        transition: .3s;
    }
    .buttonChercher:hover{
        transform: scale(1.05);
        box-shadow: 0 0 15px 2px rgb(133, 133, 133);
    }
    .sectionRecherche{
        background: rgb(243, 176, 252);
        padding: 20px ;
        margin-top: 30px;
    }
    .boxRecherche{
        display: flex;
        justify-content: space-evenly;
        background: rgb(210, 141, 216);
        padding: 30px 0;
    }
    .eleve{
        display: flex;
        flex-flow: wrap;
        border-bottom: solid 1px gray;
        padding-bottom: 10px;
    }
    .clefEleve{
        font-weight: bold;
        padding-bottom: 5px;
        min-width: 100px;
    }
    .clef{
        font-weight: bold;
        padding-bottom: 5px;
        min-width: 120px;
    }

    .col{
        text-align: center;
        border-right: solid 1px black;
        padding: 0 10px;
        margin-top: 20px;
    }
    .titleQuery{
        margin-top: 20px;
        text-align: center;
    }
    .ligne{
        display: flex;
        margin: 10px 0;
    }
</style>