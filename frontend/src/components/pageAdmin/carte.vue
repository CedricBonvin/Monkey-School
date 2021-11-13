<template>
  <div class="carte">
      <p class="nomCours">{{ item.clef}}</p>
      <p class="date"> Date : {{ new Date(item.dateTypeDate).toLocaleDateString('fr-FR') }}</p>
      <p>Nbr participants : {{ item.nbr_participants}}</p>
        <button @click="participants">PARTICIPANTS</button>

        <!-- participants -->
        <div v-if="displayParticipants">
            <div v-for="eleve in item.participants" :key="eleve.id">
                <div :id="eleve._id" @click="afficheInfo(eleve._id)" class="eleve"> nom : {{ eleve.eleve.nomEleve}}
                    <div style="display : none" class="info">

                        <div @click="closeInfo(eleve._id,$event)" class="x">X</div>
                 
                        <label for="radioEleve">Eleve</label>
                        <input id="radioEleve" type="radio" :value="eleve.eleve" v-model="info">
                      
                        <label for="radioContact">Contact</label>
                        <input id="radioContact" type="radio" :value="eleve.contact" v-model="info">
                      
                        <label for="radioInfoCours">InfoCours</label>
                        <input id="radioInfoCours" type="radio" :value="eleve.infoCours" v-model="info">
                      
                        <label for="radioPaiement">Paiement</label>
                        <input id="radioPaiement" type="radio" :value="eleve.paiement" v-model="info">
                       
                        <div class="boxInfoChoisie">
                            <div  v-for="(name,props) in info" :key="props.id">
                               <span class="propriete">{{props}} : </span>
                               <span>{{name}}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name : "carteAdmin",
    props : ["item"],
    data(){
        return {
            displayParticipants : false,
            info : "",
        }
    },
    methods : {
        participants(){
            this.displayParticipants ? this.displayParticipants = false : this.displayParticipants = true
        },
        afficheInfo(id){
            let parent = document.getElementById(id)
            let cible = parent.querySelector(".info")         
            cible.style.display = "block"
        },
        closeInfo(id,e){
            e.stopImmediatePropagation()
            console.log("salut")
            let parent = document.getElementById(id)
            let cible = parent.querySelector(".info")         
            cible.style.display = "none"
        }
    }
}
</script>

<style scoped>
    .carte{
        border: solid 1px gray;
        margin: 20px 50px;
        padding: 20px;
        background: white;
    }
    button{
        padding: 5px 10px;
        margin-top: 20px;
        cursor: pointer;
        background: green;
        color: white;
        border: none;
        transition: .3s;
    }
    button:hover{
        transform: scale(1.1);
        background: rgb(12, 90, 12);
    }
    .eleve{
        margin: 10px;
        cursor: pointer;
    }
    .info{
        position: relative;
        background: lightgray;
    }
    .propriete{
        display: inline-block;
        font-weight: bold;
        padding: 5px ;  
        padding-left: 20px;
    }
    .date{
        font-weight: bold;
        color: brown;
    }
    .nomCours{
        font-weight: bold;
        font-size: 20px;
    }
    label{
        display: inline-block;
        margin-left: 20px;
        padding: 20px 0;
        cursor: pointer;
    }
    .boxInfoChoisie{
        background: rgb(238, 238, 238);
    }
    .x{
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 30px;
        font-weight: 900;
    }
</style>