<template>
<section class="sectionCours section">
    <h2 class="titleSection">Nos cours</h2>
    <!-- SECTION ENFANT /////////////////////////////////////////////-->
    <div class="col1">
        <div class="boxMael">
            <img class="mael" src="../assets/images/Mael.png" alt="">
        </div>
         <div class="enfantCol2">
            <div class="boxCol2">
                <h3 class="titleColCours">Enfants </h3>
                <ul>
                    <li>- De 4 à 18 ans</li>
                    <li>- En groupe ou en privée</li>
                </ul>
                <a href="#" class="plusInfo">Plus d'info..</a>
            </div>
        </div>
       
    </div>
    

    <!-- SECTION ADULTE ///////////////////////////////////////////////// -->

    <div class="col2">
        <div class="box1Adulte">
            <div class="boxAdulte">
                <h3 class="titleColCours">Adultes </h3>
                <ul>
                    <li>- De 18 à 172 ans</li>
                    <li>- En groupe ou en privée</li>
                </ul>
                <a href="#" class="plusInfo">Plus d'info..</a>
            </div>
        </div>
        <div class="box2Adulte">
            <img class="girlsDevers" src="../assets/images/girls-devers.png" alt="">
            <img class="girlsAssise" src="../assets/images/girls-assise.png" alt="">
        </div>
    </div>
        
    <div class="boxButtonCours">
            <button  class=" buttonCours">Découvrez tous nos cours</button>
    </div>
    
</section>
</template>

<script>
export default {
    name : "section-cours"
}
</script>

<style scoped>

    /*-----------------------------------------------------------------------*/
    /* SECTION ENFANTS ///////////////////////////////////////////////////////*/
    /*-----------------------------------------------------------------------*/
    .sectionCours{
        position: relative;
        margin-top: 230px;   
        padding-left: var(--gutter);          
    }
    .boxMael{
        position: relative;
        background: var(--color-primary);
        width: 40%;
        max-width: 400px;
    }
    .col1, .col2{
        color: white;
        position:relative;
        display: flex; 
        flex-flow: row ;     
        justify-content: space-between;
        margin-top: 3em;
        background: linear-gradient(131deg, rgb(43, 43, 43) 40%, rgba(99,99,99,0.9241205089820359) 96%);
    }
    .enfantCol2{
        display: flex;
        align-items: center;
        width: 50%;
    }
    .boxCol2{
        position: relative;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: flex-start;
        height: 80%;
        width: 100%;
        background: rgb(255, 255, 255);
        padding-left: 7vw;
        color: rgb(59, 59, 59);
    }
    .boxCol2:after{
        content: "";
        position: absolute;
        left: 0;
        height: 100%;  
        border: 2px solid var(--color-secondary);
    } 
    .mael{
        position: relative;
        display: block;
        bottom: 50px;
        width: 100%;
    }
   
    li, .box1Adulte li {
        font-size: 3vw;
     
    }
    .titleColCours{
        position: relative;
        font-size: 7vw;
    }
    .titleColCours::before{
        position: absolute;
        bottom: 0px;
        content: "";
        width: 90%;
        border: 2px solid var(--color-secondary);
    }
    hr{
        width: 80%;
        margin: 5vw auto;
        border: solid 1px rgb(124, 124, 124);   
    }

    /*-----------------------------------------------------------------------*/
    /* SECTION ADULTE ///////////////////////////////////////////////////////*/
    /*-----------------------------------------------------------------------*/
    .col1{
        margin-bottom: 5em;
    }
    .box1Adulte{
        width: 50%;
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        align-items: flex-start;
    } 
    .boxAdulte{
        width: 100%;
        height: 80%;
        background: red;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        align-items: flex-start;
        background: white;
        color: rgb(43, 43, 43);
        padding-left: 4vw;
        margin: auto 0;
        border-right: solid 5px var(--color-secondary);
    }
    .box2Adulte{
        width: 50%;
        position: relative;
    }
    .girlsDevers{
        width: 100%;
    }
    .girlsAssise{
        position: absolute;
        right: 0;
        top: 50%;
        width: 40%;
    } 
    .buttonCours{
        display: block;
        margin: 100px auto 0px auto;
        padding: 20px 30px;
        font-size: 5vw;
        background: var(--color-primary);
        color: white;
        border-radius: 30px;
        border: none;
        box-shadow: 0 0 1px 1px gray;
    }  


    /*-----------------------------------------------------------------------*/
    /* MEDIA QUERIES ///////////////////////////////////////////////////////*/
    /*-----------------------------------------------------------------------*/

    @media screen and (min-width:600px){
        .box1Adulte{
            min-height: 350px;
        }      
    }
    @media screen and (min-width:1020px){
        .box1Adulte h3, .box2 h3 {
            font-size: 5em;
        }
        li {
            font-size: 2em;   
        }
        .basicButton{
            font-size: 3em;
        }
      
    
    }
</style>