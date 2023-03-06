const express = require("express");
const router = express.Router();
const path = require("path");

const portfolioController = require("../controllers/portfolio");

router.get("/nba", portfolioController.get_players);

router.get("/home", portfolioController.get_home);

router.get("/preguntas", portfolioController.get_preguntas);


router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "index.html"));
});


module.exports = router;
