<template>
  <section class="section">
    <h2 class="titleSection">La salle</h2>
    <p>
        Tous nos cours intérieurs sont donnés<br> dans la salle d’escalade la ...
    </p>
    <div class="sectionMur">
        <div class="paraTitre">
            <h3 class="titleMoubra">Moubra</h3>
            <p>Plus de 100 voies <br>Jusqu'a 13.5m de hauteur..!</p>
        </div>
        <img class="imageMur" src="../assets/images/mur.png" alt="mur de grimpe de la moubra">
    </div>
    <div class="sectionEnfant">
        <div>et la le mur enfants</div>
    </div>
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
    left: 5vw;
    top: 0;
    font-size: 2.4vw;
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
    font-size: 3vw;
}
.imageMur{
    width: 100%;
}

</style>