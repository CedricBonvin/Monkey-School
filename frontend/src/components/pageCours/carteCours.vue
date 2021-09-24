<template>

    <article @click="displayInfo(cours)">
        <div class="carte">
            <img :src="cours.image" alt="">
            <div class="explications">
                <h3>{{ cours.nom }}</h3>
                <p class="ageCours"> {{ cours.age[0]}} à {{cours.age[cours.age.length -1 ] }} ans  </p>
            </div>
        </div> 
        <div class="informations"  v-if="cours.displayInfo === true" >
                <h3 class="underLine">Informations..</h3>
                <i @click="closeInfo(cours,$event)" class="close fas fa-times"></i>
                <div class="boxMiniTitle">
                    <div class="lieux">    
                            <p class="lieuxCol1 titleOfDescrption">Lieux : </p>
                            <div class="lieuxCol2">
                                {{ cours.lieux}}
                                <a target="_blank" href="https://www.google.ch/maps/place/Salle+d'escalade+de+La+Moubra/@46.305854,7.477926,17z/data=!3m1!4b1!4m5!3m4!1s0x478ee02a2d6f2eeb:0xa4191fdc257d8cc5!8m2!3d46.305854!4d7.48012">
                                <i class="fas fa-map-marker-alt iconeInfoPrix red"></i>
                                </a>
                            </div>  
                    </div>
                    <div>
                        <p><span class="titleOfDescrption">Age</span> : {{ cours.age[0]}} à {{cours.age[cours.age.length -1 ] }} ans </p>
                        <p><span class="titleOfDescrption">Jour</span> : {{ cours.jour}} </p>
                    </div>
                    <div>
                        <p><span class="titleOfDescrption">Heure</span> : {{ cours.heure }} </p>
                        <p><span class="titleOfDescrption">Nbr. cours</span> : {{ cours.nbrCours }} </p>
                    </div>

                    <!-- SLOT date des cours -->
                    <slot name="dateCours"></slot>
                    
                    <div>
                        <div class="boxTitlePrice">
                            <span class="titleOfDescrption">Prix</span> : {{ cours.prix}}

                            <!-- SLOT Prix parenthèse -->
                            <slot name="aboOffert"></slot>

                            <i @click="displayInfoPrix(cours)" class="fas fa-info-circle iconeInfoPrix red"></i>
                        </div>

                        <!-- SLOT INFORMATION PRIX -->
                        <slot name="infoPrix"></slot>
                      
                    </div>
                </div>
            <div>
                <h4 class="underLine">Déscription :</h4>
                <p class="descriptionCours"> {{ cours.descriptionCour }}</p>
            </div>
     
            <button class="buttonFull" @click="goInscription()">S'inscrire</button>
        </div>
    </article>
 
</template>

<script>
export default {
    name : "carte-cours",
    props : ["cours"],
    data(){
        return{
        }
    },
    methods : {
        displayInfo(cours){
            if(cours.displayInfo === false){
             
                cours.displayInfo = true
            }
        },
        closeInfo(cours,e){
            e.stopImmediatePropagation()
            if(cours.displayInfo === true){
                cours.displayInfo = false
                cours.afficheDate = false
            }
            cours.displayInfoPrix = false
        },
        displayInfoPrix(cours){
            if(cours.displayInfoPrix === false){
                cours.displayInfoPrix = true
            }else cours.displayInfoPrix = false
        },
        closeDate(cours){
            if(cours.afficheDate === true){
                cours.afficheDate = false
            }else cours.afficheDate = true
        },
        goInscription(){
            let obj = {
                nomCours : this.cours.nom,
                ageCours : this.cours.age,
                prixCours : this.cours.prix,
                jourCours : this.cours.jour,
                heure : this.cours.heure

            }
          
            localStorage.setItem("formulaireInscription",JSON.stringify(obj))
            this.$router.push({path : "/inscription"})
        }
    },
}
</script>


<style scoped>
a{
    color: white;
}
article{
    margin-bottom: 50px;
    width: 95%;
    max-width: 350px;
    margin: 50px auto;
    cursor: pointer;
    transition: .3s;
    overflow: hidden;
}
article:hover{
    box-shadow: 0 0 10px 5px rgb(131, 131, 131);
    transform: scale(1.01);
}

.carte{
    position: relative;
    z-index: 1;
    height: 200px;  
}
img{
    width: 100%; 
    height: 100%;
    object-fit: cover;
}
.ageCours{
    font-size: calc(16px + 1.2vw);
}
.explications{
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0.781);
    color: white;
    font-size: 5vmin;
}
.explications h3{
    display: block;
    color: rgb(255, 255, 255);
    background: rgba(0, 0, 0, 0.555);
    text-align: center;
    padding: 10px 0;
}
.explications p{
    text-align: center;
    margin-top: 50px;
}
.informations{
    height: auto;
    padding: 10px;
    color: black;
    font-size: 14px;
    background: rgb(245, 245, 245);
    border: solid 1px rgb(190, 190, 190);
    animation: displayInfo .8s forwards;    
}
.close{
    color: black;
    font-size: 2rem;
    position: absolute;
    right: 10px;
    top: 5px;
    color: gray;
}

.closeInfoPrix{
    color: gray;
    font-size: 1.2rem;
    padding: 0;
    margin: 0;
    text-align: right;
    display: inline-block !important;
}
.boxTitleDate{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-left: 10px;
}
.iconeDate{
    color: var(--color-primary);
    display: block !important;
    margin: 0;
    text-align: left;
    font-size: 2rem;
    position: relative;
    z-index: 11;
}
.closeInfoDate{
    color: gray;
    font-size: 1.2rem;
    padding: 0;
    margin: 0 0 0px 0;  
    text-align: right;
    display: block !important;
}
.titleOfDescrption{
    font-weight: bold;
    color: rgb(31, 31, 31);
    font-size: 16px;
}
.boxMiniTitle{
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    margin: 20px 0;
}
.boxTitlePrice{
    margin-top: 20px;
}
.lieux{
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding: 20px 0;
}
.lieuxCol1{
    width: 80px;
}
.lieuxCol2{
    position: relative;
    top: 2px;
}
h3{
    display: inline-block;
    position: relative;
    font-size: 1.5rem;
}
h4{
    position: relative;
    display: inline-block;
    padding: 15px 0 5px 0;
    margin: 0;
    font-size: 1.5rem;
    text-align: left;
    color: black;
}
p{
    line-height: 1.6rem;
}
.underLine::after{
   content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    border: solid 2px var(--color-primary);
}
.boxIconePrix{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}
.iconeInfoPrix{
    display: inline-block !important; 
    font-size: 1.2rem;
    margin: 0 0 0 9px;
    padding: 0;  
    transition: .3s;
}
.iconeInfoPrix:hover{
     transform: scale(1.2) !important;
    color: blue;

}
.iconeInfo{
    display: inline !important;
    margin: 0 0 0 5px;
    padding: 0;
    text-align: left;
    color: var(--color-primary);
    font-size: 1.5rem;
}
.dateAffiche{
    display: inline-block;
    color: blue;
    text-decoration: underline;
    font-weight: 500;
    transition: .3s;
    transform-origin: left;
}
.dateAffiche:hover{
    
    transform: scale(1.1);
    color: red;
}
.annee{
    text-decoration: underline;
    font-weight: bold;
    margin-top: 20px ;
}
.annee:first-child{
    margin-top: 10px ;
}

.dateTableau{
    border: solid 1px gray;
    padding: 10px;
    background: white;
    border-radius: 5px;
}
.dateCours{
    width: 100%;
    position: relative;
     margin-top: 10px;
    z-index: 10;
 
}
.boxInfoPrix{
    position: relative;
    margin-top: 10px;
    z-index: 10;
}
.infoPrix{
    border: solid 1px rgba(0, 0, 0, 0.671);
    padding: 10px;
    background: white;
    border-radius: 5px;
        line-height: 1.2rem;

}
.infoPrix:before{
    content: "";
    position: absolute;
    top: -10px;
    left: 20px;
    width: 20px;
    height: 20px;
    background: rgb(255, 255, 255);
    transform: rotate(45deg);
    border: solid 1px rgba(0, 0, 0, 0.671) ;
    border-bottom: none;
    border-right: none;
    z-index: 1;
}

.red{
    color: rgb(177, 64, 64)
}
.descriptionCours{
    margin-top: 10px;
}

@keyframes displayInfo {

  from{
     transform: translateY(-100%);
  }
  to{
    transform: translateY(0);
  }  
}


</style>