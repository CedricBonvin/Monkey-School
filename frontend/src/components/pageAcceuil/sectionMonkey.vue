<template>
  <section class="sectionQui section">
            <h2 class="titleSection">Monkey-school ?</h2>
            <div class="contentQui">
                <div :style="{'background-image': 'url(' + require('@/assets/images/header-min.jpg') + ')'}"  class="block1">
                    <div class="boxBlock1 box">
                        <p>
                            <i class="fas fa-comment-dots"></i>
                           Monkey-School a été créée pour faire face à une demande croissante. <br><br> Sa mission est de rendre ce sport accessible au plus grand nombre en initiant, accompagnant et entraînant toute personne, quelle que soit son âge ou son niveau
                        </p>
                    </div>
                </div>
                <div class="block2">
                    <img  src="@/assets/images/femme-boule.jpeg" alt=" femme qui grimpe sur une boule">
                </div>
                <div class="block3">
                    <div class="boxBlock3 box">
                        <i class="fas fa-user"></i>
                        <p>Monkey-School, fondée en 2018 par Cédric Bonvin, n'a cessé de s'agrandir. <br><br> Aujourd'hui, nous accueillons plus de 40 élèves par semaine. Nous organisons également des stages d'escalade en nature ainsi que des événements ponctuels (cours de Noël, anniversaire, etc..,</p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: "monkey-scool"
}
</script>

<style>
   .sectionQui{
    padding-bottom: 40px;
   }
    .contentQui{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        padding: calc(var(--gutter));
    }
    .block1{
        background-size: cover;
        background-position: center;
        padding: calc(var(--gutter)*2);
        color: white;
        text-align: center;
    }
    .boxBlock1{
        background: rgba(0, 0, 0, 0.548);
        padding: calc( var(--gutter)*2) ;
  
    }
    .block2 > img{
        height: 200px;
        width: 200px;
        object-fit: cover;
        object-position: top;
        border-radius: 50%;
        border: solid 2px var(--color-secondary);
        margin: 20px 0;
    }
    .block3{
        color: white;
        background: var(--color-primary);
        padding:calc(var(--gutter) *2) ;
        
        box-shadow: 10px 10px 0px 0px rgb(121, 121, 121);
    }
    .boxBlock3{
        background: rgba(0, 0, 0, 0.548);
        padding: calc( var(--gutter)*2) ;
        text-align: center;
    }

/* //////////////////////////////////////////////////////////////////////////////*/
/* MEDAI QUERIES........................................................................... */
/* //////////////////////////////////////////////////////////////////////////////*/

    @media screen and (min-width: 650px) {
        .contentQui{
            position: relative;
            flex-flow: column;
            align-items: center;
           
        }
       .block1, .block3{
            max-width: 700px;
       } 
       .block1{
            margin-bottom: 150px;

       }
       .block2{
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%);
            margin: 0;
       }
    } 


/* MEDIA ---   1120px  ///////////////////////////////////////////////*/ 
    @media screen and (min-width: 1020px) {
       .contentQui{
           position: relative;
           flex-flow: nowrap;
           justify-content: space-evenly;
       }
       .block1{
           position: relative;
           width: 65%;  
           margin-bottom: 0;
       }
       .block1:before{
            content : "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            color:white;
            background: linear-gradient(120deg, rgba(21,9,121,0) 0%, rgba(9,26,121,0) 70%, rgb(221, 221, 221) 70%);    
       }

       .block2{
           position: absolute;
           top: 25%;
           left: 50%;
           transform: translate(-50%);
           margin: 0;
       }
       .block2 img{
           width: 250px;
           height: 250px;
           margin: 0;
       }
     
       .block3{
           width: 30%;   
       }
       .boxBlock1 p{
           width: 40%;
           text-align: left;
       }
       
    } 

    @media screen and (max-width : 500px){
        .block1, .block3{
            padding: 15px
        }
    }

    


</style>