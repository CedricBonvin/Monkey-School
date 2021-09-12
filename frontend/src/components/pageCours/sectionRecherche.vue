<template>
  <section class="section">
        <h2 class="underLine">Navigation :</h2>
        <h3>recherchez vos cours..</h3>
        <div class="linkSection">
            <h4><a class="linkSection" href="#regulierAdulte">1.- Régulier Adulte ( Septembre à Mai )</a></h4>
            <h4><a class="linkSection" href="#regulierEnfant">2.- Régulier Enfant ( Septembre à Mai )</a></h4>
            <h4><a class="linkSection" href="#privee">3.- Privée</a></h4>
            <h4><a class="linkSection" href="#autonomie">4.- Autonomie en salle</a></h4>
            <h4><a class="linkSection" href="#stage">5.- Stage Extérieur</a></h4>
        </div>
  </section>
</template>

<script>
export default {
    name : "section-recherche"
}
</script>

<style scoped>
    a{
        color: rgb(46, 46, 46);
    }
    a:hover{
         color: var(--color-primary);    
    }
    .linkSection{
        line-height: 1.6rem;
        margin-top: 20px;
    }
    section{
        padding: 20px;
    }
    h2{
        display: inline-block;
        position: relative;
        padding: 5px 0;
        margin: 20px 0;
        margin-top: 0;
    }
    h4{
        color: rgb(49, 49, 49);
        text-align: left;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
 
</style>