<template>
  <section class="section">
        <h2 >Navigation :</h2>
        <h3><i class="fas fa-search loupe"></i>Recherchez vos cours..</h3>
        <div class="boxLink">
            <h4 @click="scrollCible('regulierEnfant')"><a class="linkSection" >1.- Régulier Enfant ( Septembre à Mai )</a></h4>
            <h4 @click="scrollCible('regulierAdulte')"><a class="linkSection" >2.- Régulier Adulte ( Septembre à Mai )</a></h4>
            <h4 @click="scrollCible('privee')"><a class="linkSection" >3.- Privée</a></h4>
            <h4 @click="scrollCible('autonomie')"><a class="linkSection" >4.- Autonomie en salle</a></h4>
            <h4 @click="scrollCible('familles')"><a class="linkSection" >5.- Famille</a></h4>
            <h4 @click="scrollCible('noel')"><a class="linkSection" >6.- Noël</a></h4>
        </div>
  </section>
</template>

<script>
export default {
    name : "section-recherche",
    methods : {
        scrollCible(id){
             let cible = document.getElementById(id)
             cible.scrollIntoView({
                 top : top,
                 behavior : "smooth"
             })
        }
    },
    mouted(){

    }
}
</script>

<style scoped>
    section{
        margin: 50px 10px !important;
        padding-top: 0 !important;
    }
    a{
        color: rgb(46, 46, 46);
        display: inline-block !important;
        transform-origin: left;
        transition: .3s;
        padding: 0 !important;
        margin: 0 !important;
    } 
    h4 a:hover{
        display: inline-block !important;
        transform: scale(1.1);
        font-weight: 500;
        color: rgb(155, 64, 150) !important;
        padding-left: 0;
        text-decoration: underline ;
    }
    .boxLink{
        padding: 20px;
    }
    .linkSection{
        line-height: 1.6rem;
        margin-top: 20px;
        font-size: 18px;
        font-weight: 400;
        opacity: 85%;
    }   
    h2{
       
        font-size: 35px;
        padding: 5px 0;
        margin-top: 0;
        background: rgb(163, 88, 144);
        color: white;
        padding: 20px 0;
        padding-left: 20px;
        font-weight: bold;
    }
    h3{
        font-size: 30px;
        padding: 20px;
        padding-top: 40px;
        font-weight: 450;
        text-decoration: underline;
        letter-spacing: 2px;
        color: rgb(10, 10, 10);
        opacity: 65%;
    }
    h4{
        transform-origin: left;
        color: rgb(49, 49, 49);
        text-align: left;
        padding: 5px 0;
        margin: 0;
        cursor: pointer;
        transition: .3s;
    }
    
    .loupe{
        color: var(--color-primary);
        font-size: 60px;
        display: inline !important;
        padding-right: 20px;
    }
 
</style>