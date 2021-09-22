<template>
  <div class="section sectionFormulaire">
        <!-- ------------------------------------------------ 
        ------**** TITRE DU FORMULAIRE *****-----------------
         ------------------------------------------------ -->
        <div class="titleForm">
            <i class="fas fa-pencil-alt"></i>
            <h2>Inscription</h2>
        </div>
        <h3>{{coursNom}}</h3>

        <!-- ------------------------------------------------ 
        ------**** FORMULAIRE *****--------------------------
         ------------------------------------------------ -->
        <form class="formulaire">

            <div class="boxLabelAndInput">

                <!-- COURS -->
                <div class="boxInput ">
                    <label  for="cours"> Cours :</label>
                    <input v-if="coursNom" type="text" id="cours" name="cours" :value="coursNom" disabled >
                    <input v-if="eleve.cours" type="text" id="cours" name="cours" :value="eleve.cours" disabled >
                </div>
                 <!-- AGE -->
                <div class="boxInput boxAge">
                    <label class="requis labelAge" for="age "> Age <span class="eleve">( Elève )</span> :</label>
                    <select name="age" id="age" >
           
                        <option v-for=" age in cours.age" :key="age" :value="age">{{ age }}</option>
             
                    </select>
                    <p v-if="error.age" class="error">{{ error.age }}</p>
                </div>

                <!-- NOM -->
                <div class="boxInput ">
                    <label class="requis" for="name"> Nom <span class="eleve">( Elève )</span> :</label>
                    <input type="text" id="name" name="name" placeholder="Carron" :value="eleve.nom">
                    <p v-if="error.nom" class="error">{{ error.nom }}</p>
                </div>

                <!-- PRENOM -->
                <div class="boxInput">
                    <label class="requis" for="surname "> Prénom <span class="eleve">( Elève )</span> :</label>
                    <input type="text" id="surname" name="surname" :value="eleve.prenom"  placeholder="Louis">
                    <p v-if="error.prenom" class="error">{{ error.prenom }}</p>
                </div>

                <!-- NPA / VILLE -->
                <div class="boxNpaVille boxInput">
                    <!-- Npa -->
                    <div class=" npa ">
                        <label class="requis" for="npa"> NPA :</label>
                        <input type="text" id="npa" name="npa" :value="eleve.npa" placeholder="3963">
                        <p v-if="error.npa" class="error">{{ error.npa }}</p>
                    </div>
                    <!-- VILLE -->
                    <div class="ville ">
                        <label class="requis" for="ville"> Ville :</label>
                        <input type="text" id="ville" name="ville" :value="eleve.ville" placeholder="Crans-Montana">
                        <p v-if="error.ville" class="error">{{ error.ville }}</p>
                    </div>
                </div>

                <!-- ADRESSE -->
                <div class="boxInput ">
                    <label class="requis" for="adresse"> Adresse :</label>
                    <input type="text" id="adresse" name="adresse" :value="eleve.adresse" placeholder="Rue de la soif 27">
                    <p v-if="error.adresse" class="error">{{ error.adresse }}</p>
                </div>

                <!-- E-MAIL -->
                <div class="boxInput">
                    <label class="requis" for="email "> E-mail :</label>
                    <input type="email" id="email" name="email" :value="eleve.mail" placeholder="mon-Mail@host.com">
                    <p v-if="error.mail" class="error">{{ error.mail }}</p>
                </div>

                <!-- TELEPHONNE -->
                <div class="boxInput">
                    <label class="requis" for="phone"> Téléphonne :</label>
                    <input type="text" id="phone" name="phone" :value="eleve.phonne" placeholder="0041 79 312 34 27">
                    <p v-if="error.phone" class="error">{{ error.phone }}</p>
                </div> 
            </div>

            <label for="remarque" class="labelRemarque">Remarque :</label>
            <textarea name="remarque" id="remarque" :value="eleve.remarque" placeholder="Votre message : "> </textarea>
           
            <button @click="send($event)" id="sendInfo" class="buttonFull" >Envoyer</button>  
        </form>
        <button @click="check">cherche</button>
  </div>
</template>
    div
<script>
export default {
    name : "section-formulaire-contact",
    props : ["coursNom"],
    data(){
        return{
            validForm : true,
            error : {
                cours : "",
                nom : "",
                prenom : "",
                npa : "",
                ville : "",
                adresse : "",
                email : ""
            },
            eleve : {
                nom : ""
            },
            cours : []
   
        }
    },
   
  
    beforeMount(){
        if( this.$route.query.eleve){
            this.eleve = this.$route.query.eleve
        }
        this.cours = this.$route.query.cours
    },
    mounted(){
        this.check()
    },
   
    methods : {
        check(){
            const select = document.querySelector('select').options
            for (let i = 0; i < select.length; i++){
                
                let eleveParse = parseInt(this.eleve.age)
                let valueParse = parseInt(select[i].value)
                console.log("option vaut " +  typeof(valueParse))
                console.log("eleve.age vaut " +  typeof(eleveParse))
                if (valueParse === eleveParse){
                     select[i].setAttribute("selected","selected")
                    console.log("j'ai trouvé")
                }
            }
            // if (select.option)
            // console.log(select.options[0].value)
        },
        send(e){
            e.stopImmediatePropagation()
            e.preventDefault()
            
            let cours = document.getElementById("cours").value
            let nom = document.getElementById("name").value
            let prenom = document.getElementById("surname").value
            let age = document.getElementById("age").value
            let mail = document.getElementById("email").value
            let adresse = document.getElementById("adresse").value
            let npa = document.getElementById("npa").value
            let ville = document.getElementById("ville").value
            let remarque = document.getElementById("remarque").value
            let phone = document.getElementById("phone").value

            //  CLEAN ERROR
            for (let i in this.error){
                    this.error[i] =  ""
                }
            testName(nom,this)
            testPrenom(prenom,this)
            testMail(mail,this)
            testAdresse(adresse,this)
            testNpa(npa,this)
            testVille(ville,this)

            const eleve = {
                cours : cours,
                nom : nom,
                prenom : prenom,
                mail : mail,
                adresse : adresse,
                npa : npa,
                ville : ville,
                remarque : remarque,
                age : age,
                phone : phone
            }
            
            this.$router.push({path:'/inscription-validation', query:{eleve : eleve, cours: this.cours}})


            if (this.validForm === true){
                console.log("formulaire valid")
                // const obj = {
                //     nom : nom,
                //     prenom : prenom,
                //     mail : mail,
                // }
                // fetch("http://localhost:3000/postMessage",{
                //     method: "POST",
                //     body: JSON.stringify(obj),
                //     headers: {"Content-type": "application/json; charset=UTF-8",}
                      
                // })
                //     .then(res => console.log(res))
            }
            else{
                this.formMessage ="OUPS... Le formulaire ne semble pas bien rempli..!! "
            }

            // *************************************
            // FUNCTION TEST FORM  *****************
            // *************************************

            function testMail( value, data) {
                if ( value.length < 2){
                    data.error.mail ="Votre E-mail ne semble pas être correct..!",
                    data.validForm = false   
                }
                if( value.length > 15){
                    data.error.mail ="Max. 15 caractères.",
                    data.validForm = false   
                }
            }
            function testPrenom(value, data) {
                if ( value.length < 2){
                    data.error.prenom ="Min. 2 caractères.",
                    data.validForm = false   
                }
                if( value.length > 15){
                    data.error.prenom ="Max. 15 caractères.",
                    data.validForm = false   
                }
            }
            function testName(value, data) {
                if ( value.length < 2){
                    data.error.nom ="Min. 2 caractères.",
                    data.validForm = false   
                }
                if( value.length > 15){
                    data.error.nom ="Max. 15 caractères.",
                    data.validForm = false   
                }
            }
            function testAdresse( value, data) {
                if (!value){
                    data.error.adresse = "Veuillez saisire votre adresse.",
                    data.validForm = false   
                }
                if( value.length > 25){
                    data.error.adresse = "Max. 25 caractères.",
                    data.validForm = false   
                }
            }
            function testNpa( value, data) {
                if ( !value){
                    data.error.npa = "! Npa",
                    data.validForm = false   
                }
                if( value.length > 4){
                    data.error.npa = "! Npa",
                    data.validForm = false   
                }
            }
            function testVille( value, data) {
                if ( !value){
                    data.error.ville = "Veuillez saisir votre ville.",
                    data.validForm = false   
                }
                if( value.length > 25){
                    data.error.ville = "Max. 25 caractères.",
                    data.validForm = false   
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