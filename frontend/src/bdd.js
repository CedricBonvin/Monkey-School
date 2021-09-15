

// -----------------------------------------------------
// **********   BADE DE DONNEES DES COURS **************
// -----------------------------------------------------

const bddCours = {

    regulierEnfant : [

        //  MINI-SPIDER 
        {
            nom : "Mini-Spider",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Mini-Spider.png"),
            age : "4 à 7 ans",
            jour : "Lundi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :"CHF 840.- ",
            valeurAbo : "CHF 290.-",
            datesCours2020 : "06-09 / 13-09 / 20-09 / 27-09 / 04-10 / 11-10 / 25-10 / 08-11 / 15-11 / 22-11 / 29-11 / 06-12 / 13-12 / 20-12",
            datesCours2021 : "10-01 / 17-01 / 24-01 / 31-01 / 07-02 / 14-02 / 21-02 / 07-03 / 14-03 / 21-03 / 28-03 / 04-04 / 11-04 / 25-04 / 02-05 / 09-05",
            afficheDate : false,
            descriptionCour : "Ce cours se doit d'être ludique et axé sur des jeux, développement de l'équilibre, coordination, souplesse. Leurs donné tous les atouts pour qu'il puisse s'épanouire dans les meilleurs conditions qu'il soit !  ",
            displayInfo :false,
            displayInfoPrix : false
        },
        //  GECKO
        {
            nom : "Gecko",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Gecko.png"),
            age : "7 à 11 ans",
            jour : "Mardi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :"CHF 840.- ",
            valeurAbo : "CHF 290.-",
            datesCours2020 : "07-09 / 14-09 / 21-09 / 28-09 / 05-10  / 12-10 / 26-10 / 02-11 / 09-11 / 16-11 / 23-11 / 30-11 / 07-12 / 14-12 / 21-12",
            datesCours2021 : "11-01 / 18-01 / 25-01 / 01-02 / 08-02 / 15-02 / 22-02 / 08-03 / 15-03 / 22-03 / 29-03 / 05-04 / 12-04 / 26-04 / 03-05",
            afficheDate : false,
            descriptionCour : "Ce cours est fait pour les Geckos ",
            displayInfo :false,
            displayInfoPrix : false
        },
        //  MONKEY
        {
            nom : "Monkey",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Monkey.png"),
            age : "11 à 16 ans",
            jour : "Jeudi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :"CHF 840.- ",
            valeurAbo : "CHF 290.-",
            datesCours2020 : "02-09 / 09-09 / 16-09 / 23-09 / 30-09 / 07-10 / 28-10 / 04-11 / 11-11 / 18-11 / 25-11 / 02-12 / 09-12 / 16-12 / 23-12",
            datesCours2021 : "13-01 / 20-01 / 27-01 / 03-02 / 10-02 / 17-02 / 24-02 / 10-03 / 17-03 / 24-03 / 31-03 / 07-04 / 14-04 / 28-04 / 05-05",
            afficheDate : false,
            descriptionCour : "Ce cours est fait pour les MONKEY ",
            displayInfo :false,
            displayInfoPrix : false
        },
    ],
    regulierAdulte : [
        {
            nom : "Big-Monkey",
            image : require("@/assets/images/header.jpg"),
            age : "18 à 152 ans",
            jour : "Jeudi",
            heure : "19h30 à 21h",
            nbrCours : 30,
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :"CHF 840.- ",
            valeurAbo : "CHF 590.-",
            datesCours2020 : "06-09 / 13-09 / 20-09 / 27-09 / 04-10 / 11-10 / 08-11 / 15-11 / 22-11 / 29-11 / 06-12 / 13-12 / 20-12",
            datesCours2021 : "10-01 / 17-01 / 24-01 / 31-01 / 07-02 / 14-02 / 21-02 / 07-03 / 14-03 / 21-03 / 28-03 / 04-04 / 11-04 / 25-04 / 02-05",
            afficheDate : false,
            descriptionCour : "Ce cours est fait pour les Adultes",
            displayInfo :false,
            displayInfoPrix : false
        }
    ],
    coursPrive : [
        {
            nom : "Privée",
            image : require("@/assets/images/header.jpg"),
            age : "4 à 99 ans",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : "Illimité",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :"CHF 80.- / heure",
            datesCours2020 : "07-09 / 12-09 / 13-09",
            datesCours2021 : "07-01 / 12-01 / 13-01",
            afficheDate : false,
            descriptionCour : "Ceci est le cours prvée...",
            displayInfo :false,
            displayInfoPrix : false
        },
    ],
    autonomie : [
        {
            nom : "CB1",
            image : require("@/assets/images/header.jpg"),
            age : "4 à 99 ans",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : "Illimité",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :"CHF 80.- / heure",
            datesCours2020 : "07-09 / 12-09 / 13-09",
            datesCours2021 : "07-01 / 12-01 / 13-01",
            afficheDate : false,
            descriptionCour : "Ceci est le cours prvée...",
            displayInfo :false,
            displayInfoPrix : false
        },
        {
            nom : "CB2",
            image : require("@/assets/images/header.jpg"),
            age : "4 à 99 ans",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : "Illimité",
            lieux : "Salle d'escalade de la Moubra",
            prix :"CHF 80.- / heure",
            datesCours2020 : "07-09 / 12-09 / 13-09",
            datesCours2021 : "07-01 / 12-01 / 13-01",
            afficheDate : false,
            descriptionCour : "Ceci est le cours prvée...",
            displayInfo :false,
            displayInfoPrix : false
        },
    ]
}

export {bddCours}