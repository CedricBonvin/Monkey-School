<template>
   <section class="SectionEvent">
            <div class="boxEvent">
                <h2 class="tiltleSectionEvent">Evènement</h2>
                <card-event class="cardEvent"
                    titleEvent="Cours régulier 2021-2022 :"
                    text="Les insrciptions pour les cours réguliers enfants sont ouvert !!! Venez Grimpez dans une 
                            ambiance chaleureuse et décontracté..!! "
                 />
                 <card-event class="cardEvent"
                    titleEvent="Camp d'été :"
                    text="Les insrciptions pour les camps d'exétérieur sont ouvertes !!! ATTENTION !! Place limité !"

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