<template>

    <article @click="displayInfo(cours)">
        <div class="carte">
            <img :src="cours.image" alt="">
            <div class="explications">
                <h3>{{ cours.nom }}</h3>
                <p class="ageCours"> {{ cours.age }} </p>
            </div>
        </div> 
            <div v-if="cours.displayInfo === true" class="informations">
                <h3 class="underLine">Informations..</h3>
                <i @click="closeInfo(cours,$event)" class="close fas fa-times"></i>
                <div class="boxMiniTitle">
                    <div class="lieux">
                        <p> <span class=" titleOfDescrption">Lieux : </span>{{ cours.lieux}}
                             <a target="_blank" href="https://www.google.ch/maps/place/Salle+d'escalade+de+La+Moubra/@46.305854,7.477926,17z/data=!3m1!4b1!4m5!3m4!1s0x478ee02a2d6f2eeb:0xa4191fdc257d8cc5!8m2!3d46.305854!4d7.48012">
                                <i class="fas fa-map-marker-alt iconeInfoPrix red"></i>
                            </a>
                        </p>
                       
                    </div>
                    <div>
                        <p><span class="titleOfDescrption">Age</span> : {{ cours.age}} </p>
                        <p><span class="titleOfDescrption">Jour</span> : {{ cours.jour}} </p>
                    </div>
                    <div>
                        <p><span class="titleOfDescrption">Heure</span> : {{ cours.heure }} </p>
                        <p><span class="titleOfDescrption">Nbr. cours</span> : {{ cours.nbrCours }} </p>
                    </div>
                    <div>
                        <div class="boxTitlePrice">
                            <span class="titleOfDescrption">Prix</span> : {{ cours.prix}}
                            <span class="aboOffert"> ( Abo. annuel offert !)</span>
                            <i @click="displayInfoPrix(cours)" class="fas fa-info-circle iconeInfoPrix red"></i>
                        </div>
                        <div class="boxInfoPrix">
                            <div v-if="cours.displayInfoPrix === true" class="infoPrix">
                                <i @click="closeInfoPrix(cours,$event)" class="closeInfoPrix fas fa-times"></i>
                                <p>
                                    L'encadrement, le matériel, et l'entrée à la salle sont compris dans le prix du cours. 
                                </p>
                                <strong class="red"> Nous offrons l'abonnement annuel à la salle à chaque participant..!!</strong> . 
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 class="underLine">Déscription :</h4>
                    <p> {{ cours.descriptionCour }}</p>
                </div>
                <button class="buttonFull">S'inscrire</button>
            </div>
    </article>
 
</template>

<script>
export default {
    name : "carte-cours",
    props : ["cours"],
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
            }
            cours.displayInfoPrix = false
        },
        closeInfoPrix(cours,e){
            e.stopImmediatePropagation()
            cours.displayInfoPrix = false
        },
        displayInfoPrix(cours){
            if(cours.displayInfoPrix === false){
                cours.displayInfoPrix = true
            }else cours.displayInfoPrix = false
        }
    }
}
</script>


<style scoped>

article{
    margin-bottom: 50px;
    width: 95%;
    max-width: 350px;
    margin: 50px auto;
    cursor: pointer;
    transition: .3s;
}
article:hover{
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px rgb(97, 96, 96);
}
.carte{
    position: relative;
    background: gray;
    border-radius: 10px;

    height: 200px;
}
img{
    width: 100%; 
    height: 100%;
    object-fit: cover;
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
    position: relative;
    padding: 10px;
    color: black;
    font-size: 14px;
    background: rgb(245, 245, 245);
    border: solid 1px rgb(190, 190, 190);
    
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
    width: 100%;
    padding: 20px 0;
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
.iconeInfoPrix{
    display: inline-block !important;
   
    font-size: 1.2rem;
    margin: 0 0 0 9px;
    padding: 0;  
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
.aboOffert{
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    margin-left: 5px;
    line-height: 1.2rem;
}
.red{
    color: rgb(177, 64, 64)
}



</style>