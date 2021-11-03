<template>
    <div class="card">
        <slot name="imageEvent"></slot>
        <h2>{{titleEvent}}</h2>
        <p> {{ text}}</p>
        <router-link to="/cours#noel" class="link">Plus d'info..</router-link>
    </div>
</template>

<script>
export default {
    name : "card-event",
    props : ["titleEvent", "text"]
}
</script>

<style scoped>
.card{
    position: relative;
    z-index: 2;
    max-width: 400px;
    background: var(--color-primary);
    padding:calc( var(--gutter) *2) ;
    color: white;
    box-shadow: 15px 15px 0px 1px rgb(41, 41, 41);
}
h2{
    display: inline-block;
    position: relative;
    font-weight: 400;
    color: rgb(233, 233, 233);
    font-size: 25px;
    font-style: italic;
}

h2:before{
    content: "";
    position: absolute;
    bottom: -5px;
    color: var(--color-secondary) ;
    border-bottom: solid;
    width: 50%;
}
p{
    padding: 30px 0;
}
a{
    display: block;
    text-align: right;
    padding: 0px 5px 0 0 ;
    text-decoration: underline;
}
.link{
    color: rgb(48, 48, 187);
    font-size: 18px;
    font-weight: 400;

}

@media screen and (max-width : 500px){
    .card{
        padding : 20px
    }
}


</style>