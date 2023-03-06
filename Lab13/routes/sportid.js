const express = require("express");
const router = express.Router();
const path = require("path");

const portfolioController = require("../controllers/sportid");

router.get("/nba", portfolioController.get_players);

router.get("/", portfolioController.get_home);

router.get("/preguntas", portfolioController.get_preguntas);

router.get("/nfl", portfolioController.get_playersnfl);

module.exports = router;
