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
                    v-for="(item , index ) in panier" :key="item.id"
                    :cours="panier[index]"
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
                        <div v-for="eleve in panier" :key="eleve.id" >
                            <div v-if="eleve.infoCours.typeCours === 'regulier'">
                                <input @change="checkForRabais" type="checkbox" name="isEleve" :value="eleve" v-model="fraterie"   >
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
                        <div class="headerTotal">Elève :</div>
                        <div class="headerTotal">Rabais :</div>
                        <div class="headerTotal">Prix :</div>
                    </div>
                    <div class="boxBodyTotal" >
                        <div class="bodyTotal" v-for="cours in panier" :key="cours.id">
                            <div >
                                <p> {{cours.eleve.nomEleve}} </p>
                                <p>{{ cours.eleve.prenomEleve }}</p>
                            </div>
                            <p v-if="!cours.infoCours.rabais">--</p>
                            <p v-if="cours.infoCours.rabais">{{cours.infoCours.rabais}} %</p>
                            <p> CHF {{ cours.infoCours.prixAPaye }} .- </p>
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
            localStorage.setItem("panier", JSON.stringify(this.panier))
            // this.$router.push({path : "/paiement"})
            //  this.displayLoader = true

            // ajout de la clef fraterie et de la date d'inscription dans les items du panier
            for (let item in this.panier){
                this.panier[item].eleve.fraterie = []
                this.panier[item].infoCours.dateInscription = Date.now()
            }
            // INJECTION DE LA FRATERIE DANS LES ITEMS DU PANIER
            for (let item in this.panier){
                for(let i in this.fraterie){
                    if ( this.fraterie[i].eleve.nomEleve === this.panier[item].eleve.nomEleve){
                        for (let b in this.fraterie){
                            let frereSoeur = {
                                nom : this.fraterie[b].eleve.nomEleve,
                                prenom : this.fraterie[b].eleve.prenomEleve
                            }
                            this.panier[item].eleve.fraterie.push(frereSoeur)
                        }
                    }
                }
            }
                
             // ENVOIE       
            fetch("http://localhost:3000/new-inscription",{
                method : "POST",
                body : JSON.stringify(this.panier),
                headers: {"Content-type": "application/json; charset=UTF-8",}
            })
            .then( response => {
                this.displayLoader = false
                this.displayModal = true
                if (response.status === 200){
                    this.modalText = "Merci beaucoup pour votre inscription, nous vous avons envoyé un mail de confirmation..!!"
                } else this.modalText = "Désolé ! Nous rencontrons des problèmes.. Veuillez réeassayer !"
            })
            .catch(() => {
                this.displayLoader = false
                this.displayModal = true
                this.modalText = "Désolé ! Nous rencontrons des problèmes.. Veuillez réeassayer !"
            })
        },
        noFraterie(){
            for (let i = 0; i < this.panier.length; i++){
                this.panier[i].infoCours.rabais = null
                this.panier[i].infoCours.prixAPaye = this.panier[i].infoCours.prix
            }
                this.displayPaiment = true   
        },
        yesFraterie(){
            
            for (let i = 0; i < this.panier.length; i++){
                this.panier[i].infoCours.rabais = null
                this.panier[i].infoCours.prixAPaye = this.panier[i].infoCours.prix
            }
            this.displayPaiment = true
            this.fraterie = []
             
        },      
        deleteCard(index){
            this.panier.splice(index,1)
           
            this.fraterie = []

            for (let i in this.panier){
                this.panier[i].infoCours.rabais = null
                this.panier[i].infoCours.prixAPaye = this.panier[i].infoCours.prix
            }
                
            if (this.panier.length < 2){
                this.displaySectionFraterie = false
                this.displayPaiment = true
            } 

            if (this.panier.length === 0){
                localStorage.removeItem("panier")
            }else{
                localStorage.setItem("panier",JSON.stringify(this.panier))          
            }
        },
        closeModal(){
            this.displayModal = false
        },
        // affiche section fraterie si plusieurs régulier
        checkTypeCours(){
            let nbrCoursRegulier = 0
            for(let i in this.panier){
                if (this.panier[i].infoCours.typeCours === "regulier"){
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
            for (let i = 0; i < this.panier.length; i++){
                this.panier[i].infoCours.rabais = null
                 this.panier[i].infoCours.prixAPaye = this.panier[i].infoCours.prix
            }
            // ajout du rabais dans le panier 
            if (this.panier.length  > 1){
                this.error.selectFraterie = ""
                this.displayPaiment = true

                // rabais 2 élèves
                if(this.fraterie.length === 2){  
                    let nomFirstFraterie = this.fraterie[0].eleve.nomEleve
                    let prenomFirstFraterie = this.fraterie[0].eleve.prenomEleve

                    for(let item in this.panier){
                       let cours = this.panier[item] 
                        if (cours.eleve.nomEleve === nomFirstFraterie && cours.eleve.prenomEleve === prenomFirstFraterie){
                            cours.infoCours.rabais = 10
                            cours.infoCours.prixAPaye = cours.infoCours.prix - ( cours.infoCours.prix * cours.infoCours.rabais / 100)
                        }
                    }
                }
                // rabais 3 élèves
                if(this.fraterie.length === 3){  
                    let nomFirstFraterie = this.fraterie[0].eleve.nomEleve
                    let prenomFirstFraterie = this.fraterie[0].eleve.prenomEleve

                    for(let item in this.panier){
                       let cours = this.panier[item] 
                        if (cours.eleve.nomEleve === nomFirstFraterie && cours.eleve.prenomEleve === prenomFirstFraterie){
                            cours.infoCours.rabais = 15
                            cours.infoCours.prixAPaye = cours.infoCours.prix - ( cours.infoCours.prix * cours.infoCours.rabais / 100)
                        }
                    }
                }
                // rabais 4 élèves
                if(this.fraterie.length === 4){  
                    let nomFirstFraterie = this.fraterie[0].eleve.nomEleve
                    let prenomFirstFraterie = this.fraterie[0].eleve.prenomEleve

                    for(let item in this.panier){
                       let cours = this.panier[item] 
                        if (cours.eleve.nomEleve === nomFirstFraterie && cours.eleve.prenomEleve === prenomFirstFraterie){
                            cours.infoCours.rabais = 20
                            cours.infoCours.prixAPaye = cours.infoCours.prix - ( cours.infoCours.prix * cours.infoCours.rabais / 100)
                        }
                    }
                }
            }  
            else if ( this.fraterie.length  < 2){
                this.error.selectFraterie = "! Veuillez sélectionner au minimum 2 élèves"
                this.displayPaiment = false
            }
        },
    },
    beforeMount(){
        this.panier = JSON.parse(localStorage.getItem("panier"))     
        this.checkTypeCours()       
    },
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
        margin-bottom: 50px;
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

    @media screen and (max-width : 500px){
        .fraterie h2{
            font-size: 25px;
        }
    }
  

</style>>
