<template>
   <section class="SectionEvent">
            <div class="boxEvent">
                <h2 class="tiltleSectionEvent">Evènement</h2>

                <card-event class="cardEvent"             
                    titleEvent="NOEL :"
                    text="Durant la période de Noël, de 15h à 18h, un prof d'escalade est à votre disposition !! Nombre de place limitées à 8 personnes ( 3 h. / CHF. 80.- ) "     
                    >
                    <template v-slot:imageEvent >
                         <img :src="require('@/assets/images/chapeau-Noel.png')" alt="chapeau-Noel" class="chapeau">
                    </template>
                </card-event>

                <card-event class="cardEvent"
                    titleEvent="REGULIER ADULTE :"
                    text="Début 2022, Monkey-school ouvre une classe régulier adulte, tous les jeudis de 19h30 à 21h. Les cours auront lieu de janvier à mai. ( abo. semestriel offert !! )"
                />

            </div>
        </section>
</template>

<script>
import CardEvent from './cardEvent.vue'
export default {
 name : "sectionEvent",
 components : {CardEvent}
}
</script>

<style>
    .SectionEvent{
        margin-top: -10px;
    }
    .tiltleSectionEvent{
        position: absolute;
        top: -73px;
        left: 5vw;
        padding: 20px;

        color: white;
        font-size: 1.7rem;
        background: var(--color-primary);
    }
    .boxEvent:before{
        content: "";
        position: absolute;
        top : 0px;
        left: 0px;
        width: 100%;
        border-bottom: solid 3px;
        color: var(--color-secondary);
    }
    .boxEvent{
        display: flex;
        justify-content: space-evenly;
        flex-flow: wrap;
        position: relative;
        background: #3a3a3ada;
        padding:calc(var(--gutter)* 4) 50px
    }
    
    .cardEvent{
        margin-bottom: 50px;   
    }
    .cardEvent:last-child{
        margin-bottom: 0px;
    }
    .imageEvent{
        position: absolute;
        top: 0;
    }
    .chapeau{
        width: 90px;
        position: absolute;
        top: -40px;
        right: 20px;
    
    }

     @media only screen and (min-width: 600px) {
        .tiltleSectionEvent{
            font-size: 2rem;
            top: -81px;
        }
    }
  
    @media only screen and (min-width: 900px) {
        .cardEvent{
            margin-bottom: 0px;
        }
    }
</style>