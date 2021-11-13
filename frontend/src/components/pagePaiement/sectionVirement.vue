<template>
  <section>
      <form >
          <h2>Coordonnées de paiement :</h2>
          <div class="boxInput">
              <label for="nom"> Nom :</label>
              <input id="nom" type="text" placeholder="Dupont" v-model="coordonneePaiement.nom">
              <p class="errorForm" v-if="formError.nom"> {{formError.nom}}</p>
          </div>
          <div class="boxInput">
              <label for="prenom">Prénom :</label>
              <input id="prenom" type="text" placeholder="Albert" v-model="coordonneePaiement.prenom">
              <p class="errorForm" v-if="formError.prenom"> {{formError.prenom}}</p>
          </div>
          <div class=" boxNpaVille">
              <div class="boxNpa">
                  <label for="npa">NPA :</label>
                  <input id="npa" type="text" placeholder="1234" v-model="coordonneePaiement.npa">
                  <p class="errorForm" v-if="formError.npa"> {{formError.npa}}</p>
              </div>
              <div class="boxVille">
                    <label for="ville">Ville :</label>
                    <input id="ville" type="text" placeholder="Crans-Montana" v-model="coordonneePaiement.ville">
                    <p class="errorForm" v-if="formError.ville"> {{formError.ville}}</p>
              </div>
          </div>
          <div class="boxInput">
              <label for="adresse">Adresse :</label>
              <input id="adresse" type="text" placeholder="rue du coin 23" v-model="coordonneePaiement.adresse">
              <p class="errorForm" v-if="formError.adresse"> {{formError.adresse}}</p>
          </div>
          
          
          <div class="boxInput">
              <label for="mail">E-mail :</label>
              <input id="mail" type="text" placeholder="votreMail@host.com" v-model="coordonneePaiement.mail">
              <p class="errorForm" v-if="formError.mail"> {{formError.mail}}</p>
          </div>
          <div class="boxInput">
              <label for="phone">téléphone :</label>
              <input id="phone" type="text" placeholder="0041 79 234 12 12" v-model="coordonneePaiement.phone">
              <p class="errorForm" v-if="formError.phone"> {{formError.phone}}</p>
          </div>

          <p v-if="paiementChoice === 'virement'" class="paraInfoPaiement">* Les informations pour le paiement serons envoyées par E-mail.</p>
          <p v-if="paiementChoice === 'cash'" class="paraInfoPaiement">* Tous les paiements cash devront être réglés juste avant le début du cours.</p>
          <p v-if="paiementChoice === 'carte'" class="paraInfoPaiement">* Pour le paiement par carte, vous serez redirigé afin d'indiquer les informations concernant votre carte. </p>
      </form>
  </section>
</template>

<script>
export default {
    name : "sectionVirement",
    props : ["coordonneePaiement", "formError", "paiementChoice"],
    data(){
        return {
            
        }
    }
    

}
</script>

<style scoped>
    section{
        padding: 20px; 
        padding-top: 0; 
        background: rgb(238, 237, 237);

    }
    form{
        border-top: solid 2px lightgray;
        padding-top: 20px;
    }
    
    input{
        width: 100%;
        padding : 3px;
        border: none;
        border-radius: 3px;
    }
    h2{
        padding-bottom: 20px;
        text-decoration: underline rgb(182, 182, 182);
        font-style: italic;
    }
    .boxInput{
        display: flex;
        flex-flow: column;
        align-items:flex-start;
        margin-bottom: 15px;   
        max-width: 80% ;   
    }
    h2{
        display: block;
        width: 100%;
        padding-top:  20px;
        padding-bottom: 30px;
    }
    .paraInfoPaiement{
        width: 100%;
        padding-top: 20px;
    }
    .boxNpa {
        width: 20%;
        min-width: 50px;
        max-width: 50px;
    }
    .boxVille{
        width: 100%;
        margin-bottom: 15px;
    }
  
    .boxNpaVille{
        display: flex;
        flex-flow: row wrap;
        max-width: 80%;
    }
    .boxNpa{
        display: flex;
        flex-flow: column;
        align-items:flex-start;
        margin-bottom: 15px;   
    }
    label{
        cursor: pointer;
    }
    label::before{
        content: "*";
        color: red;
        padding-right: 3px;
    }
    .errorForm{
        color: red;
        font-size: 14px;
    }
    
   

    @media screen and (min-width : 500px){
        .boxInput{
            width: 40%;
        }
        input{
            width: 100%;
        }
        form{
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
        }
        .boxNpaVille{
            width: 40%;
            display: flex;
            justify-content: space-between;
        }
        .boxVille{
            width: 60%;
        }

    }
</style>