<template>
    <div>
         
        <loader  v-if="displayLoader" />
        
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
                        <input type="text" id="name" name="name" placeholder="Du-pont" data-selection="true">
                        <p v-if="error.name" class="error">{{ error.name }}</p>
                    </div>
                    <div class="boxInput">
                        <label class="requis" for="surname "> Prénom :</label>
                        <input type="text" id="surname" name="surname" placeholder="Alexandre" data-selection="true">
                        <p v-if="error.prenom" class="error">{{ error.prenom }}</p>
                    </div>
                    <div class="boxInput">
                        <label class="requis" for="email "> E-mail :</label>
                        <input type="email" id="email" name="email" placeholder="monMail@host.com" data-selection="true">
                        <p v-if="error.mail" class="error">{{ error.mail }}</p>
                    </div>
                    <div class="boxInput">
                        <label for="phone"> Téléphonne :</label>
                        <input type="text" id="phone" name="phone" placeholder=" 0041 78 123 45 67" data-selection="true">
                        <p v-if="error.phone" class="error">{{ error.phone }}</p>
                    </div>
                </div>
                <div class="boxMessage ">
        
                        <label class="requis" for="message"> Message :</label>
                        <textarea type="text" id="message" name="message" rows="10" placeholder="Votre message..." data-selection="true"> </textarea>
                        <p v-if="error.message" class="error">{{ error.message }}</p>
                </div>
                <!-- CAPTCHA -->
                <div class="boxCaptcha">
                    <p >Résolver l'addition :</p>
                    <div class="captcha">
                        <span class=" itemCaptcha captcha2"> {{ captcha.nbr1 }} </span>
                        <span class="plusEgal"> + </span>
                        <span class=" itemCaptcha captcha1"> {{ captcha.nbr2 }} </span>
                        <span class="plusEgal"> = </span>
                        <input type="text" class="itemCaptcha captchaReponse"  v-model="captcha.resultat">
                    </div>
                </div>
                <p v-if="error.captcha" class="error errorCaptcha">{{ error.captcha}}</p>
                <button @click="send($event)" id="sendInfo" class="buttonFull" >Envoyer</button>
            </form>      
        </div>
    </div>
</template>
    div
<script>
    import loader from '../forAll/loader.vue'
    export default {
    components: { loader },
        name : "section-formulaire-contact",
        data(){
            return{
                validForm : true,
                error : {
                    name : "",
                    prenom : "",
                    mail : "",
                    message : "",
                    captcha : ""
                },
                captcha : {
                    nbr1 : null,
                    nbr2 : null,
                    resultat : null
                },
                displayLoader : false,
                response : {}
            }
        },
        methods : {
            afterResponse(){
                let succes = true
                if (this.response.status != 200){
                    succes = false
                } else if (this.response.status === 200) {
                    succes = true
                    // clean input   
                     let tabInput = document.querySelectorAll('[data-selection]');
                    // for (let i = 0; i < tabInput.length; i++){
                    //     tabInput[i].value = ""
                    // }
                        for (let i of tabInput){
                            i.value =""
                        }
                    this.captchaCreate()
                }
                this.$emit("listenresponse",  succes)
            },
            send(e){
                e.stopImmediatePropagation()
                e.preventDefault()
            
                // CLEAN ERROR
                for ( let i in this.error){
                    this.error[i] = ""
                }
    
                // RECUPERATION DES DONNES
                let nom = document.getElementById("name").value
                let prenom = document.getElementById("surname").value
                let mail = document.getElementById("email").value
                let phone = document.getElementById("phone").value
                let message = document.getElementById("message").value

                // TEST  ********************
                this.validForm = true
                testName(nom,this)
                testPrenom(prenom,this)
                testMail(mail,this)
                testMessage(message,this)
                testCaptcha(null,this)
                
                // check de ValidForm
                if (this.validForm === true){
                    this.displayLoader = true
                    const obj = {
                        nom : nom,
                        prenom : prenom,
                        mail : mail,
                        message : message,
                        phone : phone,
                    }
                
                        fetch("http://localhost:3000/postMessage",{
                            method: "POST",
                            body: JSON.stringify(obj),
                            headers: {"Content-type": "application/json; charset=UTF-8",}      
                        })
                        .then(response =>  {
                            this.response = response
                            this.displayLoader = false
                            this.afterResponse()
                        })
                        .catch( response => {
                            this.displayLoader = false
                            this.response = response
                             this.afterResponse()
                        })
                }
                function testCaptcha(value,data){
                    if( parseInt( data.captcha.resultat)  !== data.captcha.nbr1 + data.captcha.nbr2){
                            data.error.captcha = "résolver le captcha"  
                            data.validForm = false            
                    }
                }
                function testMail( value, data) {
                    if ( value.length < 2){
                        data.error.mail ="Votre E-mail ne semble pas être correct..!",
                        data.validForm = false   
                    }
                    if( value.length > 55){
                        data.error.mail ="Max. 55 caractères.",
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
                    if( value.length > 1000){
                        data.error.message ="Max. 1000 caractères.",
                        data.validForm = false   
                    }
                }
            },
            captchaCreate(){
                this.captcha.nbr1 =  Math.floor(Math.random() * (10 - 1 + 1)) + 1
                this.captcha.nbr2 =  Math.floor(Math.random() * (10 - 1 + 1)) + 1
                this.captcha.resultat = null
            } 
        },
        mounted(){
            this.captchaCreate()
        }
    }

</script>

<style scoped>
    ::placeholder{
        font-style: italic;
        color: rgb(184, 184, 184);
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
        padding: 15px;
        line-height: 1.6;
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
        font-size: 14px;
        text-align: left;
    }
    .errorForm{
        color: red;
        font-weight: bold;
        text-align: center;
    }
    .boxCaptcha{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-top: 20px;
        padding: 5PX;
       
    }
   
    .captcha{
        display: inline-block;
    }
    .itemCaptcha{
        background: white;
        padding: 7px;
    }
    .captchaReponse{
        display: inline-block;
        width: 40px;
        font-size: 14px;
        text-align: center;
        border-radius: 0;
        padding: 10px 0;
    }
    .errorCaptcha{
        text-align: right;
    }
    .plusEgal {
        padding: 0 5px

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