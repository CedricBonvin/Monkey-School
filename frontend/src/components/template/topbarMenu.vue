<template>
    <div>
        <i id="burger" class="fas fa-bars"></i>
        <ul id="topbarMenu" >
            <li><router-link to="/">Acceuil</router-link> </li>
            <li><router-link to="/cours">Cours</router-link> </li>
            <li><router-link to="/shop">Shop</router-link> </li>
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
                console.log("yes")
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
        position: fixed;
        padding: 20px;
        height: 100vh;
        width: 100px;
        z-index: 3;
        right: -100px;
        top: 50px;
        background-color: rgb(32, 32, 32);
        list-style-type: none;
    }
    .menuSlideIn{
        animation: slideIN 1s forwards;
    }
    .menuSlideOut{
        animation: menuSlideOut 1s forwards;
    }
    li{
        line-height: 50px;
        margin: 0 10px;
    }
 
    a.router-link-exact-active {
        color: #42b983;
    }
    a {
        color: white;
        text-decoration: none;
    }
    #burger{
        font-size: 1.7em;  
        margin: 0;     
    }
 
</style>