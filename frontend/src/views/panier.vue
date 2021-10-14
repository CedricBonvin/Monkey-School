<template>
    <div>
        <loader v-if="displayLoader" />
        <modal v-if="displayModal"
            :text="modalText"
            @close-modal="closeModal"
         />
        <Header 
            title="Panier"
        />
        <!-- CARTE -->
        <section>
             <i class="fas fa-shopping-basket iconePanier"></i>
            <carte-panier
                v-for="(item , index ) in panier.cours" :key="item.id"
                :cours="panier.cours[index]"
                @supprimerCarte="deleteCard(index)"
             />
        </section>

        <button class="buttonAjouter">
            <router-link to="/cours"> AJOUTER UN COURS...</router-link>
        </button>

        <!-- FRATERIE -->
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
                    <div v-for="eleve in panier.cours" :key="eleve.nom" >          
                        <div v-if="eleve.typeCours === 'regulier'">
                            <input @change="checkForRabais" type="checkbox" name="isEleve" :value="eleve" v-model="elevePanierChoice"   >
                            <label for=""> {{eleve.nomEleve}} {{eleve.prenom}}</label>
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
                       <div>Eleve :</div>
                       <div>Rabais :</div>
                       <div>Prix :</div>
                    </div>
                    <div class="boxBodyTotal" >
                        <div class="bodyTotal" v-for="eleve in panier.cours" :key="eleve.nom">
                            <p> {{eleve.nomEleve}} {{ eleve.prenom }}</p>
                            <p v-if="!eleve.rabais">--</p>
                            <p v-if="eleve.rabais">{{eleve.rabais}} %</p>
                            <p> CHF {{ eleve.prixPaye}} .- </p>
                        </div>
                    </div>
                    <div class="boxPrixTotal">
                        <div>Prix Total :</div>
                        <div>CHF {{ prixTotal }} .-</div>
                    </div>
                    <button @click="paiement"  class="buttonPaiment">INSCRIPTION</button>   
                    <p class="accepte">NOUS ACCEPTONS :</p>
                    <img class="carteBanquaire" src="@/assets/images/visa.jpeg" alt="carte Visa">
                    <img class="carteBanquaire" src="@/assets/images/master-card.png" alt=" logo master card">
                    <img class="carteBanquaire" src="@/assets/images/twint.png" alt=" logo twint">
                </div>
        </section>
    </div>
</template>

<script>
import Header from '../components/forAll/header.vue'
import Loader from '../components/forAll/loader.vue'
import Modal from '../components/forAll/modal.vue'
import CartePanier from '../components/pagePanier/cartePanier.vue'
export default {
  components: { Header, CartePanier, Modal, Loader},
    name : "panier",

    data(){
        return{
            panier :  {},
            displaySectionFraterie : false,
            displayPaiment : true,
            isFraterie : undefined,     
            error : {
                fraterie : "",
                selectFraterie : ""
            },
            elevePanierChoice : [],
            get prixTotal(){
                let total = 0
                for (let i in this.panier.cours){
                    total += this.panier.cours[i].prixPaye
                }
                return total
            },
            displayModal : false,
            modalText : "",
            displayLoader : false      
        }
    },
    methods : {
        paiement(){
            localStorage.setItem("panier", JSON.stringify(this.panier))
            this.$router.push({path : "/paiement"})
            // this.displayLoader = true
            // let sendTableau = []
            // // preparation des objets à envoyer
            // for (let i in this.panier){
            //     let eleve = this.panier[i]
            //     let obj = {
            //         typeCours : eleve.typeCours,
            //         nomCours : eleve.nomCours,
            //         nomEleve : eleve.nomEleve,
            //         prenomEleve : eleve.prenom,
            //         adresseEleve : eleve.adresse,
            //         ageEleve : eleve.ageEleve,
            //         mail : eleve.mail,
            //         npa : eleve.npa,
            //         phone : eleve.phone,
            //         prixCours : eleve.prixCours,
            //         prixPaye : eleve.prixPaye,
            //         rabais : eleve.rabais,
            //         ville : eleve.ville,
            //         remarque : eleve.remarque
            //     }
            //     sendTableau.push(obj)
            // }
            // // ENVOIE
            // fetch("http://localhost:3000/new-inscription",{
            //     method : "POST",
            //     body : JSON.stringify(sendTableau),
            //     headers: {"Content-type": "application/json; charset=UTF-8",}
            // })
            // .then( response => {
            //     this.displayLoader = false
            //     this.displayModal = true
            //     if (response.status === 200){
            //         this.modalText = "Merci beaucoup votre inscription, nous vous avons envoyé un mail de confirmation..!!"
            //     } else this.modalText = "Désolé ! Nous rencontrons des problèmes.. Veuillez réeassayer !"


            // })
            // .catch(() => {
            //     this.displayLoader = false
            //     this.displayModal = true
            //     this.modalText = "Désolé ! Nous rencontrons des problèmes.. Veuillez réeassayer !"
            // })
        },
        noFraterie(){
            for (let i = 0; i < this.panier.cours.length; i++){
                this.panier.cours[i].rabais = null
                this.panier.cours[i].prixPaye = this.panier.cours[i].prixCours
            }
                this.displayPaiment = true   
        },
        yesFraterie(){
             this.displayPaiment = true
             this.elevePanierChoice = []
        },      
        deleteCard(index){
            this.panier.cours.splice(index,1)
           
            this.elevePanierChoice = []

            for (let i in this.panier.cours){
                this.panier.cours[i].rabais = null
                this.panier.cours[i].prixPaye = this.panier.cours[i].prixCours
            }
                
            if (this.panier.cours.length < 2){
                this.displaySectionFraterie = false
                this.displayPaiment = true
            }            
        },
        closeModal(){
            this.displayModal = false
        },
        // affiche section fraterie si plusieurs régulier
        checkTypeCours(){
            let nbrCoursRegulier = 0
            for(let i in this.panier.cours){
                if (this.panier.cours[i].typeCours === "regulier"){
                    nbrCoursRegulier ++     
                }
            }
            if (nbrCoursRegulier > 1){
                this.displaySectionFraterie = true
                this.displayPaiment = false  
            } 
        },
        checkForRabais(){

            // effacer les rabais et réinitialiser le Prix à payé
            for (let i = 0; i < this.panier.cours.length; i++){
                this.panier.cours[i].rabais = null
                this.panier.cours[i].prixPaye = this.panier.cours[i].prixCours
            }
            // ajout du rabais dans le panier 
            if (this.panier.cours.length  > 1){
                this.error.selectFraterie = ""
                this.displayPaiment = true

                // rabais 2 élèves
                if(this.elevePanierChoice.length === 2){  
                    console.log(this.elevePanierChoice)
                    let lastEleve = this.elevePanierChoice.length
                    let eleve = this.elevePanierChoice[lastEleve -1]
                    eleve.rabais = 10
                    eleve.prixPaye =  eleve.prixCours  - (eleve.prixCours * eleve.rabais / 100)
                }
                // rabais 3 élèves
                // if(this.panier.cours.length === 3){                
                //     let lastEleve = this.elevePanierChoice.length
                //     let eleve = this.elevePanierChoice[lastEleve -1]
                //     eleve.rabais = 15
                //     eleve.prixPaye =  eleve.prixCours  - (eleve.prixCours * eleve.rabais / 100)
                // }
                // // rabais 4 élèves
                // if(this.panier.cours.length === 4){                  
                //     let lastEleve = this.elevePanierChoice.length
                //     let eleve = this.elevePanierChoice[lastEleve -1]
                //     eleve.rabais = 20
                //     eleve.prixPaye =  eleve.prixCours  - (eleve.prixCours * eleve.rabais / 100)
                // }
            }  
            // else if ( this.elevePanierChoice.length  < 2){
            //     this.error.selectFraterie = "! Veuillez sélectionner au minimum 2 élèves"
            //     this.displayPaiment = false
            // }
        },
    },
    beforeMount(){
        this.panier = JSON.parse(localStorage.getItem("panier"))     
        this.checkTypeCours()
    },
    mounted(){
        console.log(this.panier)
    }
}
</script>

<style scoped>
    .section{
        padding-top: 0;
    }
    .fraterie{
        padding: 20px;
        margin-bottom: 0;
        margin-top: 0;
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
        justify-content: space-evenly;
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
    .sectionPaiement{
        background: white;
        margin-top: 0;
        width: 80%;
        max-width: 500px;
        margin: auto;
        margin-top: 20px;
    }
    .boxTotalPrix{
        padding: 20px;
        margin: auto;
        width: 100%;
        max-width: 500px;
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
        font-size: 16px;
        background: var(--color-primary);
        color: white;
        border: none;
        cursor: pointer;
        
        transition : .3s,
    }
    .buttonAjouter:hover{
        transform: scale(1.1);
        font-weight: bold;
     
    }
    a{
        color: white;
        font-weight: 800;
        letter-spacing: 1px;
    }
    
  

</style>>
