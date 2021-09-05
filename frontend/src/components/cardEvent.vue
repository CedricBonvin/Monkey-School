<template>
    <div class="card">
        <h2>{{titleEvent}}</h2>
        <p> {{ text}}</p>
        <a href="#">Plus d'info</a>
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


</style>