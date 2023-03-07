const Sportid = require('../models/sportid');

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



exports.get_playersnba = (req, res, next) => {

    console.log(req.get('Cookie'));

    res.setHeader('Set-Cookie', 'loggedIn=true');

    console.log( Sportid.fetchAll());

    res.render("nba", { pageTitle: "NBA", players: Sportid.fetchAll() });
};

exports.get_home = (req, res, next) => {
    res.render("home", { pageTitle: "Home" });
};

exports.get_preguntas = (req, res, next) => {
    res.render("preguntas", { pageTitle: "Preguntas" });
};

exports.get_playersnfl = (req, res, next) => {
    res.render("nfl", { pageTitle: "NFL", players: playersnfl });
};



exports.get_nuevo = (req, res, next) => {
    res.render('nuevo');
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






