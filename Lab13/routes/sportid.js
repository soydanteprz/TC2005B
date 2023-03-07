const express = require("express");
const router = express.Router();
const path = require("path");

const sportidController = require("../controllers/sportid");

router.get("/nba", sportidController.get_playersnba);

router.get('/nuevo', sportidController.get_nuevo);

router.post('/nuevo', sportidController.post_nuevo);

router.get("/", sportidController.get_home);

router.get("/preguntas", sportidController.get_preguntas);

router.get("/nfl", sportidController.get_playersnfl);



module.exports = router;
