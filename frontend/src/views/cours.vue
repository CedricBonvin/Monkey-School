<template>
  <main>
    <Header 
        title="Nos cours"
        :image="require('@/assets/images/header-cours.jpg')"
    />
    
    <section-recherche /> 

    <!-- SECTION COURS REGULIER -->
    <div id="regulierEnfant" class="sectionRegulier section">
        <h2 class="titleSection">Cours réguliers : <span class="septMai">( Septembre à Mai )</span></h2>
        <div class="boxRegulier">
            <h4 id="regulierEnfant">Enfant :</h4>
            <p class="phraseIntro phraseRegulier"> Pour les enfants qui désirent pratiquer 1 fois par semaine en groupe !</p>
            <div class="boxCardEnfant">

                <!-- CARTE REGULIER ENFANT -->
              <carte-cours 
                    v-for="cours  in regulierEnfant" :key="cours.nom"
                    :cours="cours"
                     >       <!-- Prix parenthèse -->
                    <template v-slot:aboOffert>
                        <span class="aboOffert">( Abo. annuel offert ! )</span>
                    </template>

                            <!-- date des cours -->
                    <template v-slot:dateCours>
                        <p class="titleOfDescrption">Date des cours : 
                            <span @click="afficheDate(cours)" class="dateAffiche">Afficher</span>
                        </p>
                        <div class="dateCours">
                            <div v-if="cours.afficheDate === true" class="dateTableau infoPrix">
                                <div class="boxTitleDate">
                                    <i class=" iconeDate far fa-calendar-alt"></i>
                                    <i @click="afficheDate(cours)" class="closeInfoDate fas fa-times"></i>
                                </div>
                                <p class="italic">Tous nos cours suivent les périodes scolaire.</p>
                                <div class="dateTableau">
                                    <div class="annee">2020</div>
                                    <p > {{ cours.datesCours2020 }}</p>
                                    <div class="annee">2021</div>
                                    <p> {{ cours.datesCours2021 }}</p>
                                </div>
                                <p  class="telechargerDates"><a :href="cours.coursPdf" :download="'Date-' + cours.nom + '.pdf'">Télécharger les dates des cous</a></p>
                            </div>
                        </div>
                    </template>

                        <!-- info prix -->
                    <template v-slot:infoPrix>
                        <div class="boxInfoPrix">
                            <div v-if="cours.displayInfoPrix === true" class="infoPrix">
                                <div class="boxIconePrix">
                                    <i  class="fas fa-info iconeInfo"></i>
                                    <i @click="closeInfoPrix(cours,$event)" class="closeInfoPrix fas fa-times"></i>
                                </div>
                                <p>
                                    L'encadrement, le matériel, et l'entrée à la salle sont compris dans le prix du cours. <br>
                                <strong class="red"> Nous offrons l'abonnement annuel à la salle d'une valeur de <span class="prixAbo">{{ cours.valeurAbo}}</span> à chaque participant..!!</strong>
                                
                                </p>
                            </div>
                        </div>                  
                    </template>
              </carte-cours>
            <!-- FIN--- CARTE REGULIER ENFANT -->

            </div>
            <hr>
            <h4 id="regulierAdulte">Adulte : </h4>
             <p class="phraseIntro phraseRegulier"> Pour les adultes qui désirent pratiquer 1 fois par semaine en groupe !</p>
             <!-- CARTE REGULIER ADULTE -->
            <carte-cours v-for="cours  in regulierAdulte" :key="cours.nom"
                :cours="cours"
            >
                    <!-- SLOT Prix parenthèse -->
                <template v-slot:aboOffert>
                    <span class="aboOffert">( Abo. annuel offert ! )</span>
                </template>

                          <!-- SLOT date des cours -->
                    <template v-slot:dateCours>
                        <p class="titleOfDescrption">Date des cours : 
                            <span @click="afficheDate(cours)" class="dateAffiche">Afficher</span>
                        </p>
                        <div class="dateCours">
                            <div v-if="cours.afficheDate === true" class="dateTableau infoPrix">
                                <div class="boxTitleDate">
                                    <i class=" iconeDate far fa-calendar-alt"></i>
                                    <i @click="afficheDate(cours)" class="closeInfoDate fas fa-times"></i>
                                </div>
                                <p class="italic">Tous nos cours suivent les périodes scolaire.</p>
                                <div class="dateTableau">
                                    <div class="annee">2020</div>
                                    <p > {{ cours.datesCours2020 }}</p>
                                    <div class="annee">2021</div>
                                    <p> {{ cours.datesCours2021 }}</p>
                                </div>
                            </div>
                        </div>
                    </template>

                         <!-- SLOT info prix -->
                    <template v-slot:infoPrix>
                        <div class="boxInfoPrix">
                            <div v-if="cours.displayInfoPrix === true" class="infoPrix">
                                <div class="boxIconePrix">
                                    <i  class="fas fa-info iconeInfo"></i>
                                    <i @click="closeInfoPrix(cours,$event)" class="closeInfoPrix fas fa-times"></i>
                                </div>
                                <p>
                                    L'encadrement, le matériel, et l'entrée à la salle sont compris dans le prix du cours. <br>
                                <strong class="red"> Nous offrons l'abonnement annuel à la salle d'une valeur de <span class="prixAbo">{{ cours.valeurAbo}}</span> à chaque participant..!!</strong>
                                </p>
                            </div>
                        </div>                  
                    </template>

            </carte-cours>
                 <!-- FIN--- CARTE REGULIER ADULTE -->

        </div>
    </div>

    <!-- SECTION COURS PRIVEE -->
    <div class="section">
        <h2 id="privee" class="titleSection">Cours privée :</h2>
        <p class="phraseIntro">Pour tous ceux qui désirent apprendre à leur rythme..!</p>
        <carte-cours v-for="cours  in coursPrive" :key="cours.nom"
                :cours="cours"
        >
            <!-- SLOT info prix -->
            <template v-slot:infoPrix>
                <div class="boxInfoPrix">
                    <div v-if="cours.displayInfoPrix === true" class="infoPrix">
                        <div class="boxIconePrix">
                            <i  class="fas fa-info iconeInfo"></i>
                            <i @click="closeInfoPrix(cours,$event)" class="closeInfoPrix fas fa-times"></i>
                        </div>
                        <p>
                            L'encadrement, le matériel, et l'entrée à la salle sont compris dans le prix du cours. <br>
                        </p>
                        <h5>Prix : </h5>
                        <ul>
                            <li>1 personne : CHF 80.- / heure</li>
                            <li>2 personne : CHF 90.- / heure</li>
                            <li>3 personne : CHF 100.- / heure</li>
                            <li>4 personne : CHF 110.- / heure</li>
                        </ul>
                        <p>* Minimum 1 heure</p>
                    </div>
                </div>                  
            </template> 
        </carte-cours>
    </div>

      <!-- SECTION AUTONOMIE -->
    <div class="section">
        <h2 id="autonomie" class="titleSection">Autonomie en salle :</h2>
        <p class="phraseIntro">Pour tous ceux qui désirent apprendre les techniques d'assurage afin d'être autonome..!</p>
        <div class="sectionAutonomie">
            <carte-cours v-for="cours  in autonomie" :key="cours.nom"
                    :cours="cours"
                />
        </div>
    </div>

  </main>
</template>

<script>
import CardEvent from '../components/cardEvent.vue'
import Header from '../components/forAll/header.vue'
import CarteCours from '../components/pageCours/carteCours.vue'
import SectionRecherche from '../components/pageCours/sectionRecherche.vue'
let Bdd = require("../bdd")

export default {
    components: { Header, SectionRecherche, CarteCours, CardEvent },
    data(){
        return{
            regulierEnfant : Bdd.bddCours.regulierEnfant,
            regulierAdulte : Bdd.bddCours.regulierAdulte,
            coursPrive : Bdd.bddCours.coursPrive,
            autonomie : Bdd.bddCours.autonomie,
        }
    },
    methods  : {
        afficheDate(cours){
            if(cours.afficheDate === false){
                cours.afficheDate = true
            }else cours.afficheDate = false
        },
         closeInfoPrix(cours,e){
            e.stopImmediatePropagation()
            cours.displayInfoPrix = false
        },
        download(){
            fetch("http://localhost:3000/test")
            .then(response => response.json())
            .then(res => {console.log(res)})
        }
    }
}

  
</script>

<style scoped>
    .section{
        margin-top: 200px;
        padding-bottom: 10px;
    }
    .septMai{
        font-style: italic;
        font-size: 14px;
    }
    hr{
      margin: 20px 20%;
    }
    h4{
        display: inline-block;
        position: relative;
        color: gray;
        text-align: left;
        font-size: calc(30px + 1.2vw);
        margin-left: 20px;
    
        padding: 0;
    }
    h4:before{
        content: "";
        position: absolute;
        bottom: 0 ;
        width: 50%;
        border: solid 2px var(--color-secondary);
    }
    .boxCardEnfant{
      display: flex;
      align-items: flex-start;
      flex-flow: wrap;
    }
    .sectionAutonomie{
        display: flex;
        flex-flow: wrap;
    }
    .aboOffert{
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    margin-left: 5px;
    line-height: 1.2rem;
    }
    ul{
        list-style-type: disc;
        margin-left: 2em;
        margin-bottom: 10px;
    }
    h5{
        font-size: 18px;
        margin: 10px 0;
        text-decoration: underline;
    }
    .phraseIntro{
        font-size: calc(16px + 1vw);
        font-style: italic;
        padding-left: 20px;
    }
    .telechargerDates{
        text-decoration: underline;
        color : blue;
        text-align: right;
        padding-top: 10px;
        cursor: pointer;
        transition: .3s;
    }
    .telechargerDates:hover{
        color: rgba(0, 0, 255, 0.753);
        transform: scale(1.08);
        transform-origin: right;
    }
    .prixAbo{
        text-decoration: underline;
        font-size: 1.05rem;
    }
    .phraseRegulier{
        margin-top: 20px;
    }

</style>