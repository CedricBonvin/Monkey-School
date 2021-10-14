<template>
    
    <div>
        <modal 
            v-if="modal.displayModal"
            :text="modal.modalText"
            :modal="modal"
        />
        <div class="sectionPaiement">
            <h1 class="underLine">RECAPITULATIF / PAIEMENT..</h1>
            <section class="containerRecapitulatif">
                <h2>RECAPITULATIF : </h2>
                <div class="boxRecapitulatif">
                    <div class="header">
                        <p class="col">Eleve</p>
                        <p class="col">Cours</p>
                        <p class="col">Rabais</p>
                        <p class=" colPrix">Prix</p>
                    </div>
                    <div class="recapNom">
                        <div v-for="item in this.panier" :key="item._id" class="recapitulatifBody">
                            <p class="col">{{item.nomEleve}} {{ item.prenom}}</p>
                            <p class="col"> {{ item.nomCours}}</p>
                            <p class="col"> {{item.rabais}} %</p>
                            <p class="colPrix"> CHF. {{ item.prixPaye}}.-</p>
                        </div>
                    </div>
                </div>
                <div class="boxTotal">
                    <div class="total">MONTANT A REGLER : <span class="montantTotal">CHF. {{totalPrice}}.-</span></div>
                </div>
            </section>
            <section class="containerPaiement" >
                <h2>PAIEMENT :</h2>
                <div class="boxPaiement">
                    <div class="virement">
                        <p>Virement banquaire</p>
                        <i class="fas fa-university"></i>
                        <input class="inputCheckPaiement" type="radio" value="virement" name="paiement" v-model="paiementChoice">
                    </div>
                    <div class="boxCarte">
                        <p>carte</p>
                        <i class="fas fa-money-check-alt"></i>
                        <input class="inputCheckPaiement" type="radio" value="carte" name="paiement" v-model="paiementChoice">
                    </div>
                </div>
                    <p class="error" v-if="error.choicePaiement"> {{error.choicePaiement }}</p>
            </section>
        
             <button @click="validation" class="buttonValider">VALIDER L'INSCRIPTION !</button>
        </div>
        
    </div>
</template>

<script>
import modal from '../components/forAll/modal.vue'
export default {
  components: { modal },
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
            totalPrice : 0
        }
    },
    methods : {
        validation(){
            console.log(this.paiementChoice)
            for (let i in this.error){
                this.error[i] = ""
            }
            if(!this.paiementChoice){
                this.error.choicePaiement = "Veuillez choisir un mode de paiement"
            } if(this.paiementChoice === "virement") {
                this.modal.displayModal = true
                this.modal.modalText = "Merci pour votre inscription !! Nous vous avons envoyé un mail de confirmation avec les coordonées de paiement"
            } else if( this.paiementChoice === "carte") {
                this.modal.displayModal = true
                this.modal.modalText = "Et tranquille ..... le mode de paiment par carte n'est pas encore actif...!!"

            }

        },
        totalAmount(){
            for (let item of this.panier){
                this.totalPrice += item.prixPaye
            }   
        }
    },
    beforeMount(){
        this.panier = JSON.parse(localStorage.getItem("panier"))
        this.totalAmount()

    }
}
</script>

<style scoped>
    .sectionPaiement{
        padding: 100px 20px;
        background: white;
    }
   h1{
       display: inline-block;
       position: relative;
       padding: 20px 0;
   }
   .containerRecapitulatif{
       margin-top: 50px;
   }
   .boxRecapitulatif{
       border: solid 1px lightgray;
        padding: 10px;

   }
   .recapitulatifBody{
       display: flex;
       justify-content: space-between;
       padding: 5px 0;
   }
   .recapNom{
       padding: 20px 0;
   }
   .header{
       display: flex;
       flex-flow: row wrap;
       justify-content: space-between;
       border-bottom: solid 1px lightgray;
       padding: 5px 0;
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
       justify-content: space-evenly;
       border: solid 1px lightgray;
       padding: 20px;
   }
   i{
       color: var(--color-primary);
   }
   .buttonValider{
       display: block;
       margin: auto;
        background: green;
        width: 100%;
        max-width: 300px;
        text-align: center;
        color: white;
        border: none;
        padding: 20px;
        margin-top: 50px;
        cursor: pointer;
        transition: .3s;
        font-weight: 500;
        font-size: 1.2rem;
    }
    .buttonValider:hover{
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
        border: solid 1px lightgray;
        border-top: none;
        position: relative;
        right: 0;
    }
    .montantTotal{
        font-weight: bold;
        font-size: 1.2rem;
    }
    .inputCheckPaiement{
        display: block;
        margin: auto;    
    }
    .error{
        font-size: 1.3rem;
        color: red;
        font-weight: bold;
    }
</style>