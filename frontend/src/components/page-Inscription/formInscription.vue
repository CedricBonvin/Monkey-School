<template>
  <div class="section sectionFormulaire">
  
        <div class="titleForm">
            <i class="fas fa-pencil-alt"></i>
            <h2>Inscription</h2>
        </div>
    
         <!-- CONTACT -->
        <h3>Personne de contact</h3>
        <form v-if="displayContact" class="formulaire">
            <div class="sectionContact">
                <!-- NOM CONATACT -->
                <div class="boxInput ">
                    <label class="requis" for="nomContact"> Nom :</label>
                    <input type="text" id="nomContact" name="nomContact" placeholder="Carron"  v-model="formulaire.contact.nomContact"  >
                    <p v-if="error.nomContact" class="error">{{ error.nomContact }}</p>
                </div>
                <!-- PRENOM CONATACT -->
                <div class="boxInput ">
                    <label class="requis" for="prenomContact"> Prénom :</label>
                    <input type="text" id="prenomContact" name="prenomContact" placeholder="Carron"  v-model="formulaire.contact.prenomContact"  >
                    <p v-if="error.prenomContact" class="error">{{ error.prenomContact }}</p>
                </div>               
                <!-- NPA / VILLE -->
                <div class="boxNpaVille">
                        <!-- Npa -->
                        <div class=" npa ">
                            <label class="requis" for="npaContact"> NPA :</label>
                            <input type="text" id="npaContact" name="npaContact" v-model="formulaire.contact.npaContact"   placeholder="3963">
                            <p v-if="error.npaContact" class="error">{{ error.npaContact }}</p>
                        </div>
                        <!-- VILLE -->
                        <div class="ville ">
                            <label class="requis" for="villeContact"> Ville :</label>
                            <input type="text" id="villeContact" name="villeContact" v-model="formulaire.contact.villeContact"   placeholder="Crans-Montana">
                            <p v-if="error.villeContact" class="error">{{ error.villeContact }}</p>
                        </div>
                </div> 
                <!-- ADRESSE -->
                <div class="boxInput ">
                    <label class="requis" for="adresseContact"> Adresse :</label>
                    <input type="text" id="adresseContact" name="adresse" v-model="formulaire.contact.adresseContact"   placeholder="Rue de la soif 27">
                    <p v-if="error.adresseContact" class="error">{{ error.adresseContact }}</p>
                </div> 
                <!-- TELEPHONNE CONTACT -->
                <div class="boxInput">
                    <label class="requis" for="phoneContact"> Téléphonne :</label>
                    <input type="tel" id="phoneContact" name="phoneContact" v-model="formulaire.contact.phoneContact"  placeholder="0041 79 312 34 27">
                    <p v-if="error.phoneContact" class="error">{{ error.phoneContact }}</p>
                </div> 
                <!-- E-MAIL CONTACT -->
                <div class="boxInput">
                    <label class="requis" for="mailContact "> E-mail :</label>
                    <input type="email" id="mailContact" name="mailContact" v-model="formulaire.contact.mailContact"   placeholder="mon-Mail@host.com">
                    <p v-if="error.mailContact" class="error">{{ error.mailContact }}</p>
                </div>
            </div>
        </form>

        <!-- ELEVE -->
        <h3>Elève</h3>
        <form class="formulaire">
            <div class="boxLabelAndInput">
                <!-- type de cours -->
                <div class="boxInput ">
                    <label  for="eleve"> Cours :</label>
                    <input  type="text" id="eleve" name="eleve" :value="formulaire.infoCours.nomCours "   disabled >
                </div>



                <!-- DATE SI EEVENT -->
                <div class=" containerNoel" v-if="formulaire.infoCours.typeCours === 'Event'">
                    <div class="paraChoisirDate">Choisissez vos dates : <span class="afficheDateNoel" @click="afficheDateNoel">afficher</span>
                        <p class="error" v-if="error.dateNoel">{{error.dateNoel}}</p>
                    </div>
                    <div class="boxNoel" v-if="displayDateNoel">
                        <div  v-for="date in formulaire.infoCours.choiceDateCours" :key="date.id">
                            <div  :id="date" class="ligneInputNoel" v-if="new Date(date) < Date.now()">
                                <input  class="noelInput"  type="checkbox" :value="date" disabled>
                                <s :for="date">{{new Date(date).toLocaleDateString("fr-FR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</s>
                            </div>
                            <div :id="date" class="ligneInputNoel" v-if="new Date(date) > Date.now()">
                                <input  class="noelInput allDate"  type="checkbox" :value="date" v-model="formulaire.infoCours.dateChoisie">
                                <label class="labelDate" :for="date">{{new Date(date).toLocaleDateString("fr-FR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }} </label>
                                <span class="nbrCoursRestant validDate"></span><span class="textPlaceRestant"> place restante/s</span>
                            </div>
                        </div>
                    </div>
                </div>



                 <!-- AGE  si eleve regulier--> 
                <div 
                    v-if="  formulaire.infoCours.nomCours === 'Mini-Spider' ||
                            formulaire.infoCours.nomCours === 'Gecko' ||
                            formulaire.infoCours.nomCours === 'Monkey' ||
                            formulaire.infoCours.nomCours === 'Big-Monkey'"
                     class="boxInput boxAge">
                    <label class="requis labelAge" for="age "> Age :</label>
                    <select name="age" id="age" v-model="formulaire.eleve.ageEleve" >
                        <option v-for=" age in formulaire.infoCours.ageCours" :key="age.id" :value="age">{{ age }}</option>  
                    </select>
                    <p v-if="error.ageEleve" class="error">{{ error.ageEleve }}</p>
                </div>
                <!-- AGE si pas régulier -->
                <div v-else class="boxInput  ">
                    <label class="requis labelAge" for="age "> Age :</label>
                    <input class="inputAge" type="text" placeholder="25" v-model="formulaire.eleve.ageEleve">
                    <p v-if="error.ageEleve" class="error">{{ error.ageEleve }}</p>

                </div>

                <!-- CHOIX DATE DE eleve si il y en a // SAUF NOEL -->
                <div class="boxInput" 
                    v-if="formulaire.infoCours.typeCours === 'initiation' ||
                          formulaire.infoCours.typeCours === 'autonomie'">

                    <label class="requis" for="selectCours">Date du cours :</label>
                    <select name="selectCours" id="selectCours" v-model="formulaire.infoCours.dateChoisie">
                            <option></option>
                            <option
                                v-for="date in formulaire.infoCours.choiceDateCours" :key="date.nomCours"                               
                                :value="date">{{ new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}                   
                            </option>                   
                    </select>        
                    <p v-if="error.choiceDateCours" class="error">{{ error.choiceDateCours }}</p>                 
                </div>

                <!-- NOM -->
                <div class="boxInput ">
                    <label class="requis" for="nomEleve"> Nom :</label>
                    <input type="text" id="nomEleve" name="nomEleve" placeholder="Carron"  v-model="formulaire.eleve.nomEleve"  >
                    <p v-if="error.nomEleve" class="error">{{ error.nomEleve }}</p>
                </div>

                <!-- PRENOM -->
                <div class="boxInput">
                    <label class="requis" for="prenomEleve "> Prénom :</label>
                    <input type="text" id="prenomEleve" name="prenomEleve" v-model="formulaire.eleve.prenomEleve"   placeholder="Louis">
                    <p v-if="error.prenomEleve" class="error">{{ error.prenomEleve }}</p>
                </div>

                <!-- NPA / VILLE -->             
                <div class="boxNpaVille">
                    <!-- Npa -->
                    <div class=" npa ">
                        <label class="requis" for="npaEleve"> NPA :</label>
                        <input type="text" id="npaEleve" name="npaEleve" v-model="formulaire.eleve.npaEleve"   placeholder="3963">
                        <p v-if="error.npaEleve" class="error">{{ error.npaEleve }}</p>
                    </div>
                    <!-- VILLE -->
                    <div class="ville ">
                        <label class="requis" for="villeEleve"> Ville :</label>
                        <input type="text" id="villeEleve" name="villeEleve" v-model="formulaire.eleve.villeEleve"   placeholder="Crans-Montana">
                        <p v-if="error.villeEleve" class="error">{{ error.villeEleve }}</p>
                    </div>
                </div>
                
                <!-- ADRESSE -->
                <div class="boxInput ">
                    <label class="requis" for="adresseEleve"> Adresse :</label>
                    <input type="text" id="adresseEleve" name="adresseEleve" v-model="formulaire.eleve.adresseEleve"   placeholder="Rue de la soif 27">
                    <p v-if="error.adresseEleve" class="error">{{ error.adresseEleve }}</p>
                </div>             
            </div>

            <label for="remarqueEleve" class="labelRemarque">Remarque :</label>
            <textarea name="remarqueEleve" id="remarqueEleve" v-model="formulaire.eleve.remarqueEleve"  placeholder="Votre message : "> </textarea>
           
            <p class="errorForm" v-if="error.form" >! Veuillez vérifier les données du formulaire.!</p>
            <div class="boxbuton">
                 <router-link class="buttonFull goCours" to="/cours">RETOUR AUX COURS..</router-link>
                <button @click="send($event)" id="sendInfo" class="buttonFull valid" > CONFIRMER</button>              
            </div> 
        </form>
  </div>
</template>
    


<script>
export default {
    name : "section-formulaire-contact",
   
data(){
    return{
        formulaire : {},
        displayContact : true,
        error : {    
            nomContact : "",
            prenomContact: "",
            phoneContact : "",
            npaContact : "",
            villeContact : "",
            adresseContact : "",
            mailContact : "",

            nomEleve : "",
            prenomEleve : "",
            npaEleve : "",
            villeEleve : "",
            adresseEleve : "",
            ageEleve : "",
            choiceDateCours : "",  
            form : false,
            dateNoel : ""                  
        },
        displayDateNoel : true,

    }
},
   
    methods : {
        // check si il y a déja l'age de l'élève ( si il essaie de modifier le formulaire depuis validation-formulaire )
        checkAge(){
            let checkIfSelect = document.querySelector("select")
            if (checkIfSelect){
                let select = document.querySelector('select').options
                for (let i = 0; i < select.length; i++){
                    
                    let ageEleveParse = parseInt(this.formulaire.ageEleve)
                    let ageOptionParse = parseInt(select[i].value)
        
                    if (ageOptionParse === ageEleveParse){
                            select[i].setAttribute("selected","selected")
                    }
                }
            }
        },
        send(e){
            e.stopImmediatePropagation()
            e.preventDefault()

            //  CLEAN ERROR
            for (let i in this.error){
                    this.error[i] =  ""
            }
            // ESSAIE ENVOIE FORMULAIRE...
            if (testForm(this)){
                localStorage.setItem("formulaireInscription",JSON.stringify(this.formulaire))
                this.$router.push({path : "/inscription-validation"})
            }
            function testForm(data){
                
                let valid = true
                // contact
                testMailContact()
                testPrenomContact()
                testNomContact()
                testAdresseContact()
                testNpaContact()
                testVilleContact()
                testPhoneContact()
                // eleve
                testNomEleve()
                testPrenomEleve()
                testAdresseEleve()
                testNpaEleve()
                testAgeEleve()
                testVilleEleve()
                // si
                testDateNoel()

                if (valid === true){
                    return true
                } else {
                    data.error.form = true
                    return false
                }

                // *************************************
                // FUNCTION TEST FORM  *****************
                // *************************************

                function testMailContact() {
                    if( data.formulaire.contact.mailContact){
                        if( data.formulaire.contact.mailContact.length > 50){
                            data.error.mailContact ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else{
                        data.error.mailContact = "Veuillez saisir le champ !" 
                        valid = false
                    } 
                }            
                function testPrenomContact(){
                    if (data.formulaire.contact.prenomContact){
                        if ( data.formulaire.contact.prenomContact.length < 2){
                            data.error.prenomContact ="Min. 2 caractères.",
                            valid = false   
                        }
                        if( data.formulaire.contact.prenomContact.length > 15){
                            data.error.prenomContact ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else {
                        data.error.prenomContact = "Veuillez saisir le champ"
                        valid = false
                    }
                }                
                function testNomContact(){
                    if(data.formulaire.contact.nomContact){
                        if ( data.formulaire.contact.nomContact.length < 2){
                            data.error.nomContact ="Min. 2 caractères.",
                            valid = false   
                        }
                        if( data.formulaire.contact.nomContact.length > 15){
                            data.error.nomContact ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else {
                        data.error.nomContact = "Veuillez saisir le champ !"
                        valid = false
                    }
                }                           
                function testNpaContact(){
                    if(data.formulaire.contact.npaContact){
                        if( data.formulaire.contact.npaContact.length > 4){
                            data.error.npaContact = "! Npa",
                            valid = false   
                        }
                    } else {
                        data.error.npaContact = "! Npa",
                        valid = false 
                    }
                }       
                function testVilleContact(){
                    if (data.formulaire.contact.villeContact){
                        if( data.formulaire.contact.villeContact.length > 25){
                            data.error.villeContact = "Max. 25 caractères.",
                            valid = false   
                        }
                    }else{
                        data.error.villeContact = "Veuillez saisir le champ !",
                        valid = false 
                    }
                    
                }
                function testPhoneContact() {
                    if( data.formulaire.contact.phoneContact){
                        if( data.formulaire.contact.phoneContact.length > 50){
                            data.error.phoneContact ="Votre numéro ne semble pas correct !",
                            valid = false   
                        }
                    } else{
                        data.error.phoneContact = "Veuillez saisir le champ !" 
                        valid = false
                    } 
                }
                function testAdresseContact(){
                    if ( data.formulaire.contact.adresseContact){
                        if( data.formulaire.contact.adresseContact.length > 25){
                            data.error.adresseContact = "Max. 25 caractères.",
                            valid = false   
                        }
                    }else {
                        data.error.adresseContact = "Veuillez saisir le champ!"
                        valid = false
                    }
                } 
                 
                // ELEVE
                function testNomEleve(){
                    if(data.formulaire.eleve.nomEleve){
                        if ( data.formulaire.eleve.nomEleve.length < 2){
                            data.error.nomEleve ="Min. 2 caractères.",
                            valid = false   
                        }
                        if( data.formulaire.eleve.nomEleve.length > 15){
                            data.error.nomEleve ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else {
                        data.error.nomEleve = "Veuillez saisir le champ !"
                        valid = false
                    }
                } 
                function testPrenomEleve(){
                    if (data.formulaire.eleve.prenomEleve){
                        if ( data.formulaire.eleve.prenomEleve.length < 2){
                            data.error.prenomEleve ="Min. 2 caractères.",
                            valid = false   
                        }
                        if( data.formulaire.eleve.prenomEleve.length > 15){
                            data.error.prenomEleve ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else {
                        data.error.prenomEleve = "Veuillez saisir le champ"
                        valid = false
                    }
                } 
                function testAgeEleve(){
                    if ( !data.formulaire.eleve.ageEleve){
                        data.error.ageEleve = "Choisir l'age de l'élève",
                        valid = false   
                    }
                }
                function testAdresseEleve(){
                    if ( data.formulaire.eleve.adresseEleve){
                        if( data.formulaire.eleve.adresseEleve.length > 25){
                            data.error.adresseEleve = "Max. 25 caractères.",
                            valid = false   
                        }
                    }else {
                        data.error.adresseEleve = "Veuillez saisir le champ!"
                        valid = false
                    }
                } 
                function testVilleEleve(){
                    if (data.formulaire.eleve.villeEleve){
                        if( data.formulaire.eleve.villeEleve.length > 25){
                            data.error.villeEleve = "Max. 25 caractères.",
                            valid = false   
                        }
                    }else{
                        data.error.villeEleve = "Veuillez saisir le champ !",
                        valid = false 
                    }
                    
                }             
                function testNpaEleve(){
                    if(data.formulaire.eleve.npaEleve){
                        if(data.formulaire.eleve.npaEleve.length > 4){
                            data.error.npaEleve = "! Npa",
                            valid = false   
                        }
                    } else {
                        data.error.npaEleve = "! Npa",
                        valid = false 
                    }
                }

                function testDateNoel(){
                    if(data.formulaire.infoCours.typeCours === 'Noel'){
                        if(data.formulaire.infoCours.dateChoisieNoel.length === 0){
                            data.error.dateNoel = "Veuillez choisir une date.",
                            valid = false   
                        } 
                    }
                }
            }           
        },
        afficheDateNoel(){
            if (this.displayDateNoel){
                this.displayDateNoel = false
            }else{
                this.displayDateNoel = true
            //this.getAllNoel()
            }
        },
        getAllNoel(){
            fetch("http://localhost:3000/all-noel")
            .then(res => res.json())
            .then(response => {
                let tabDate = document.querySelectorAll(".allDate")
                for (let input of tabDate){
                    let idElement = input.getAttribute("id").toString()                  
                    let placeRestant = 8
                    for (let item of response){
                        for (let date of item.infoCours.dateChoisieNoel){
                            if (idElement === date){
                                placeRestant -= 1
                            }
                        }
                    }
                    // injection
                    let parent = input.parentNode
                    let cible = parent.querySelector(".nbrCoursRestant")

                    //  si 0 place restante
                    if (placeRestant < 1){
                        placeRestant = 0
                        cible.classList.remove("validDate")
                        cible.classList.add("invalidDate")
                        parent.classList.add("invalidDate")
                       let caseInput = parent.querySelector("input")
                       caseInput.setAttribute("disabled", true)
                    }
                    cible.innerHTML = placeRestant
                }
            })
            .catch(err => console.log(err))
        }     
    },
  
    beforeMount(){  
        this.formulaire = JSON.parse(localStorage.getItem("formulaireInscription")) 

        // si déja panier injecte le contact dans this.fomulaire
        let panier = JSON.parse(localStorage.getItem("panier")) 
        if (panier){
            this.formulaire.contact = {...panier[0].contact}
        }
    },
    mounted(){  
        this.checkAge()
    },
    created(){
        
    }
   
}

</script>

<style scoped>
    ::placeholder{
        color : gray;
        font-style: italic;
    }
    .section{
        padding: 20px
    }
    .sectionContact{
        display: flex;
        flex-flow: row wrap;
    }
    i{
        display: block !important;
        margin:0;
        margin-right: 20px;
        font-size: calc(16px + 2vw);
        text-align: left;
        color: rgb(97, 97, 97);
    }
    .sectionFormulaire{
        margin: auto;
        max-width: 700px;
    }
    .titleForm{
        display: flex;
        align-items: center;
        padding: 0;
        padding-bottom: 5vw;
    }
    h2{
        position: relative;
        font-size: calc(16px + 3vw);
    }
    h3{
        font-size: 2rem;  
        text-align: left; 
        margin-bottom: 10px;     
    }
    h2:before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        border: solid 2px var(--color-primary);
        width: 50%;
    }
    .formulaire{
        background: lightgray;
        padding: 15px  10px;
        border-radius: 5px;
        margin-bottom: 20px;
    }
    .boxInput{
        display: flex;
        padding: 0 10px;
        flex-flow: column wrap;
        margin: 10px 0;
        width: 100%;
    }
    input{
        width: 100%;
        border-radius: 5px;
        border: none;
        padding: 5px;
    }
    .boxLabelAndInput{
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        align-items: flex-start;
    }
    .requis{
        position: relative;
        padding-left: 10px;
    }
    .requis:after{
        content: "*";
        position: absolute;
        top: -5px;
        left: 0;
        color: red;
    }
    .error{
        color: red;
        font-size: 12px;
        text-align: left;
    }
    .errorForm{
        color: red;
        font-weight: bold;
        text-align: center;
    }
    .eleve{
        display: flex;
        flex-flow: column;
        margin-bottom: 20px;
    }
    #eleve{
        background: white;
    }
    .boxAge{
        display: flex;
        flex-flow: column;
    }
    select{
       width: 50px;
       border: none;
       background: white;
       padding: 3px 0;
       border-radius: 5px;
       cursor: pointer;
    }
   
    .boxNpaVille{
        width: 100%;
        padding: 10px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }
    .npa{
        display: block;
        width: 55px;
        min-width: 55px;
    }
    .ville {
        display: block;
        margin-left: 10px;
        width: 100% !important;
    }
   
    .labelRemarque{
        display: block;
        margin-top: 20px !important;
    }
    textarea{
        display: block;
        width: 100%;
        max-width: 500px;
        height: 100px;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }
   .inputAge{
       width: 55px;
   }
   #selectCours{
       width: 100px;
   }
   .buttonFull{
        border-radius: 2px;
    }
    .goCours{
        background: rgb(230, 53, 53);
    }
    .boxbuton{
        margin-top: 50px;
        display: flex;
        flex-flow: row wrap;      
    }
    .valid{
        background: green;
    }
    .errorForm{
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        color: red;
        margin-top: 30px;
    }
    .containerNoel{
        width: 100% ;
    }
    .containerNoel label {
        margin: 0;
        padding: 0;
        text-align: left;
        display: block;
    }
    .boxNoel{
        background: white;
        padding: 10px;
    }
    .ligneInputNoel{
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    .ligneInputNoel label{
        cursor: pointer;
    }
    
    .noelInput{
        width: 20px;  
        margin: 7px 0;   
        margin-right: 5px;  
        cursor: pointer;
        
    }
    .afficheDateNoel{
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }
    .paraChoisirDate{
        font-weight: 400;
        font-size: 18px;
        margin: 20px 0;
        margin-left: 10px;
    }
    .nbrCoursRestant{
        padding-left: 30px;
        padding-right: 4px;
        color: green;
        font-weight: bold;
    }
    .validDate{
        color: green;
    }
    .invalidDate{
        color: red;
    }
    .textPlaceRestant{
        color: green;
    }
 


   

    
    @media screen and (min-width: 560px) {
        h2, i{
            font-size: 40px;
        }
        .eleve{
            width: 100%; 
        }
        
        .boxInput{
            max-width: 50%;
        }
       .titleForm{
            padding-bottom: 30px;
       }
       .boxNpaVille{
           width: 50%;
       }
       
       
       
       
       
    }
</style>