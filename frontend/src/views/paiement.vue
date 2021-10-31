<template>
    
    <div class="body">
        <loader v-if="displayLoader"/>
        <modal 
            v-if="modal.displayModal"
            :text="modal.modalText"
            :modal="modal"
            @close-modal="closemodal"
        />
        <div class="sectionPaiement">

            <!-- RECAPITULATIF -->
            <h1 class=" titleSection">RECAPITULATIF // PAIEMENT..</h1>
            <section class="containerRecapitulatif">
                <div class="recap">
                    <h2>RECAPITULATIF : </h2>
                    <div class="boxRecapitulatif">
                        <div class="header">
                            <p class="col recapTitle">ELEVE</p>
                            <p class="col recapTitle">COURS</p>
                            <p class="col recapTitle">RABAIS</p>
                            <p class=" colPrix recapTitle">PRIX</p>
                        </div>
                        <div class="recapNom">
                            <div v-for="item in this.panier" :key="item._id" class="recapitulatifBody">
                                <p class="col">{{item.eleve.nomEleve}} {{ item.eleve.prenom}}</p>
                                <p class="col"> {{ item.infoCours.nomCours}}</p>
                                <p v-if="item.infoCours.rabais" class="col"> {{item.infoCours.rabais}} %</p>
                                <p v-if="item.infoCours.rabais < 1" class="col">-</p>
                                <p class="colPrix"> CHF. {{ item.infoCours.prixAPaye}}.-</p>
                            </div>
                        </div>
                    </div>
                <div class="boxTotal">
                    <div class="total">MONTANT A REGLER : <span class="montantTotal">CHF. {{totalPrice}}.-</span></div>
                </div>
                </div>
            </section>

            <!-- PAIEMENT -->
            <div class="paiement">
                <section class="containerPaiement" >
                    <h2>PAIEMENT :</h2>
                    <div class="boxPaiement">
                        <p class="modePaiement">Mode de paiement :</p>
                        <div class="virement">
                            <i class="fas fa-university"></i>
                            <label for="banque" class="titleCarte">Virement bancaire</label>
                            <input id="banque" class="inputCheckPaiement" type="radio" value="virement" name="paiement" v-model="paiementChoice">
                        </div>
                        <div class="virement">
                            <i class="fas fa-money-check-alt"></i>
                            <label for="carte" class="titleCarte">Carte</label>
                            <input id="carte" class="inputCheckPaiement" type="radio" value="carte" name="paiement" v-model="paiementChoice">
                        </div>
                    </div>
                        <p class="error" v-if="error.choicePaiement"> {{error.choicePaiement }}</p>
                </section>
                <!-- VIREMENT -->
                <section v-if="paiementChoice === 'virement'">
                    <sectionvirement
                        :coordonneePaiement="coordonneePaiement"
                        :formError="formError"
                
                    />
                </section>
             <div class="boxButton">
                 <router-link class="rouerLink" to="/panier"><button class="button backPanier" >RETOUR PANIER</button></router-link>
                 <button @click="validation" class="button">VALIDER L'INSCRIPTION !</button>
             </div>
            </div>
        </div> 
    </div>
</template>

<script>
import Loader from '../components/forAll/loader.vue'
import modal from '../components/forAll/modal.vue'
import sectionvirement from '../components/pagePaiement/sectionVirement.vue'
export default {
  components: { modal, sectionvirement, Loader },
    name : "paiement",
    data(){
        return{
            panier :[],
            paiementChoice : "",
            error : {
                choicePaiement : ""
            },
            modal : {
                displayModal : false,
                modalText : ""

            },
            totalPrice : 0,    
            formError : {
                nom : "",
                prennom : "",
                npa : "",
                ville : "",
                adresse : "",
                mail : "",
                phone : "",
            },
            coordonneePaiement :{},
            displayLoader : false
        }
    },
    methods : {
        validation(){          
            if (this.testFormulaire()){
                for ( let item of this.panier){
                    item.paiement = { ...this.coordonneePaiement, modePaiement : this.paiementChoice, totalAPaye : this.totalPrice}
                    if (item.infoCours.typeCours === "Event"){
                        item.infoCours.dateChoisieString = []
                        for (let date of item.infoCours.dateChoisie){
                            console.log(date)
                            let dateString = new Date(date).toLocaleDateString("fr-FR",{day : "numeric", month : "long"})
                            item.infoCours.dateChoisieString.push(dateString)
                        }
                    }
                }
                 // ENVOIE  
                this.displayLoader = true     
                fetch(`${this.$store.state.HOST}/new-inscription`,{
                    method : "POST",
                    body : JSON.stringify(this.panier),
                    headers: {"Content-type": "application/json; charset=UTF-8",}
                })
                .then( response => {
                    if (response.status === 200){
                        this.displayLoader = false
                        this.modal.displayModal = true
                        this.modal.modalText = "Merci beaucoup pour votre inscription, nous vous avons envoyé un mail de confirmation..!!"
                    } else {
                        this.displayLoader = false
                        this.modal.displayModal = true
                        this.modal.modalText = "Désolé ! Nous rencontrons des problèmes.. Veuillez réeassayer !"
                    }
                })
                .catch(() => {
                    this.modal.displayModal = true
                    this.modal.modalText = "Désolé ! Nous rencontrons des problèmes.. Veuillez réeassayer !"
                })
            }
            console.log(this.panier)
        },
        totalAmount(){
            for (let item of this.panier){
                this.totalPrice += item.infoCours.prixAPaye
            }   
        },
        testFormulaire(){
            let valid = true

            for (let item in this.formError){
                this.formError[item] = ""
            }

            // NOM
            if (!this.coordonneePaiement.nom){
                valid = false
                this.formError.nom = " ! Veuillez saisir le champ"
            }
            // PRENOM
            if (!this.coordonneePaiement.prenom){
                valid = false
                this.formError.prenom = " ! Veuillez saisir le champ"
            }
            // NPA
            if (!this.coordonneePaiement.npa){
                valid = false
                this.formError.npa = " ! NPA"
            }
            // VILLE
            if (!this.coordonneePaiement.ville){
                valid = false
                this.formError.ville = " ! Veuillez saisir le champ"
            }
            // ADRESSE
            if (!this.coordonneePaiement.adresse){
                valid = false
                this.formError.adresse = " ! Veuillez saisir le champ"
            }
            // MAIL
            if (!this.coordonneePaiement.mail){
                valid = false
                this.formError.mail = " ! Veuillez saisir le champ"
            }
            // PHONE
            if (!this.coordonneePaiement.phone){
                valid = false
                this.formError.phone = " ! Veuillez saisir le champ"
            }

            if(valid){
                return true
            }else return false
        },
        closemodal(){
            this.modal.displayModal = false
        },
    },
    beforeMount(){
        this.panier = JSON.parse(localStorage.getItem("panier"))
        this.totalAmount()
    },
    mounted(){
        document.title = "Paiement"
    }
}
</script>

<style scoped>
    .body{
        padding: 150px 20px;
        padding-bottom: 100px;
    }
    .sectionPaiement{
        position: relative;
        padding: 10px 20px;
        background: white;  
        padding-bottom: 50px;  
    }
   h1{
       display: inline-block;
       padding: 20px 0;
       position: absolute;
       top: 0;
       transform: translateY(-50%);
       padding-left: 10px;

   }
   h2{
       position: relative;
       display: inline-block;
       font-weight: bold;
       opacity: 70%;
       font-style: italic;
       margin-bottom: 10px;
       padding-bottom: 5px;
   }
   h2:after{
       content: "";
       position: absolute;
       width: 50%;
       bottom: 0;
       left: 0;
       border-bottom: solid 3px var(--color-primary);
   }
   .containerRecapitulatif{
       margin-top: 80px;
   }
   .boxRecapitulatif{
        background: rgb(240, 240, 240);

   }
   .recapitulatifBody{
       display: flex;
       justify-content: space-between;
       padding: 10px 10px;
       border-bottom: solid 1px lightgray;
   }
   .recapNom{
       padding: 20px 0;
   }
   .header{
       display: flex;
       flex-flow: row wrap;
       justify-content: space-between;
       border-bottom: solid 1px lightgray;
       background:var(--color-primary);
       color: white;
       padding: 10px 10px;
   }
   .col{
       width: 25%;
   }
   .colPrix{
       width: 15%;
   }
  
   .containerPaiement{
       margin-top: 50px;
       
   }
   .boxPaiement{
       display: flex;
       flex-flow: wrap;
       justify-content: space-evenly;
       padding: 20px;
       background: rgb(238, 237, 237);
   }
   i{
       color: var(--color-primary);
   }
   .button{
        display: inline-block;
        background: green;
        width: 100%;
        max-width: 300px;
        text-align: center;
        color: white;
        border: none;
        padding: 20px;
        margin-top: 80px;
        border-radius: 3px;
        cursor: pointer;
        transition: .3s;
        font-weight: 500;
        font-size: 1.2rem;
    }
    .button:hover{
        background: rgb(0, 167, 0);
        transform: scale(1.02);
    }
    .boxTotal{
        display: flex;
        justify-content: flex-end;
    }
    .total{
        display: inline-block;
        padding: 20px;
        border-top: rgb(211, 211, 211) 1px solid;
        position: relative;
        right: 0;
        background: rgb(240, 240, 240);
    }
    .montantTotal{
        font-weight: bold;
        font-size: 1.2rem;
    }
  
    .error{
        font-size: 1.3rem;
        color: red;
        font-weight: bold;
    }
    .titleCarte{
        font-weight: bold;
        opacity: 70%;
        font-size: 20px;
        text-align: center;
        padding: 0 10px;
    }
    .virement{
        display: flex;
        align-items: center;
    }
    i{
        font-size: 30px;
        margin: 0;
        padding: 0;
    }
    label, input{
        cursor: pointer;
    }
    .modePaiement{
        width: 100%;
        font-size: 20px;
        padding-bottom: 30px;
        text-decoration: underline rgb(190, 190, 190);
    }
    .recapTitle{
        font-weight: 500;
    }
    .backPanier{
        background: rgb(204, 10, 10);
        color: white;
    }
    .backPanier:hover{
        background: rgb(228, 36, 36);    
    }
    a{
        color: white;
        font-weight: bold;
    }
    .boxButton{
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
    }
    .rouerLink{
        display: inline-block;
    }



    @media  screen and (max-width : 500px) {
     
        .titleCarte{
            font-size: 16px;
        }
        .virement{
            margin-top: 10px;
            padding: 0 10px;
        }
    }

    @media  screen and (max-width : 600px) {
        .boxButton{
            display: flex;
            flex-flow: column;
            align-items: center;
            margin: 20px 0;
        }
        .button{
            margin: 20px 0;
        }
    }
    
    @media  screen and (min-width : 800px) {
        .sectionPaiement{
            margin: auto;
        }
        .recap, .paiement{
            width: 70%;
            margin: auto;
            max-width: 800px;
        }
        .recap{
            margin-top: 120px;
        }
        
    }
</style>