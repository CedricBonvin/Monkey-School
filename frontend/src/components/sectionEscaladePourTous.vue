<template>
   <section class="sectionPourTous section">
            <h2 class="titleSection">Escalade pour tous !</h2>
            <div class="container">
                <div class="col1">
                    <img class="box1" src="../assets/images/man_svg1.png" alt=" grimpeur musclée">
                </div>
                <div class="box2">
                    <i class="fas fa-check-circle"></i>
                    <div class="box2Para">
                        <p>Enfant, Adulte, débutant ou expert, l’escalade apporte bon  nombres de bien-fait !<br/>
                            Apprendre à dépacer ses limites, ou simplement passer un bon moment.<br>
                            Travailler sa condition phiysique, ou juste regarder les copains grimper ! <br>
                            Ce sport est ouvert et accessibe à toute personne  qui le désire !
                        </p>
                    </div>
                    <img class="imageJordan" src="../assets/images/jordan.png" alt="enfant de 6 ans qui rigole">
                    <img class="imageSingeCorde" src="../assets/images/singeCorde.png" alt="singe qui déscend une corde">
                </div>
                <div class="col3" v-if="up1020px" >
                    <img src="../assets/images/adria.png" alt="jeune fille qui grimpe sur une boule">
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name : "escalade-pour-tous",
    data(){
        return{
            up1020px : false
        }
    },
    mounted(){
        // affiche la 3em colonne de la section si window est au-dessus de 1020px
        window.addEventListener("resize", () => {
            if (window.matchMedia("(min-width: 1020px)").matches) {
                    this.up1020px = true
                 } 
            else {
                this.up1020px = false
            }
        });

        if (window.matchMedia("(min-width: 1020px)").matches) {
                this.up1020px = true
        } 
    }
}
</script>



<style scoped>
      .box1{
        width: 200px;
        display: block;
        margin: auto;
    }
    .sectionPourTous{
        padding: var(--gutter);
        padding-bottom: 50px;
    }
    .sectionPourTous .box2 {
        position: relative;
        background: var(--color-primary);
        padding: calc(var(--gutter)*2);
    }
    .sectionPourTous .box2:before {
         content: "";
         position: absolute;
         z-index: -1;
         bottom: -80px;
         width: 71%;
         height: 100px;
         border: solid 5px var(--color-secondary);
    }
    .sectionPourTous .box {
        background: blue;
    }
    .box2Para{
       background: rgba(0, 0, 0, 0.548); 
       padding: calc(var(--gutter)*2) ;
       color: white;
       text-align: center;
    }
    .imageJordan{
        width: 100px;
        position: absolute;
        bottom : -75px    
    }
    .imageSingeCorde{
        width: 200px;
        position: absolute;
        right: -10px;
        bottom : -290px   
    }
    .col3{
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .col3 img{
        width: 50%;
    }


    /* MEDIA 650px ////////////////////////////////////////////////////*/
    @media screen and (min-width:750px){
        .container{
            display: flex;
        }
        .col1{
            display: flex;
            align-items: center;
            width: 40%;
        }
        .box2{
            width: 60%;
        }
        .col1 img{
        width: 100%;
        }
    }

    @media screen and (min-width:1020px){
        .container{
            position: relative;
            justify-content: space-between;
        }
        .col1, .col3{
        width: 33.3%;
        }
        .col1 img{
            width: 100%;
        }
       .box2{
            width: 30%;
            max-width: 350px;
            top: 0 ;
            left: 0;
            background: red;
            margin: auto;
        }
        .col3{
            text-align: right;
        }
        .col3 img{
            width: 70%;;
        }
       
    }
</style>