<template>
    <div>
        <i id="burger" class="fas fa-bars"></i>
        <ul id="topbarMenu" >
            <li><router-link to="/">Accueil</router-link> </li>
            <li><router-link to="/cours">Cours</router-link> </li>
            <li><router-link to="/livreDor">Livre d'or</router-link> </li>
            <li><router-link to="/contact">Contact</router-link> </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "MenuTopbar",
    data (){
        return{
        }
    },
    methods : {
    },
    mounted(){
        // AFFICHE LE MENU BURGER
            const menu = document.getElementById("topbarMenu")
            const burger = document.getElementById("burger")
            menu.setAttribute("data-displaymenu", "false")

        document.body.addEventListener("click", function(e){
            if (e.target === burger && menu.dataset.displaymenu === "false"){
                menu.classList.remove("menuSlideOut")
                menu.classList.add("menuSlideIn")
                menu.dataset.displaymenu = "true"
            }else if ( menu.dataset.displaymenu === "true"){
                menu.classList.remove("menuSlideIn")
                menu.classList.add("menuSlideOut")
                menu.dataset.displaymenu = "false"
            }
        })
    }
}
</script>



<style scoped>

    .fa-bars{
        font-size: 2em;
        cursor: pointer;
    }
    ul{
        position: absolute;
        padding: 20px;
        height: 100vh;
        z-index: 3;
        right: -125px;
        top: 50px;
        background-color: rgb(32, 32, 32);
        list-style-type: none;
        opacity: 0;
    }
    .menuSlideIn{
        animation: slideIN 1s forwards;
    }
    .menuSlideOut{
        animation: menuSlideOut 1s forwards;
    }
    li{
        padding: 15px 0;
        margin: 0 10px;
    }
 
    a.router-link-exact-active {
        color: #42b983;
        font-size: 1.2rem;
        font-weight: bold;
    }
    a {
        color: white;
        text-decoration: none;
        transition: .3s;
    }
    a:hover{
        display:inline-block;
        transform: scale(1.2);
        font-weight: bold;
        text-decoration: underline;
        
    }
    #burger{
        font-size: 1.7em;  
        margin: 0;  
        padding: 0;   
    }
 
</style>