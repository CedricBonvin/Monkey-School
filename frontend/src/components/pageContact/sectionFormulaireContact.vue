<template>
  <div class="section sectionFormulaire">
        <!-- ------------------------------------------------ 
        ------**** TITRE DU FORMULAIRE *****-----------------
         ------------------------------------------------ -->
        <div class="titleForm">
            <i class="fas fa-pencil-alt"></i>
            <h2>Formulaire</h2>
        </div>

        <!-- ------------------------------------------------ 
        ------**** FORMULAIRE *****--------------------------
         ------------------------------------------------ -->
        <form class="formulaire">

            <div class="boxLabelAndInput">
                <div class="boxInput ">
                    <label class="requis" for="name"> Nom :</label>
                    <input type="text" id="name" name="name">
                    <p v-if="error.name" class="error">{{ error.name }}</p>
                </div>
                <div class="boxInput">
                    <label class="requis" for="surname "> Prénom :</label>
                    <input type="text" id="surname" name="surname">
                    <p v-if="error.prenom" class="error">{{ error.prenom }}</p>
                </div>
                <div class="boxInput">
                    <label class="requis" for="email "> E-mail :</label>
                    <input type="email" id="email" name="email">
                    <p v-if="error.mail" class="error">{{ error.mail }}</p>
                </div>
                <div class="boxInput">
                    <label for="phone"> Téléphonne :</label>
                    <input type="text" id="phone" name="phone">
                    <p v-if="error.phone" class="error">{{ error.phone }}</p>
                </div>
            </div>
            <div class="boxMessage ">
                
                    <label class="requis" for="message"> Message :</label>
                    <textarea type="text" id="message" name="message" rows="10"> </textarea>
                    <p v-if="error.message" class="error">{{ error.message }}</p> 
            </div>
            <button @click="send($event)" id="sendInfo" class="buttonFull" >Envoyer</button>  
            <div class="errorForm" v-if="formMessage"> {{ formMessage }}</div> 
        </form>
  
  </div>
</template>
    div
<script>
export default {
    name : "section-formulaire-contact",
    data(){
        return{
            validForm : true,
            formMessage : "",
            error : {
                name : "",
                prenom : "",
                mail : "",
                message : ""
            }
        }
    },
    methods : {
        send(e){
            e.stopImmediatePropagation()
            e.preventDefault()
            
            // RECUPERATION DES DONNES
            let nom = document.getElementById("name").value
            let prenom = document.getElementById("surname").value
            let mail = document.getElementById("email").value
            // let phone = document.getElementById("phone").value
            let message = document.getElementById("message").value

            // TEST NOM ********************
            testName(nom,this)
            testPrenom(prenom,this)
            testMail(mail,this)
            testMessage(message,this)
            
            // check de ValidForm
            if (this.validForm === true){
                this.formMessage = "ok pour le formulaire"

                const obj = {
                    nom : nom,
                    prenom : prenom,
                    mail : mail,
                    message : message
                }
                fetch("http://localhost:3000/postMessage",{
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {"Content-type": "application/json; charset=UTF-8",}
                      
                })
                    .then(res => console.log(res))
            }
            else{
                this.formMessage ="OUPS... Le formulaire ne semble pas bien rempli..!! "
            }

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
                    data.error.name ="Min. 2 caractères.",
                    data.validForm = false   
                }
                if( value.length > 15){
                    data.error.name ="Max. 15 caractères.",
                    data.validForm = false   
                }
            }
            function testMessage(value, data) {
                if ( value.length < 4){
                    data.error.message ="Min. 4 caractères.",
                    data.validForm = false   
                }
                if( value.length > 200){
                    data.error.message ="Max. 200 caractères.",
                    data.validForm = false   
                }
            }
        }
    }
}

</script>

<style scoped>
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
   
    textarea{
        width: 100%;
        border-radius: 5px;
        border: none;
    }
    .boxLabelAndInput{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
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

    
    @media screen and (min-width: 560px) {
       h2, i{
            font-size: 40px;
       }
        .boxInput{
            max-width: 230px;
        }
       .titleForm{
            padding-bottom: 30px;
       }
    }
 

    

</style>