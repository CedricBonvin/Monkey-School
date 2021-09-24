<template>
    <div>
        <Header 
            title="Panier"
        />
        <section>
             <i class="fas fa-shopping-basket iconePanier"></i>

            <carte-panier
             />
        </section>


        <section>
                <div class="boxTotalPrix section">
                        <p class="titlePrixTotal">TOTAL : </p>
                    <div class="bodyTotal">
                        <p>Sous-total : </p>
                        <p>Rabais :</p>
                        <p>Rabais à partir de 2 personnes</p>
                    </div>
                    <button class="buttonPaiment">PAIEMENT</button>   
                    <p class="accepte">NOUS ACCEPTONS :</p>
                    <img class="carteBanquaire" src="@/assets/images/visa.jpeg" alt="carte Visa">
                    <img class="carteBanquaire" src="@/assets/images/master-card.png" alt=" logo master card">
                    <img class="carteBanquaire" src="@/assets/images/twint.png" alt=" logo twint">
                </div>
        </section>
        <div v-if="panier.length > 1">Attention plus que 2 cours reservé :</div>
    </div>
</template>

<script>
import Header from '../components/forAll/header.vue'
import CartePanier from '../components/pagePanier/cartePanier.vue'
export default {
  components: { Header, CartePanier},
    name : "panier",

    data(){
        return{
           panier : []
        }
    },
    methods : {

    },
    beforeMount(){
        this.panier = JSON.parse(localStorage.getItem("panier"))
    }
   
}
</script>

<style scoped>
    .section{
        padding-top: 0;
    }
    Header{
        background: black;
    }
    .iconePanier{
        padding: 0px;
        color: black;
        margin: 0;
    }
    h2{
        font-size: 30px;
    }
    .boxTotalPrix{
        padding: 20px;
        border: solid 1px gray;
        width: 100%;
        max-width: 300px;
    }
    .bodyTotal{
        padding: 20px 0;
        border-bottom: solid 2px  rgb(187, 187, 187);
        border-top: solid 2px rgb(187, 187, 187);
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
    
  

</style>>
