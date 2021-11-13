<template>
    <div class="body">
        <h1> ADMINISTRATION</h1>
        <section class="sectionRecherche">
            <h2>Rechercher des participants :</h2>
            <!-- RECHERCHE -->
            <div class="boxRecherche">
                <!-- type de cours -->
                <div>
                    <label for="typeCours">TYPE COURS</label>
                    <select name="typeCours" id="typeCours" v-model="query.typeCours">
                        <option value="null">Tous</option>
                        <option value="regulier">Regulier</option>
                        <option value="Event">Event</option>
                    </select>
                </div>
                <!-- Nom du cours -->
                <div>
                    <label for="nomCours">Nom du cours</label>
                    <select name="nomCours" id="nomCours" v-model="query.nomCours">
                        <option v-if="query.typeCours === 'Event'" value="null">Tous</option>
                        <option v-if="query.typeCours === 'Event'" value="Noel">Noel</option>
                        <option v-if="query.typeCours === 'Event'" value="Fevrier">Février</option>

                        <option v-if="query.typeCours === 'regulier'" value="null">Tous</option>
                        <option v-if="query.typeCours === 'regulier'" value="Mini-Spider">Mini-Spider</option>
                        <option v-if="query.typeCours === 'regulier'" value="Gecko">Gecko</option>
                        <option v-if="query.typeCours === 'regulier'" value="Monkey">Monkey</option>
                        <option v-if="query.typeCours === 'regulier'" value="Big-Monkey">Big-Monkey</option>
                    </select>
                </div>


                <!--RECHERCHE Nom Eleve -->
                <!-- <div>
                    <label for="nomEleve">Nom Eleve</label>
                    <input type="text" name="nomEleve" id="nomEleve" value="null" placeholder="ex.: De la tour" v-model="query.nomEleve">
                </div> -->
            </div>
        <button class="buttonChercher" @click="recherche">CHECHER</button>
        </section>

        <section>
            <div v-for="item in cours" :key="item.id">
                <carte 
                    :item="item"
                />
            </div>
        </section>
    </div>
</template>

<script>

import carte from "../components/pageAdmin/carte.vue"

export default {
    name : "admin",
    components : { carte},
    data(){
        return{
            cours : [],
            query : {},
            infoCours : {},
            titleQuery : ""
        }
    },
    methods : {
        recherche(){
                fetch("http://localhost:3000/recherche",{
                method : "POST",
                body : JSON.stringify({...this.query}),
                headers: {"Content-type": "application/json; charset=UTF-8",}

            })
            .then(response => response.json())
            .then(result => {
                this.cours = result
                console.log(this.cours)
            })
        },
    }
}
</script>

<style scoped>
    .body{
        min-height: 100vh;
        background: rgb(212, 212, 212);
    }
    .boxButton{
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
    }
    .button{
        padding: 10px 20px ;
        border: none;
        cursor: pointer;
        background: green;
        color: white;
        font-weight: bold;
        transition: .3s;

    }
    .button:hover{
        transform: scale(1.1);
        box-shadow: 0 0 5px 0px gray;
    }

    h1{
        padding-top: 100px;
    }
    h2{
        padding: 20px 0;
        text-decoration: underline;
        font-weight: bold;
        opacity: 80%;
    }
    .row{
        font-size: 14px;
        background: rgb(255, 255, 255);
        margin-top: 10px;
        padding: 10px;
        margin:  20px;
    }
    
    label{
        display: block;
    }
   
    
    .buttonChercher{
        background: rgb(245, 63, 63);
        color: white;
        padding: 10px 20px;
        border: none;
        font-size: 20px;
        margin-top: 50px;
        cursor: pointer;
        transition: .3s;
    }
    .buttonChercher:hover{
        transform: scale(1.05);
        box-shadow: 0 0 15px 2px rgb(133, 133, 133);
    }
    .sectionRecherche{
        background: rgb(243, 176, 252);
        padding: 20px ;
        margin-top: 30px;
    }
    .boxRecherche{
        display: flex;
        justify-content: space-evenly;
        background: rgb(210, 141, 216);
        padding: 30px 0;
    }
    .eleve{
        display: flex;
        flex-flow: wrap;
        border-bottom: solid 1px gray;
        padding-bottom: 10px;
    }
    .clefEleve{
        font-weight: bold;
        padding-bottom: 5px;
        min-width: 100px;
    }
    .clef{
        font-weight: bold;
        padding-bottom: 5px;
        min-width: 120px;
    }

    .col{
        text-align: center;
        border-right: solid 1px black;
        padding: 0 10px;
        margin-top: 20px;
    }
    .titleQuery{
        margin-top: 20px;
        text-align: center;
    }
    .ligne{
        display: flex;
        margin: 10px 0;
    }
</style>