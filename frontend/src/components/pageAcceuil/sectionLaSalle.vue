<template>
   <!-----------------------
        SECTION MUR ADULTE 
    ------------------------ -->
  <section class="section sectionLaSalle">
    <h2 class="titleSection">La salle</h2>
    <p class="paraTousNosCours">
        Tous nos cours intérieurs sont donnés<br> dans la salle d’escalade de la ...
    </p>
    <div class="sectionMur">
        <div class="paraTitre">
            <h3 class="titleMoubra">Moubra</h3>
        </div>
        <img class="imageMur" src="@/assets/images/mur.png" alt="mur de grimpe de la moubra">
    </div>

    <hr>
     <!-----------------------
        SECTION MUR ENFANT 
    ------------------------ -->
    <h2 class="titleZoneEnfant">Zone Enfant :</h2>

    <div class="sectionEnfant">
        <div class="colEnfant">
            <img  src="@/assets/images/mur-enfant.png" alt="">
        </div>
        <div  class="colEnfant col2">
            <img  src="@/assets/images/bloc-enfant.png" alt="">
        </div>
    </div>
    <!-- <div class="boxButton">
        <button>
            <router-link to="#" class="buttonFull">DECOUVREZ LA SALLE..</router-link>
        </button>
    </div> -->
  </section>
</template>

<script>
export default {
    name : "salle"
}
</script>

<style scoped>
.section{
    margin-top: 200px;
}
button{
    display: block;
    margin: auto;
    border: none;
}
.buttonFull{
    margin: 0;
}
.sectionLaSalle{
    margin-bottom: 0;
    padding-bottom: 50px;
  
}
.sectionMur{
    position: relative;
    padding: 20px;
   padding-right: 0;
    z-index: 0;
}
.sectionMur:before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 15vw;
    background: var(--color-primary);
    z-index: -2;
}
.paraTitre{
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 20px;
}
.paraTitre p {
    position: relative;
    left: .5vw;
    top: 50px;
  
}
.paraTitre h3{
    position: relative;
    font-size: 7vw;
    display: inline-block;
    padding-left: 30px;
}
.paraTitre h3:after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 1vw;
    background: var(--color-primary);
    padding-left: 3vw;
}
.paraTitre h3:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 250%;
    width: 1vw;
    background: var(--color-secondary);
    padding-left: 20px;
}
p{
    margin: 7vw 0;
    margin-left: 20px;
    font-size: calc(14px);
}
.paraTousNosCours{
    margin-top: 0;
}
.imageMur{
    width: 100%;
}
hr{
margin: 10vw 30%;
}

/*------------------------------------------------*/
/* Section ENFANT --------------------------------*/
/*------------------------------------------------*/

.titleZoneEnfant{
    text-align: right;
    padding-right: 6vw;
    padding-bottom: 10px;
    font-size: 4vw;
}
.sectionEnfant{
    display: flex;
    position: relative;
    z-index: 2;
}
.sectionEnfant:before{
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: -2;
    width: 100%;
    height: 30%;
    background: var(--color-secondary);

}
.colEnfant{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    
}
.col2{
    position: relative;
}
.col2:before{
    content: "";
    position: absolute;
    top: 50%;
    left: 3em;
    transform: translateY(-50%);
    z-index: -2;
    width: 20%;
    height: 80%;
    border: solid 2px var(--color-primary);
    }
.titleBlocEnfant{
    position: absolute;
    bottom: -1em;
    right: 1em;
}
.sectionEnfant img{
    width: 80%;
}
.boxButton{
    margin-top: 50px;
}

@media screen and (min-width : 500px){
    p{
        font-size: calc(14px + 1vw);
        margin-top: 50px !important;
    }
}



</style>