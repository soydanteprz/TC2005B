const Sportid = require("../models/sportid");

const playersnfl = [
    {
        name: "Tom Brady",
        team: "Tampa Bay Buccaneers",
        image: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/q7dpdlxyu5rs05rgh1le",
    },
    {
        name: "Patrick Mahomes",
        team: "Kansas City Chiefs",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png&w=350&h=254",
    },
    {
        name: "Aaron Rodgers",
        team: "Green Bay Packers",
        image: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png",
    },
];

// exports.get_login = (req, res, next) => {
//     res.render('login', {
//         pageTitle: 'Login',
//         users: user.fetch(),
//         user: req.session.user || '',
//     });
// };

// exports.post_login = (req, res, next) => {
//     const userNew = new user({
//         username: req.body.username,
//         password: req.body.password,
//     });
//     userNew.save();
//     req.session.user = userNew.username;
//     res.status(300).redirect("/sportid");
// };

exports.get_playersnba = (req, res, next) => {

    const cookies = req.get('Cookie') || '';
    let consultas = cookies.split('=')[1] || 0;
    consultas++;

    res.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = req.params.id || 0;

    Sportid.fetch(id).then(([rows, fieldData]) => {
        console.log(rows);

        res.render("nba", {
            pageTitle: "NBA",
            players: rows,
            consultas: consultas,
            isLoggedIn: req.session.isLoggedIn || false,
            nombre: req.session.nombre || '',
        });
    })
        .catch((err) => {
            console.log(err);
        });
};

exports.get_home = (req, res, next) => {
    res.render("home", {
        pageTitle: "Home",
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
    });
};

exports.get_preguntas = (req, res, next) => {
    res.render("preguntas", {
        pageTitle: "Preguntas",
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
    });
};

exports.get_playersnfl = (req, res, next) => {
    res.render("nfl", {
        pageTitle: "NFL",
        players: playersnfl,
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
    });
};

exports.get_nuevo = (req, res, next) => {
    res.render("nuevo", {
        pageTitle: "Nuevo",
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
        csrfToken: req.csrfToken(),
    });
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
    res.status(300).redirect("/users/nba");
};
