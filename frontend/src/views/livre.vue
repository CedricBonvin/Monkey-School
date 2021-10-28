<template>
    <div >
        <modal 
            @close-modal="closeModale"
            v-if="displayModal"
            :text="modalText"
        />
        <Header
            class="test"
            title="Livre d'or..!"
            :image="require('@/assets/images/header-Contact.png')"
        />
        <!--****************-->
        <!-- carte sous header -->
        <!--****************-->
        <div class="carte">
            <h3>Vous avez aimez nos Cours... !!</h3>
            <p>Partagez-nous votre ressenti et laissez nous un petit message. <br> <span class="plaisir">Ca fait toujours plaisir !!</span></p>
        </div>
      
        <!--****************-->
        <!-- form Message -->
        <!--****************-->       
        <div class="main">  
            <div class="section">
                <h2 id="boxMessage" class="underLine">Un petit bonjour..!</h2>
                <i class="fas fa-user-edit"></i>
                <form>
                    <div class="row">
                        <label for="nom">Nom :</label>
                        <input type="text" name="nom" id="nom">
                        <p class="error" v-if="error.nom"> {{ error.nom }}</p>
                    </div>
        
                    <div class="row">
                        <label for="message"> Message :</label>
                        <textarea type="text" name="message" id="message" placeholder="Entrez votre message"></textarea>
                        <p class="error" v-if="error.message"> {{ error.message }}</p>
                    </div>
                    <a href="#merciMessage">
                        <button @click="send($event)" class="buttonFull">Envoyer</button>
                    </a>
                    <!-- captcha -->
                    <div class="captcha">
                        <captcha
                        
                            :captcha="captcha"
                        />
                    </div>
                </form>
            </div>
            
                <!---------------- -->
                <!-- MESSAGE RECU -->
                <!-- ---------------->
            <div class="boxMessage">
                 <div class="boxMessagetitle">
                     <h2 id="merciMessage" class="underLine">Merci pour vos messages !</h2>
                 </div>
                 <i class="far fa-comment-dots"></i>
                <div class="boxScroll">
                    <message-recu
                      :tabMessage="tabMessage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Captcha from '../components/forAll/captcha.vue'
import Header from '../components/forAll/header.vue'
import Modal from '../components/forAll/modal.vue'
import MessageRecu from '../components/pageLivre/messageRecu.vue'
export default {
    name : "livreOr",
    components : { Header, MessageRecu, Modal, Captcha },
    data(){
        return {
            displayBox : false,
            error : {
                nom : "",
                message : ""
            },
            validForm : false,
            tabMessage : [],
            modalText : "",
            displayModal : false,
            captcha : {
                nbr1 : Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                nbr2 : Math.floor(Math.random() * (10 - 1 + 1)) + 1,
                resultat : null,
                error : ""
            }
        }
    },
    methods : {
       
        send(e){
            e.preventDefault()
            
            // CLEAN ERROR **********
            //**********************
            for( let i in this.error){
                    this.error[i] = ""
            }
            this.captcha.error = ""

            // RECUP EL. DU DOM. *****
            //************************
            let nom = document.getElementById("nom").value
            let message = document.getElementById("message").value
            this.validForm = true
            
            // CHECK INPUT ***********
            //************************
            checkMessage(this)
            checkNom(this)
            testCaptcha(this)

            // ENVOIE DU FORMULAIRE **
            //************************
            if (this.validForm === true){

                // date
                const dateNow = new Date
                let option = {day : "numeric", month : "long", year : "numeric"}
                let dateString = dateNow.toLocaleDateString("fr-FR", option)

                //objet envoyer au back
                const obj = {
                    nom : nom,
                    message : message,
                    date : dateString
                }

                fetch("http://localhost:3000/post-livre-message",{
                    method : "POST",
                    body: JSON.stringify(obj),
                    headers: {"Content-type": "application/json; charset=UTF-8",}
                })
                .then( response => {                    
                    this.afterSend(response, obj)
                })
                .catch( response => {         
                    this.afterSend(response,null)
                })
            }

            //****************************
            // function check formulaire
            //****************************
            function checkNom(data){  
                if(!nom){
                    data.error.nom = "Mais... tu t'appelle comment ! "
                    data.validForm = false  
                }
            }
            function checkMessage(data){
                if(!message){
                    data.error.message = "Et tu veut envoyer un message vide ?"
                    data.validForm = false
                }
            }
            function testCaptcha(data){
                if (data.captcha.nbr1 + data.captcha.nbr2 != data.captcha.resultat){
                    data.validForm = false
                    data.captcha.error = "Résoudre le captcha"
        
                }
            }
        },
        closeModale(){
            this.displayModal = false
              // scroll vers le nouveau message
                let cible = document.getElementById("merciMessage")
                cible.scrollIntoView({
                    top : top,
                    behavior : "smooth"
                })
        },
        afterSend(response,obj){ 

            if (response.status === 200){
                this.displayModal = true
                this.modalText = "Merci beaucoup pour votre message"
                // injection du nouveau message dans les datas   
                this.tabMessage.splice(0,0,obj)  
                // efface les valeur des input
                document.getElementById("nom").value = ""
                document.getElementById("message").value = ""  
                this.captcha.resultat = null
                this.captcha.nbr1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
                this.captcha.nbr2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1
              
            }else if (response.status != 200){
                this.displayModal = true
                this.modalText = "Nous rencontrons un problème.. Veuillez réessayer !"
            }
        }    
    },
    beforeMount(){

        fetch("http://localhost:3000/get-livre-message")
        .then(response => response.json())
        .then(result => {
            this.tabMessage = result.reverse()
        })
        .catch(()=> {})
    }
}
</script>

<style scoped>
    .main{
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        padding: 0 20px 50px 20px
    }
    .section{
        margin: 0;
        padding: 20px;
        margin-top: 0;
        border-radius: 10px;
        width: 100%;
        max-width: 500px;
    }
    .titleForm{
        color: white;
        font-size: calc(16px + 3vw);
    }
    i{
        color:var(--color-primary);
    }
    .carte{
        width: 80%;
        max-width: 400px;
        margin: auto;
        transform: translateY(-50%);
        background: var(--color-primary);
        color: white;
        padding: 30px;
        text-align: center;
        box-shadow: 10px 10px 0px 0px rgb(68, 68, 68);
    }
    .plaisir{
        display: inline-block;
        font-size: 20px;
        padding-top: 20px;
    }
    form{
        border-radius: 10px;
        margin-top: 20px;
        background: lightgray;
        padding: 5px 0;
    }
    .titleEnvoyer{
        background: white;
        color: gray;
        padding: 50px 0;
        margin-top: -40px;
        padding-left: 20px;
        font-size: calc(16px + 2vw);
        cursor: pointer;
        transition: .3s;
        margin-bottom: 50px;
    }
    .cliqueIci{
        color: blue;
        text-decoration: underline;
    }
    input{
        border-radius: 5px;
        border : none;
        padding: 3px;
    }
   
    textarea{
        width: 100%;
        padding: 20px;
        border: none;
        border-radius: 5px;
    }
  
    h2{
        display: inline-block;
        position: relative;
        padding: 0 !important;
        padding-bottom: 5px;
        margin-bottom: 20px;
        font-size: 30px;
        padding-bottom: 10px !important;

    }
    label{
        display: block;
    }
    .row{
      
        margin: 20px;
    }
    #message{
        width: 100%;
        height: 100px;
    }
    .error{
        color: red;
    }
    .boxMessage{
        border-radius: 10px;
        background: white;
        padding: 20px; 
        width: 100%;
        margin-top: 50px;
        max-width: 600px;
    }
    .boxMessage h2{
        display: inline-block;
        margin: auto;
        margin-bottom: 20px;
    }
    .boxMessagetitle{
        display: flex;
        justify-content: center;
    }
    .boxScroll{
        height: 400px;
        overflow: scroll;
        background: lightgray;
        border-radius: 10px;
        width: 100%;
        margin: auto;
        margin-top: 10px;
    }
    .captcha{
        margin-right: 10px;
    }

    @media screen and (min-width: 900px){
        .section{
            width: 35%;
            max-width: 400px;
        }
        .boxMessage{
            width: 55%;
            margin-top: 0;
            max-width: 600px;
        }
    }
</style>