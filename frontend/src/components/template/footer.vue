<template>
  <footer class="footer">
    <div class="col">
        <h3>Naviguation</h3>
        <ul>
            <li><a href="/">Acceuil</a></li>
            <li><a href="#">Cours</a></li>
            <li><a href="#">Livre d'or</a></li>
            <li><a href="#">La salle</a></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
    <div class="col">
        <h3>Partenaires</h3>
        <img class="logoAccm" src="@/assets/images/accm-logo.jpeg" alt="logo de l'accm">
        
    </div>
    <div class="col">
        <h3>Suivez-nous..!</h3>
        <i class="fab fa-facebook-square"></i>
    </div>

  </footer>
</template>

<script>
export default {
    name : "footer-section"
}
</script>

<style scoped>

    .footer{
        background: black;
        color: white;
        display: flex;
        justify-content: space-around;
        padding: 1em;
    }
    h3{
        padding-bottom: 1em;
        font-size: 14px;
        opacity: .5;
    }
   
    ul{
        list-style-type: disc;
    }
    li{
        margin-left: 1em;
        font-size: 14px;
        line-height: 1.5rem;
    }
    a{
        color: white;
    }
    i{
        font-size: 2em;
    }
    .logoAccm{
        width: 50px;
    }
    .col:nth-child(2){
        text-align: center;
    }
</style>