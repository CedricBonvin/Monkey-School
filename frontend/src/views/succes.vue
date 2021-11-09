<template>
  <div class="page">
      <div class="container">
          <h1>Paiement accepté !</h1>
          <h2>Merci pour votre paiement !!!  </h2>
          <p class="para">Vous recevrez un mail récapitulatif de vos dates de cours, ainsi que la facture si reportant. </p>
          <button>
              <router-link to="/paiement">Retour au paiement</router-link>
          </button>
      </div>
  </div>
</template>

<script>
export default {
    name : "succes",
    methods : {
        payment_intent(){
            let payment_intent = JSON.parse(localStorage.getItem("payment_intent"))
            let panier = JSON.parse(localStorage.getItem("panier"))
            for (let item of panier){
                item.payment_intent = payment_intent
            }
            fetch(this.$store.state.HOST+"/new-inscription", {
                method : "POST",
                body : JSON.stringify(panier),
                headers : {"content-type" : "application/json; charset=UTF-8"}
            })
            .then(res => res.json())
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
    },
    mounted(){
        this.payment_intent()
    }
}
</script>

<style scoped>
    .page{
        padding: 0 20px;
        padding-top: 100px;
    }
    .container{
        background: white;
        padding: 20px;
        max-width: 500px;
        margin: auto;
        margin-bottom: 100px;
    }
    h1{
        position: relative;
        display: inline-block;
        color: rgb(88, 87, 87);
        margin-bottom: 50px;
        font-weight: bold;
    }
    h1:before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        border: solid 2px var(--color-primary);

    }
    h2{
        text-align: center;
        font-weight: 400;
        opacity: .8;
    }
    .para{
        text-align: center;
        margin:40px 0;
        font-size: 18px;
        line-height: 1.4;
    }
    button{
        display: block;
        margin: 50px auto;
        background: rgb(20, 105, 70);
        border: none;
        transition: .3s;
    }
    button:hover{
        transform: scale(1.1);
        box-shadow: 0 0 15px 2px rgb(153, 153, 153);
    }
    a{
        display: inline-block;
        color: white;
        padding: 10px 20px;
        font-size: 20px;
    }
    
</style>