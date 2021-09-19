<template>
  <article class="boxMessageRecu">
        <div v-for="item in tabMessage" :key="item.test" class="boxCarte">
            <p class="date">Message du : {{item.date}}</p>
            <div class="carte">
                <div class="topCard">
                    <p> {{ item.nom}}</p>
                </div>
                <div class="bodyCard">
                    <h3>message :</h3>
                    <p>{{item.message}}</p>
                </div>
            </div>
        </div>
</article>
</template>

<script>
export default {
    name: "messageRecu",
    props :["tabMessage"]
}
</script>

<style scoped>
    .boxCarte{
        margin: 50px 0;
    }
    .date{
        text-align: center;
        font-size: 14px;
        color: rgb(77, 77, 77);
    }
    .carte{
        border-radius: 10px;
        overflow: hidden;
        margin: 0px 10px;
        border: solid 3px rgb(235, 235, 235);
        box-shadow: 5px 5px 15px 0 gray;
       
    }
    .topCard{
        background: var(--color-primary);
        padding: 5px 0 5px 15px;
        color: white;
        font-weight: bold;
        text-align: left;
    }
    .bodyCard{
        padding:20px;
        background: rgb(241, 241, 241);
    }
    .bodyCard h3 {
        margin-bottom: 20px;
    }
     .bodyCard p {
        padding: 0 20px;
    }
    h3{
        font-style: italic;
        font-weight: 500;
    }
</style>