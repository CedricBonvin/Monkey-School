<template>     
        <div >
            <loader v-if="displayLoader" />
            <modal v-if="displayModal"
                :text="modalText"
                @close-modal="closeModal"
             />
                 
            <div class="body">
                <!-- SECTION CARTE -->
                <section class="sectionCarte">
                    <h2 class="titleVotrePanier titleSection">Votre panier :</h2>
                     <div>
                        <carte-panier
                            v-for="(item , index ) in panier" :key="item.id"
                            :cours="panier[index]"
                            :panier="panier"
                            @supprimerCarte="deleteCard(index)"
                        />
                     </div>
                    <button class="buttonAjouter">
                        <router-link to="/cours"> AJOUTER UN COURS...</router-link>
                    </button>
                </section>
                <!-- SECTION FRATERIE / PAIEMENT -->
                <div class="frateriePaiement">
                    <section v-if="displaySectionFraterie" class=" section fraterie">
                        <h2 class="underLine">Y'a-t-il une fraterie ?</h2>
                        <div class="boxRadio">
                            <div>
                                <input @click="yesFraterie"  type="radio" name="fraterie" id="yesFraterie" value="true" v-model="isFraterie">
                                <label for="noFraterie">OUI</label>
                            </div>
                            <div>
                                <input @click="noFraterie"  type="radio" name="fraterie" id="noFraterie" value="false" v-model="isFraterie">
                                <label for="noFraterie">NON</label>
                            </div>
                        </div>
                        <!-- Nom eleve  -->
                        <div v-if="isFraterie ==='true'">
                             <hr>
                            <h3 class="titleSelectionFraterie">Qui est de la même Famille...</h3>
                            <div class="boxFraterie">
                                <div v-for="eleve in panier" :key="eleve.id" >
                                    <div v-if="eleve.infoCours.typeCours === 'regulier'">
                                        <input @change="checkRabaisRegulier" type="checkbox" name="isEleve" :value="eleve" v-model="fraterie"   >
                                        <label for=""> {{eleve.eleve.nomEleve}} {{eleve.eleve.prenomEleve}}</label>
                                    </div>
                                </div>
                            </div>
                                <!-- <button class="buttonFull" @click="checkFraterie">Je valide la fraterie</button> -->
                        </div>
                        <div class="error" v-if="error.selectFraterie"> {{ error.selectFraterie }}</div>
                    </section>
                    <!-- PAIEMENT -->
                    <section v-if=" displayPaiment" class="sectionPaiement ">
                        <div class="boxTotalPrix">
                                <p class="titlePrixTotal">TOTAL : </p>
                            <div class="titleBodyTotal">
                                <div class="headerTotal colPaiment">Elève :</div>
                                <div class="headerTotal colRabais">Rabais :</div>
                                <div class="headerTotal colPrix">Prix :</div>
                            </div>
                            <div class="boxBodyTotal" >
                                <div class="bodyTotal" v-for="cours in panier" :key="cours.id">
                                    <div class="colPaiment" >
                                        <p> {{cours.eleve.nomEleve}} </p>
                                        <p>{{ cours.eleve.prenomEleve }}</p>
                                    </div>
                                    <p class="colPaiment colRabais" v-if="!cours.infoCours.rabais">--</p>
                                    <p class="colPaiment colRabais" v-if="cours.infoCours.rabais">{{cours.infoCours.rabais}} %</p>
                                    <p v-if="cours.infoCours.typeCours !== 'Noel'" class="colPaiment colPrix"> CHF {{ cours.infoCours.prixAPaye }} .- </p>
                                    <p v-if="cours.infoCours.typeCours === 'Noel'" class="colPaiment colPrix"> CHF {{ cours.infoCours.prixAPaye}} .- </p>
                                </div>
                            </div>
                            <div class="boxPrixTotal">
                                <div>Prix Total :</div>
                                <div class="prixTotal">CHF. {{ prixTotal }} .-</div>
                            </div>
                            <button @click="paiement"  class="buttonPaiment">INSCRIPTION</button>
                            <p class="accepte">NOUS ACCEPTONS :</p>
                            <img class="carteBanquaire" src="@/assets/images/visa.jpeg" alt="carte Visa">
                            <img class="carteBanquaire" src="@/assets/images/master-card.png" alt=" logo master card">
                            <img class="carteBanquaire" src="@/assets/images/twint.png" alt=" logo twint">
                        </div>
                    </section>
                </div>
            </div>
        </div>
</template>

<script>
import Loader from '../components/forAll/loader.vue'
import Modal from '../components/forAll/modal.vue'
import CartePanier from '../components/pagePanier/cartePanier.vue'
export default {
  components: { CartePanier, Modal, Loader},
    name : "panier",

    data(){
        return{
            panier :  [],
            displaySectionFraterie : false,
            displayPaiment : true,
            isFraterie : undefined,     
            error : {
                fraterie : "",
                selectFraterie : ""
            },
            fraterie : [],
            get prixTotal(){
                let total = 0
                for (let i in this.panier){
                    total += this.panier[i].infoCours.prixAPaye
                }
                return total
            },
            displayModal : false,
            modalText : "",
            displayLoader : false,
            panierVide : false     
        }
    },
    methods : {
        paiement(){
            // ajout de la clef fraterie et de la date d'inscription dans les items du panier si REGULIER
            for (let item of this.panier){
                if (item.infoCours.typeCours === 'regulier'){
                    item.infoCours.fraterie = []
                    item.infoCours.dateInscription = new Date(Date.now()).toLocaleDateString("fr-FR",{day: "numeric", month: "long", year: "numeric" })      
                }else item.infoCours.dateInscription = new Date(Date.now()).toLocaleDateString("fr-FR",{day: "numeric", month: "long", year: "numeric" })      
            }
            // INJECTION DE LA FRATERIE DANS LES ITEMS DU PANIER
            if (this.fraterie.length > 1){
                for (let item of this.panier){
                    for(let frere of this.fraterie){
                        if ( frere.eleve.nomEleve === item.eleve.nomEleve){
                            for (let b of this.fraterie){
                                let frereSoeur = {
                                    nom : b.eleve.nomEleve,
                                    prenom : b.eleve.prenomEleve
                                }
                                item.infoCours.fraterie.push(frereSoeur)
                            }
                        }
                    }
                }
            }
            localStorage.setItem("panier", JSON.stringify(this.panier))
            this.$router.push({path : "/paiement"})
        },
        noFraterie(){
            for (let item of this.panier){
                if(item.infoCours.typeCours === 'regulier'){
                    item.infoCours.rabais = null
                }
            }
            this.displayPaiment = true   
        },
        yesFraterie(){         
             this.displayPaiment = true
             this.fraterie = []          
        },      
        deleteCard(index){
            this.panier.splice(index,1)  
            
            // DISPLAY SECTION FRATERIE OU PAS + RABAIS = NULL 
            let nbrCoursRegulier  = 0
            for (let item of this.panier){
                if (item.infoCours.typeCours === 'regulier'){
                    nbrCoursRegulier += 1
                    item.infoCours.rabais = null
                }
            }        
            nbrCoursRegulier < 2 ? this.displaySectionFraterie = false : this.displaySectionFraterie = true
            this.fraterie = []
        },
        closeModal(){
            this.displayModal = false
        },
        // affiche section fraterie si plusieurs régulier
        checkTypeCours(){
            let nbrCoursRegulier = 0
            for(let item of this.panier){
                if (item.infoCours.typeCours === "regulier"){
                    nbrCoursRegulier ++     
                }
            }
            if (nbrCoursRegulier > 1){
                this.displaySectionFraterie = true                 
            } 
        },
        checkRabaisRegulier(){     
            // efface tous les rabais
            for ( let item of this.panier){
                item.infoCours.rabais = 0
            }           
            if (this.fraterie.length !== 0){
                let nom = this.fraterie[0].eleve.nomEleve        
                let prenom = this.fraterie[0].eleve.prenomEleve  
                let frereSoeur = this.fraterie.length                
                for (let item of this.panier){
                    if (item.eleve.nomEleve === nom && item.eleve.prenomEleve === prenom){
                        frereSoeur < 2 ? item.infoCours.rabais = 0 : null
                        frereSoeur === 2 ? item.infoCours.rabais = 10 : null
                        frereSoeur === 3 ? item.infoCours.rabais = 15 : null
                        frereSoeur >= 4 ? item.infoCours.rabais = 20 : null
                    }
                }
            }    
        },
        getterPrixAPaye(){
            for (let item of this.panier){
                // EVENT
                if (item.infoCours.typeCours === 'Event'){
                    Object.defineProperty(item.infoCours, "prix", { value : 80}) 
                    Object.defineProperty(item.infoCours, 'prixAPaye', {
                        get : function() {
                            return this.prix * this.dateChoisie.length
                        }
                    })
                }
                // REGULIER
                if(item.infoCours.typeCours === 'regulier'){
                    
                    Object.defineProperty(item.infoCours, "prix", { value : 840})
                    Object.defineProperty(item.infoCours, "rabais", { value : null, writable : true }) 
                    Object.defineProperty(item.infoCours, 'prixAPaye', {
                        get : function () {
                            if (this.rabais !== null && item.infoCours.typeCours){
                                return  this.prix - ( this.prix * this.rabais / 100)
                            } else return this.prix        
                        }
                    })
                }
                
            }
        }    
    },
    beforeMount(){
        this.panier = JSON.parse(localStorage.getItem("panier"))  
        this.getterPrixAPaye()   
        this.checkTypeCours() 
    },
}
</script>

<style scoped>
    .section{
        padding-top: 0;
    }
    .body{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        flex-flow: wrap;
        padding: 150px 20px;
        
    }
    .fraterie{
        padding: 20px;
        margin-bottom: 0;
        margin-top: 50px;
    }
    Header{
        background: black;
    }
    .iconePanier{
        padding: 0px;
        color: black;
        margin: 0;
    }
    .boxFraterie{
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        line-height: 2;
    }
    .fraterie h2{
        position: relative;
        display: inline-block;
    }
    .boxRadio{
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
    }
     .boxRadio label{
        padding-left: 10px;
    }
    .titleSelectionFraterie{
        font-style: italic;
        padding: 20px 0;
    }
    h2{
        font-size: 30px;
    }
    
    .boxTotalPrix{
        padding: 20px;
        margin: auto;
    }
    .titleBodyTotal{
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: solid 2px  rgb(187, 187, 187);
        border-top: solid 2px rgb(187, 187, 187);
    }
    .boxBodyTotal{
        border-bottom: solid;
    }
    .bodyTotal{
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        border-bottom: solid 1px lightgray;
        padding-bottom: 10px;
    
    }
    .boxPrixTotal{
        padding-top: 15px;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: bold;
    }
    .titlePrixTotal{
        margin-bottom: 10px;
        font-weight:bold;
        padding-bottom: 1px;
        font-size: 20px;
    }
    .buttonPaiment{
        background: green;
        width: 100%;
        text-align: center;
        color: white;
        border: none;
        padding: 10px;
        margin-top: 20px;
        cursor: pointer;
        transition: .3s;
        font-weight: 500;
        font-size: 1.2rem;
    }
    .buttonPaiment:hover{
        background: rgb(0, 167, 0);
        transform: scale(1.02);
    }
    .carteBanquaire{
        width: 40px;
        height: 30px;
        object-fit: contain;
        margin-right: 10px;
    }
    .accepte{
        font-size: 14px;
        font-weight: bold;
        padding: 20px 0 5px 0;
    }
    .boxRadio{
        padding: 20px 0;
    }
    .error{
        color: red;
        font-style: italic;
        font-size: 14px;
        font-weight: bold;
    }
    .buttonFull{
        font-size: 20px;
    }
    .buttonFull:hover{
        font-size: 20px;
        transform: scale(1.02);
    }
    .buttonAjouter{
        display: block;
        margin:30px auto;
        width: 50%;
        padding: 15px 0;
        font-size: 20px;
        background: var(--color-primary);
        background: green;
        color: white;
        border: none;
        cursor: pointer;
        
        transition : .3s,
    }
    .buttonAjouter:hover{
        transform: scale(1.1);
        font-weight: bold;
     
    }
    .item{
        color: white;
        font-weight: 800;
        letter-spacing: 1px;
    }
    a{
        color: white;
        font-weight: bold;
    }
    .modalPanierVide{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 90%;
        text-align: center;
        transform: translate(-50%, -50%);
        padding: 20px;
        background: white;
        font-size: 30px;
    }
    .prixTotal{
        font-weight: 400;
    }
    .headerTotal{
        font-weight: 400;
        font-size: 20px;
    }
    .colPaiment{
        width: 33%;
    }
    .colPrix{
        width: 80px;
        text-align: right;
    }
    .colRabais{
        text-align: center;
    }
    .sectionCarte{
        width: 90%;     
        background: rgb(255, 255, 255);
        padding-bottom: 20px;
        border: solid 1px lightgray;    
    }
    .sectionPaiement{
        background: white;
        max-width: 500px;
        margin: auto;
        margin-top: 50px;
    }
    .frateriePaiement{
        width: 90%;
        max-width: 500px;
    }
  

    @media screen and (max-width : 500px){
        .fraterie h2{
            font-size: 25px;
        }
        .body{
            padding: 150px 0px;
            width: 100%;
        }
        .sectionCarte{
            /* max-width: 600px; */
            width: 100%;
        }
        .buttonAjouter{
            font-size: 16px;
            width: 80%;
        }
    }
     @media screen and (min-width : 1000px){
        .sectionCarte{
            /* max-width: 600px; */
            width: 58%;
        }
        .body{
            display: flex;
        }
        .fraterie{
            width: 100%;
            margin-top: 0;
            margin-bottom: 20px;
        }
        .sectionPaiement{
            max-width: 400px;
            margin-top: 0;
        }
        .frateriePaiement{
            max-width: 400px;
        }
    }
  

</style>>
