const Sportid = require('../models/sportid');
const user = require('../models/users');

const playersnfl = [
    {
        name: 'Tom Brady',
        team: 'Tampa Bay Buccaneers',
        image: 'https://static.www.nfl.com/image/private/t_headshot_desktop/league/q7dpdlxyu5rs05rgh1le'
    },
    {
        name: 'Patrick Mahomes',
        team: 'Kansas City Chiefs',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png&w=350&h=254'
    },
    {
        name: 'Aaron Rodgers',
        team: 'Green Bay Packers',
        image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png'
    }
];

exports.get_login = (req, res, next) => {
    res.render('login', {
        pageTitle: 'Login',
        users: user.fetchAll(),
        user: req.session.user || '',
    });
};

exports.post_login = (req, res, next) => {
    const userNew = new user({
        username: req.body.username,
        password: req.body.password,
    });
    userNew.save();
    req.session.user = userNew.username;
    res.status(300).redirect("/sportid");
};


exports.get_playersnba = (req, res, next) => {

    if (req.session.user) {
        console.log("User is logged in");
        res.render("nba", { pageTitle: "NBA", players: Sportid.fetchAll() });
    } else {
        console.log("User is not logged in");
        res.redirect("/sportid/login");
    }
};

exports.get_home = (req, res, next) => {

    if (req.session.user) {
        console.log("User is logged in");
        res.render("home", { pageTitle: "Home", user: req.session.user });
    } else {
        console.log("User is not logged in");
        res.redirect("/sportid/login");
    }
};

exports.get_preguntas = (req, res, next) => {

    if (req.session.user) {
        console.log("User is logged in");
        res.render("preguntas", { pageTitle: "Preguntas", user: req.session.user });
    } else {
        console.log("User is not logged in");
        res.redirect("/sportid/login");
    }
};

exports.get_playersnfl = (req, res, next) => {

    if (req.session.user) {
        console.log("User is logged in");
        res.render("nfl", { pageTitle: "NFL", players: playersnfl });
    } else {
        console.log("User is not logged in");
        res.redirect("/sportid/login");
    }
};



exports.get_nuevo = (req, res, next) => {

    if (req.session.user) {
        console.log("User is logged in");
        res.render("nuevo", { pageTitle: "Nuevo", user: req.session.user });
    } else {
        console.log("User is not logged in");
        res.redirect("/sportid/login");
    }
};

exports.post_nuevo = (req, res, next) => {

    console.log(req.body);

    const playernba = new Sportid({
        name: req.body.name,
        team: req.body.team,
        image: req.body.image,
    });

    console.log(playernba);

    playernba.save();
    res.status(300).redirect("/sportid/nba");
};









