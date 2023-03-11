const express = require("express");
const router = express.Router();
const path = require("path");

const sportidController = require("../controllers/sportid");
const usersController = require("../controllers/users");

router.get("/nba", sportidController.get_playersnba);

router.get('/nuevo', sportidController.get_nuevo);

router.post('/nuevo', sportidController.post_nuevo);

router.get("/", sportidController.get_home);

router.get("/nfl", sportidController.get_playersnfl);

router.get("/preguntas", sportidController.get_preguntas);

router.get('/login',sportidController.get_login);

router.post('/login',sportidController.post_login);

router.post('/logout',usersController.logout);

module.exports = router;