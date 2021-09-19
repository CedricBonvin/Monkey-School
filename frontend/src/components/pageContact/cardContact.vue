<template>
  <article class="card">
    <p>
        Pour toute questions veuillez remplir le formulaire. <br>
        Nous vous répondrons dans les plus bref délais.
    </p>
  </article>
</template>

<script>
export default {
    name : "card-contact"
}
</script>

<style scoped>
    .card{
        position: relative;
        top: -30px;
        width: 80%;
        max-width: 400px;
        margin: auto;
        padding: 20px;
        background: var(--color-primary);
        color: white;
        box-shadow: 10px 10px 0 0px gray;
    }
    p{
        text-align: center;
    }
    
</style>