const express = require("express")
const app = express()
const mongoose = require("mongoose")
const history = require("connect-history-api-fallback")

require('dotenv').config();

const RouteMessage = require("./router/routeMessage")
const RouteLivre = require("./router/routeLivre")
const RouteInscription = require("./router/routeNewInscription")
const RoutePlaceRestante = require("./router/routePlaceRestante")
const routeAdmin= require("./router/routeAdmin")

//***************************************
// CONNECTION A MONGO ATLAS   ***********
//***************************************

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@clustermonkeyschool.cmsiu.mongodb.net/monkey-message?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie !')
  })
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {                              
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//***************************************
// PARSE DU BODY REQUEST   **************
//***************************************

//  app.use(bodyParser.json())  body-parser est déprécié utiliser les 2 lignes suivantes---
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


//***************************************
// ECOUTE   *****************************
//***************************************



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port,()=>console.log("serveur écoute sur le port : " + port));


//***************************************
// ROUTES UTILISES  *********************
//***************************************



app.use(express.static(__dirname + "/dist"));



app.use("/", RouteMessage)
app.use("/", RouteLivre)
app.use("/", RouteInscription)
app.use("/", RoutePlaceRestante)
app.use("/", routeAdmin)

// app.use(history()) // pour le refresh 

app.use(history({
  disableDotRule: true,
  verbose: true
}));





