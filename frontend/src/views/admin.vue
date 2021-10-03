<template>
    <div class="body">
        <h1> ADMINISTRATION</h1>
        <section class="sectionRecherche">
            <h2>Rechercher des participants :</h2>
            <div class="boxRecherche">
                <!-- Cours-Nom -->
                <div>
                    <label for="nomCours">Nom du cours</label>
                    <select name="nomCours" id="nomCours" v-model="query.nomCours">
                        <option value="null">Tous</option>
                        <option value="Mini-Spider">Mini-Spider</option>
                        <option value="Gecko">Gecko</option>
                        <option value="Monkey">Monkey</option>
                    </select>
                </div>
                <!-- Nom Eleve -->
                <div>
                    <label for="nomEleve">Nom Eleve</label>
                    <input type="text" name="nomEleve" id="nomEleve" value="null" placeholder="ex.: De la tour" v-model="query.nomEleve">
                </div>
            </div>

        <button class="buttonChercher" @click="allCours">CHECHER</button>
        </section>
        <!-- donnees ä afficher  -->
        <div class="row" v-for="eleve in cours" :key="eleve.nom">
            <span class="col"> {{eleve.nomCours}}</span>
            <span class="col"> {{eleve.nomEleve}}</span>
            <span class="col"> {{eleve.prenomEleve}}</span>
            <span class="col"> {{eleve.npa}}</span>
            <span class="col"> {{eleve.adresseEleve}}</span>
            <span class="col breakWord"> {{eleve.mail}}</span>
            <span class="col"> {{eleve.phone}}</span>
            <span class="col colRemarque"> {{eleve.remarque}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name : "admin",
    data(){
        return{
            cours : [],
            query : {}
        }
    },
    methods : {
        allCours(){
            let obj = {
                ...this.query
            }
            for (let i in obj){
                if (obj[i] === "null" || obj[i] === ""){
                    delete obj[i]
                }
            }
            console.log(this.query)
            fetch("http://localhost:3000/all-cours",{
                method : "POST",
                body : JSON.stringify(obj),
                headers: {"Content-type": "application/json; charset=UTF-8",}

            })
            .then(response => response.json())
            .then(result => {
                this.cours = result
            })
        }
    }
}
</script>

<style scoped>
    .body{
        min-height: 100vh;
        background: white;
    }
    h1{
        padding-top: 100px;
    }
    .row{
        font-size: 14px;
        display: flex;
        background: rgb(221, 221, 221);
        margin-top: 10px;
        padding: 10px;
        margin:  20px;
    }
    .col{
        display: block;
        width: 120px;
        padding: 0 5px;
        border-right: solid 1px rgb(184, 184, 184);
    }
    label{
        display: block;
    }
    .colRemarque{
        width: 100%;
        max-width: 200px !important;
    }
    .breakWord{
        word-wrap: break-word;
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
</style>