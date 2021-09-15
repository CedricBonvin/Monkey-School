const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('dotenv').config()
const RouteTest = require("./router/routeTest")

const port = 3000

// connection à mongo Atlas
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@clustermonkeyschool.cmsiu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {                              
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// app.get("/", (req,res) => {
//     res.status(200).json({message : "MMMMMmmmmm"})
//     console.log("serveur écoute sur le port 3000")
// })

app.listen(port, () => {
    console.log("serveur en écoute sur le port 3000")
})
app.use("/", RouteTest)