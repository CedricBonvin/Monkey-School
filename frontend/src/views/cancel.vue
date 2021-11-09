
<template>
  <div>
      <h1>Désolé mais votre paiemenet n'a pas été accepté...!</h1>
      <button>
          <router-link to="/paiement">Retour au paiement</router-link>
      </button>
  </div>
</template>

<script>
export default {
    name : "cancel"
}
</script>

<style scoped>
    h1{
        padding: 100px;
        color: white;
        font-weight: bold;
    }
    button{
        display: block;
        margin: 50px auto;
        background: red;
        border: none;
    }
    a{
        display: inline-block;
        color: white;
        padding: 10px 20px;
        font-size: 20px;
    }
</style>