<template>
    <div>
      
         <modal-inscription 
            v-if="displayInscriptionPrive"
            :data="this"
         />


        <article :id="cours.nomCours" > 
            <div class="carte" @click="schowOneBox($event,cours.nomCours,'.containerInformation',true)"  >  
                <img v-if="cours.nomCours === 'Noel'" class="chapeau-noel"  src='@/assets/images/chapeau-Noel.png' alt="">     
                <img class="imgCarte" src='@/assets/images/header.jpg' alt="">     
                <div class="col2Carte">
                    <div class="titleNomCours"> {{ cours.nomCours}}</div>
                    <div class="ageCarte">{{cours.ageString}}</div>
                </div>
            </div>
            <!-- INFORMATION -->
            <div class="containerInformation">
                <h3 class="titleBoxInfo">Informations :</h3>
                <i @click="closeOneBox($event,cours.nomCours,'.containerInformation')" class="fas fa-times iconeClose"></i>
               
                <!-- Lieux -->
                <div class="boxLieux">
                    <h4>Lieux: </h4>
                    <p> {{cours.lieux}}
                        <a href="https://www.google.com/maps/@46.3056525,7.4797739,305m/data=!3m1!1e3" target="_blank">
                            <i class="fas fa-map-marker-alt iconeLieux"></i>
                        </a>
                    </p>
                </div>

                <!-- INFO COURS -->
                <div class="boxInfoCours">
                    <div class="infoCoursCol1">
                        <div class="colInfoCours"><span class="clefInfoCours">Age :</span> {{cours.ageString}}</div>
                        <div class="colInfoCours"><span class="clefInfoCours">Jour :</span> {{cours.jour}}</div>
                    </div>
                    <div class="infoCoursCol2">
                        <div class="colInfoCours"><span class="clefInfoCours">Heure :</span> {{cours.heure}}</div>
                        <div class="colInfoCours"><span class="clefInfoCours">Nbr.cours :</span> {{cours.nbrCours}}</div>
                        <div class="colInfoCours"><span class="clefInfoCours">Durée :</span> {{cours.dureeCours}}</div>
                    </div>
                </div>

                <!-- DATE -->
                <div v-if="cours.typeCours === 'regulier' || cours.typeCours === 'Event' " 
                    class="dateDesCours"><span class="clefInfoCours">Dates des cours : </span> <span @click="schowOneBox($event,cours.nomCours,'.boxDate')" class="textAfficher">Afficher</span>
                </div>
                <div class="containerInfoDate">
                    <div class="boxDate">
                        <i class="fas fa-calendar-alt iconeCalendrier"></i>
                        <i @click="closeOneBox($event,cours.nomCours,'.boxDate')"  class="fas fa-times iconeCloseSmall "></i>
                        <p v-if="cours.typeCours === 'regulier'" class="periodeScolaire">* Tous nos cours régulier suivent les périodes scolaires.</p>
                        <div class="boxDateDeCours">
                            <h4>2020</h4>
                            <div>{{ cours.datesCours2020}}</div>
                            <h4>2021</h4>
                            <div>{{ cours.datesCours2021}}</div>
                        </div>
                        <!-- téléchagement des date -->
                        <div>
                            <a v-if="cours.nomCours === 'Mini-Spider'" :href="require('@/assets/fichier/date-Mini-Spider.png')" download= "date-MiniSpider.pdf">Télécharger les dates de cours</a>
                            <a v-if="cours.nomCours === 'Gecko'" :href="require('@/assets/fichier/date-Gecko.png')" download= "date-Gecko.pdf">Télécharger les dates de cours</a>
                            <a v-if="cours.nomCours === 'Monkey'" :href="require('@/assets/fichier/date-Monkey.png')" download= "date-Monkey.pdf">Télécharger les dates de cours</a>
                        </div>
                    </div>
                </div>
               
                <!-- Prix -->
                <div>
                    <div class="infoLignePrix">
                        <div class="infoLignePrixCol1">
                            <div class="clefInfoCours">Prix : <span class="lignePrix"> CHF. {{ cours.prix}}.- </span> </div>
                        </div>
                        <div class="aboOffert" v-if="cours.typeCours === 'regulier' "> ( Abonnemnt. annuel offert ! )
                        </div>
                            <i @click="schowOneBox($event,cours.nomCours,'.boxPrix')" class="fas fa-info-circle iconeInfo"></i>
                    
                    </div>
                    <div class="containerInfoPrix">
                        <div class="boxPrix">
                            <div class="headerBoxPrix">
                                <h3>Info prix :</h3>
                            </div>
                            <i @click="closeOneBox($event,cours.nomCours,'.boxPrix')"  class="fas fa-times iconeCloseSmall "></i>
                            <p>L'encadrement, le matériel et l'entrée à la salle sont compris dans le prix du cours !</p>
                            <p v-if="cours.typeCous === 'regulier'" class="PrixAboOffert"> * L'abonnement annuel d'une valeur de {{cours.valeurAbo}} est offert !!</p>
                           
                           <!-- RABAIS -->
                            <h4 class="titleRabais">Rabais :</h4>

                            <!-- Si Regulier -->
                            <div v-if="cours.typeCours === 'regulier'">
                                <p class="paraRabais">- 2 pers. de la même famille = 10% sur la 2ème inscription</p>
                                <p class="paraRabais">- 3 pers. de la même famille = 15% sur la 3ème inscription</p>
                                <p class="paraRabais">- 4 pers. de la même famille = 20% sur la 4ème inscription</p>
                            </div>

                            <!-- Si Privée -->
                            <div v-if="cours.typeCours === 'prive'">
                                <p class="paraRabais">* 1 pers. = CHF. 80.- / heure</p>
                                <p class="paraRabais">* CHF. 10.- / heure par personne supplémentaire.</p>
                                
                            </div>

                            <!-- si Noël -->
                            <div v-if="cours.typeCours === 'Noel'">
                                <p class="paraRabais">* Pour l'instant pas de rabais en vue !!!</p>           
                            </div>

                        </div>
                    </div>
                </div>

                <!-- information -->
                <div class="boxDescription">
                    <h3 class="titleBoxInfo">Déscription :</h3>
                    <p class="paraDescription">{{ cours.descriptionCour }}</p>
                </div>

                <button @click="send(cours)" class="buttonFull">s'inscrire</button>
            </div>         
        </article>
    </div>
 
</template>

<script>
import ModalInscription from './modal-inscription.vue'


export default {
  components: {ModalInscription},
    name : "carte-cours",
    props : ["cours"],
    data(){
        return{
            displayInscriptionPrive : false,
        }
    },
    methods : {     
        send(cours){
            let obj = {
                contact : {},
                eleve : {},
                infoCours : {
                    typeCours : cours.typeCours,
                    nomCours : cours.nomCours,
                    ageCours : cours.ageCours,
                    ageString : cours.ageString,
                    jour : cours.jour,
                    heure : cours.heure,
                    nbrCours : cours.nbrCours,
                    dureeCours : cours.dureeCours,
                    lieux : cours.lieux,
                    valeurAbo : cours.valeurAbo,
                    datesCours2020 : cours.datesCours2020,
                    datesCours2021 :cours.datesCours2021,
                    prix : null,
                    rabais : null,
                    prixAPaye : 0,
                    choiceDateCours : cours.choiceDateCours,
                    dateChoisie : [],
                },
            }

            if (cours.typeCours === "prive"){
                this.displayInscriptionPrive = true
            }else {
                localStorage.setItem("formulaireInscription",JSON.stringify(obj))
                this.$router.push({path : "/inscription"})
            }
        },
        // générique
        schowOneBox(e,id, target,scroll){
            e.stopImmediatePropagation()
            let parent = document.getElementById(id)
            let cible = parent.querySelector(target)
            if (scroll){
                cible.scrollIntoView({
                     top : top,
                     behavior : "smooth"
                })
            }
            cible.style.marginTop= "0" 
            cible.style.transition= ".6s"      
        },
        closeOneBox(e,id,target){
            e.stopImmediatePropagation()
            let parent = document.getElementById(id)
            let cible = parent.querySelector(target)
            let height = cible.getBoundingClientRect().height
            cible.style.marginTop  =  - height + "px"  
            cible.style.transition= ".6s" 
        },
        hideBoxMounted(select){
            let boxInfo = document.querySelectorAll(select)
            for ( let i = 0; i < boxInfo.length; i++){
                let height = boxInfo[i].getBoundingClientRect().height
                boxInfo[i].style.marginTop = - height + "px"

            }
        },
    }, 
    mounted(){
        
        this.hideBoxMounted(".boxPrix")
        this.hideBoxMounted(".boxDate")
        this.hideBoxMounted(".containerInformation")
    },
    
}
</script>


<style scoped>
    article{      
        margin: 20px 0;
        overflow: hidden;
        position: relative;
    }
    .chapeau-noel{
        width: 50px;
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 10;
       
    }
    .carte{   
        position: relative;     
        width: 95%;
        height: 200px;
        max-width: 450px;
        margin: auto;
        cursor: pointer; 
        overflow: hidden;         
    }
    .imgCarte{
        position: relative;
        z-index: 1;
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .col2Carte{
        position: absolute;
        width: 50%;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: rgba(0, 0, 0, 0.603);
        color: white;
        text-align: center;   
    }
    .titleNomCours{
        background: black;
        padding: 15px 0;
        font-size: 20px;
    }
    .ageCarte{
        margin-top: 50px;
        font-size: 30px;
        font-weight: 400;
        color: rgb(212, 211, 211);
    }
    .containerInformation{
        font-size: 16px;
        position: relative;
        width: 95%;
        max-width: 450px;
        padding: 10px;
        margin: auto;
        background: white;
       

    }
    .titleBoxInfo{
        display: inline-block;
        position: relative;
        font-size: 25px;
        font-weight: 300;
        padding-bottom: 5px;
        color: rgb(70, 70, 70);
    }
    .titleBoxInfo:before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        border-bottom: 3px solid var(--color-primary);
        
    }
    .iconeClose{
        position: absolute;
        top: 5px;
        right: 10px;
        font-size: 30px;
        color: rgb(170, 170, 170);
        cursor: pointer;
    }
    .boxLieux{
        display: flex;
        align-items: baseline;
        margin: 15px 0;
        margin-top: 25px;
    }
    .boxLieux p {
        padding-left: 5px;
    }
    .iconeLieux{
        display: inline !important;
        font-size: 20px;
        padding-left: 15px;
        color: red;
        cursor: pointer;
    }
    
    h4{
        text-align: left;
        font-size: 16px;
        color: black;
        margin: 0;
        padding: 0;
        font-weight: 400;
    }
    .boxInfoCours{
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
    }
    .colInfoCours{
        padding: 5px 0;
    }
    .clefInfoCours{
        font-weight: 400;
        color: rgb(24, 24, 24);
    }
    .textAfficher{
        text-decoration: underline;
        color: blue;
        font-weight: 400;
        cursor: pointer;
    }
    .infoLignePrix{
        z-index: 100;
        display: flex;
        flex-flow: row wrap ;
        align-items: center;
        margin-top: 10px;
    }
    .aboOffert{
        font-style: italic;
        font-weight: bold;
        font-size: .8rem;
    }
    .lignePrix{
        margin-left: 5px;
    }
    .iconeInfo{
        display: inline !important;
        color: red;
        font-size: 20px;
        padding-left: 5px;
        margin: 0;
        cursor: pointer;
    }
    .boxDescription{
        margin-top: 30px;
    }
    .paraDescription{
        padding: 20px 0;
        line-height: 1.4;
    }
    .containerInfoPrix{
        overflow: hidden;
        margin: 15px 0;
    }
    .boxPrix{
        position: relative;
        border: solid 1px rgb(190, 190, 190);
        border-radius: 5px;
        padding: 10px;
        font-size: 14px;
        line-height: 1.4;
    }
    .boxPrix h3{
        display: inline-block;
        position: relative;
        font-weight: bold;
        font-size: 20px;
        color: rgb(107, 107, 107);
         padding-bottom: 5px;
        margin-bottom: 10px;
    }
    .boxPrix h3:before{
        content: "";
        position: absolute;
        width: 50%;
        bottom: 0;
        left: 0;
        border-bottom: solid 2px var(--color-primary);
       
    }
    .PrixAboOffert{
        color: red;
        padding: 15px 0;
        
    }
    .iconeCloseSmall{
        position: absolute;
        top: 5px;
        right: 15px;
        font-size: 25px;
        color: rgb(161, 161, 161);
        cursor: pointer;
    }
    .titleRabais{
        text-decoration: underline;
        margin: 10px 0;
    }
    .paraRabais{
        margin: 10px 0;
    }
    .dateDesCours{
        margin: 10px 0;
        margin-bottom: 15px;
    }
    .infoLignePrixCol1{
        min-width: 120px;
    }
    .headerBoxPrix{
        padding-bottom: 10px;
    }
    .containerInfoDate{
        position: relative;
        overflow: hidden;
    }
    .boxDate{
        border: solid 2px lightgray;
        padding: 15px;
        border-radius: 5px;
    }
    .boxDate a{
        text-decoration: underline;
        color: blue;
        display: block;
        text-align: right;
        padding-top: 10px;
    }
    .iconeCalendrier{
        color: gray;
        font-size: 30px;
        margin: 0;
        padding: 0;
        text-align: left;
        color: var(--color-primary);
    }
    .boxDateDeCours{
        border: solid 1px lightgray;
        padding: 10px;
        border-radius: 5px;
    }
    .boxDateDeCours h4{
        text-decoration: underline;
        padding-top: 10px;
        padding-bottom: 5px;
    }
    .periodeScolaire{
        margin-top: 15px;
    }
    .buttonFull{
        width: 90%;
        border-radius: 2px;
        font-weight: 400;
        letter-spacing: 2px;
        font-size: 25px;
    }

</style>