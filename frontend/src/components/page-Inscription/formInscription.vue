<template>
  <div class="section sectionFormulaire">
        <!-- ------------------------------------------------ 
        ------**** TITRE DU FORMULAIRE *****-----------------
         ------------------------------------------------ -->
        <div class="titleForm">
            <i class="fas fa-pencil-alt"></i>
            <h2>Inscription</h2>
        </div>
        <h3> {{ infoFormulaire.nomCours}}</h3>

        <!-- ------------------------------------------------ 
        ------**** FORMULAIRE *****--------------------------
         ------------------------------------------------ -->
        <form class="formulaire">

            <div class="boxLabelAndInput">

                <!-- COURS -->
                <div class="boxInput ">
                    <label  for="cours"> Cours :</label>
                    <input  type="text" id="cours" name="cours" :value="infoFormulaire.nomCours"   disabled >
                </div>
                 <!-- AGE -->
                <div class="boxInput boxAge">
                    <label class="requis labelAge" for="age "> Age <span class="eleve">( Elève )</span> :</label>
                    <select name="age" id="age" v-model="infoFormulaire.ageEleve" >
           
                        <option v-for=" age in infoFormulaire.ageCours" :key="age" :value="age">{{ age }}</option>
             
                    </select>
                    <p v-if="error.ageEleve" class="error">{{ error.ageEleve }}</p>
                </div>

                <!-- NOM -->
                <div class="boxInput ">
                    <label class="requis" for="name"> Nom <span class="eleve">( Elève )</span> :</label>
                    <input type="text" id="name" name="name" placeholder="Carron"  v-model="infoFormulaire.nomEleve"  >
                    <p v-if="error.nom" class="error">{{ error.nom }}</p>
                </div>

                <!-- PRENOM -->
                <div class="boxInput">
                    <label class="requis" for="surname "> Prénom <span class="eleve">( Elève )</span> :</label>
                    <input type="text" id="surname" name="surname" v-model="infoFormulaire.prenom"   placeholder="Louis">
                    <p v-if="error.prenom" class="error">{{ error.prenom }}</p>
                </div>

                <!-- NPA / VILLE -->
                <div class="boxNpaVille boxInput">
                    <!-- Npa -->
                    <div class=" npa ">
                        <label class="requis" for="npa"> NPA :</label>
                        <input type="text" id="npa" name="npa" v-model="infoFormulaire.npa"   placeholder="3963">
                        <p v-if="error.npa" class="error">{{ error.npa }}</p>
                    </div>
                    <!-- VILLE -->
                    <div class="ville ">
                        <label class="requis" for="ville"> Ville :</label>
                        <input type="text" id="ville" name="ville" v-model="infoFormulaire.ville"   placeholder="Crans-Montana">
                        <p v-if="error.ville" class="error">{{ error.ville }}</p>
                    </div>
                </div>

                <!-- ADRESSE -->
                <div class="boxInput ">
                    <label class="requis" for="adresse"> Adresse :</label>
                    <input type="text" id="adresse" name="adresse" v-model="infoFormulaire.adresse"   placeholder="Rue de la soif 27">
                    <p v-if="error.adresse" class="error">{{ error.adresse }}</p>
                </div>

                <!-- E-MAIL -->
                <div class="boxInput">
                    <label class="requis" for="email "> E-mail :</label>
                    <input type="email" id="email" name="email" v-model="infoFormulaire.mail"   placeholder="mon-Mail@host.com">
                    <p v-if="error.mail" class="error">{{ error.mail }}</p>
                </div>

                <!-- TELEPHONNE -->
                <div class="boxInput">
                    <label class="requis" for="phone"> Téléphonne :</label>
                    <input type="text" id="phone" name="phone" v-model="infoFormulaire.phone"  placeholder="0041 79 312 34 27">
                    <p v-if="error.phone" class="error">{{ error.phone }}</p>
                </div> 
            </div>

            <label for="remarque" class="labelRemarque">Remarque :</label>
            <textarea name="remarque" id="remarque" v-model="infoFormulaire.remarque"  placeholder="Votre message : "> </textarea>
           
            <button @click="send($event)" id="sendInfo" class="buttonFull" >Envoyer</button>  
        </form>
  </div>
</template>
    div
<script>
export default {
    name : "section-formulaire-contact",
   
    data(){
        return{
            error : {
                cours : "",
                nom : "",
                prenom : "",
                npa : "",
                ville : "",
                adresse : "",
                email : "",
                phone : "",
                remarque : "",
                ageEleve : ""
            },
            infoFormulaire : {},
          
        }
    },
   
  
    beforeMount(){
     
            this.infoFormulaire = JSON.parse(localStorage.getItem("formulaireInscription"))
        
    },
    mounted(){
         this.checkAge()
    },
   
    methods : {
        // check si il y a déja l'age de l'élève ( si il essaie de modifier le formulaire depuis validation-formulaire )
        checkAge(){
            const select = document.querySelector('select').options
            for (let i = 0; i < select.length; i++){
                
                let ageEleveParse = parseInt(this.infoFormulaire.ageEleve)
                let ageOptionParse = parseInt(select[i].value)
    
                if (ageOptionParse === ageEleveParse){
                     select[i].setAttribute("selected","selected")
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
                localStorage.setItem("formulaireInscription",JSON.stringify(this.infoFormulaire))

            // ESSAIE ENVOIE FORMULAIRE...
            if (testForm(this)){
                this.$router.push({path : "/inscription-validation"})
            }
            function testForm(data){
                
                let valid = true

                testMail()
                testPrenom()
                testNom()
                testAdresse()
                testNpa()
                testVille()
                testAge()
                testPhone()

                if (valid === true){
                    return true
                } else return false

                // *************************************
                // FUNCTION TEST FORM  *****************
                // *************************************

                function testMail() {
                    if( data.infoFormulaire.mail){
                        if( data.infoFormulaire.mail.length > 50){
                            data.error.mail ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else{
                        data.error.mail = "Veuillez saisir le champ !" 
                        valid = false
                    } 
                }            
                function testPrenom(){
                    if (data.infoFormulaire.prenom){
                        if ( data.infoFormulaire.prenom.length < 2){
                            data.error.prenom ="Min. 2 caractères.",
                            valid = false   
                        }
                        if( data.infoFormulaire.prenom.length > 15){
                            data.error.prenom ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else {
                        data.error.prenom = "Veuillez saisir le champ"
                        valid = false
                    }
                }                
                function testNom(){
                    if(data.infoFormulaire.nomEleve){
                        if ( data.infoFormulaire.nomEleve.length < 2){
                            data.error.nom ="Min. 2 caractères.",
                            valid = false   
                        }
                        if( data.infoFormulaire.nomEleve.length > 15){
                            data.error.nom ="Max. 15 caractères.",
                            valid = false   
                        }
                    } else {
                        data.error.nom = "Veuillez saisir le champ !"
                        valid = false
                    }
                }
                function testAdresse(){
                    if ( data.infoFormulaire.adresse){
                        if( data.infoFormulaire.adresse.length > 25){
                            data.error.adresse = "Max. 25 caractères.",
                            valid = false   
                        }
                    }else {
                        data.error.adresse = "Veuillez saisir le champ!"
                        valid = false
                    }
                }              
                function testNpa(){
                    if(data.infoFormulaire.npa){
                        if( data.infoFormulaire.npa.length > 4){
                            data.error.npa = "! Npa",
                            valid = false   
                        }
                    } else {
                        data.error.npa = "! Npa",
                        valid = false 
                    }

                }       
                function testVille(){
                    if (data.infoFormulaire.ville){
                        if( data.infoFormulaire.ville.length > 25){
                            data.error.ville = "Max. 25 caractères.",
                            valid = false   
                        }
                    }else{
                        data.error.ville = "Veuillez saisir le champ !",
                        valid = false 
                    }
                    
                }
                function testAge(){
                    if ( !data.infoFormulaire.ageEleve){
                        data.error.ageEleve = "Choisir l'age de l'élève",
                        valid = false   
                    }
                }
                function testPhone() {
                    if( data.infoFormulaire.phone){
                        if( data.infoFormulaire.phone.length > 50){
                            data.error.phone ="Votre numéro ne semble pas correct !",
                            valid = false   
                        }
                    } else{
                        data.error.phone = "Veuillez saisir le champ !" 
                        valid = false
                    } 
                }  
            }            
        }
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
        margin-top: 6vmin;
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
        font-size: calc(14px + 3vw);
    }
    h3{
        font-size: 2rem;  
        text-align: center; 
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
    }
    .boxInput{
        display: flex;
        flex-flow: wrap;
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
        flex-flow: row wrap;
        justify-content: space-between;
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
    .cours{
        display: flex;
        flex-flow: column;
        margin-bottom: 20px;
    }
    #cours{
        max-width: 100%;
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
    }
   
    .boxNpaVille{
        display: flex;
        justify-content: space-between;
    }
    .npa{
        display: inline-block;
        width: 22%;
    }
    .ville{
        display: inline-block;
        width: 70%;
    }
    .labelRemarque{
        display: block;
        margin-top: 20px !important;
    }
    textarea{
        display: block;
        width: 80%;
        max-width: 500px;
        height: 100px;
        padding: 10px;
        border-radius: 5px;
        border: none;
    }
    .eleve{
        font-size: 14px;
    }

    
    @media screen and (min-width: 560px) {
        h2, i{
            font-size: 40px;
        }
        .cours{
            width: 100%; 
        }
        #cours{
            width: 230px;
        }
        .boxInput{
            max-width: 230px;
        }
       .titleForm{
            padding-bottom: 30px;
       }
    }
</style>