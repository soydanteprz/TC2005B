const express = require("express");
const router = express.Router();
const path = require("path");

const players = [
    {
        name: 'LeBron James',
        team: 'Los Angeles Lakers',
        image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
    },
    {
        name: 'Kevin Durant',
        team: 'Brooklyn Nets',
        image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png'
    },
    {
        name: 'Stephen Curry',
        team: 'Golden State Warriors',
        image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'
    }
];

router.get("/preguntas", (req, res, next) => {
    res.render("preguntas", { pageTitle: "Preguntas" });
});


router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});

router.get("/nba", (req, res, next) => {
    res.render("nba", { pageTitle: "NBA", players: players });
});

    router.get("/home", (req, res, next) => {
        res.render("home", { pageTitle: "Home" });
    });

    module.exports = router;
