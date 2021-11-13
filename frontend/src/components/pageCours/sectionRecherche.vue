<template>
  <section class="section">
        <h2 >Navigation :</h2>
        <div class="boxTitleNav">
            <div class="boxLoupe"><i class="fas fa-search loupe"></i></div>
            <h3>Recherchez vos cours..</h3>
        </div>
        <div class="boxLink">
            <ol>
                <li @click="scrollCible('noel')">
                    <a class="linkSection noel" > Noël</a>  
                    <img class="chapeau-Noel" src="@/assets/images/chapeau-Noel.png" alt="chapeau noel">
                </li>
                <li @click="scrollCible('regulierEnfant')"><a class="linkSection" > Régulier Enfant <span class="mois">( Septembre à Mai )</span></a></li>
                <li @click="scrollCible('regulierAdulte')"><a class="linkSection" >Régulier Adulte <span class="mois">( Janvier à Mai )</span></a></li>
                <li @click="scrollCible('privee')"><a class="linkSection" > Privé</a></li>
            </ol>
            
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
        margin: 50px auto;
        padding-top: 0 !important;

    }
    .chapeau-Noel{
        width: 50px;
        margin-left: 10px;
    }
    a{
        color: rgb(46, 46, 46);
        display: inline-block;
        transform-origin: left;
        transition: .3s;
        padding: 0;
        margin: 0;
    } 
    li:before{
        vertical-align: top;
    }
    li a:hover{
        display: inline-block;
        transform: scale(1.1);
        font-weight: 500;
        color: rgb(155, 64, 150);
        padding-left: 0;
        text-decoration: underline ;
    }
    .boxLink{
        padding: 20px;
    }
    
    .linkSection{
        line-height: 1rem;
        margin-top: 20px;
        font-size: 22px;
        font-weight: 400;
        opacity: 0.85;
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
        opacity: 0.65;
    }
    li{
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
    .boxTitleNav{
        display: flex;
        justify-content: flex-start;
        margin-top: 50px;
        margin-left: 20px;
    }
    i, h3{
        margin: 0;
        padding: 0;
    }
    .mois{
        font-size: 14px;
    }
    ol{
        margin-left: 20px;
    }

     @media screen and (max-width: 530px){
         
        .linkSection{
            font-size: 18px;
        }
        .section{
            margin: 0;
            width: 100%;
        }
       .boxLoupe {
            display: none ;
        }
        h3{
            font-size: 25px;
        }

       
    }
 
</style>