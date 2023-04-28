const Playernba = require("../models/playernba");
const Sportid = require("../models/playernba");
const Playernfl = require("../models/playernfl");

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

exports.get_buscar = (req, res, next) => {
    Playernba.find(req.params.valor_busqueda).then(([rows, fieldData]) => {
        console.log(rows);
        res.status(200).json({ players: rows });
    })
        .catch((err) => {
            console.log(err);
        });
};

exports.get_playersnba = (req, res, next) => {

    const cookies = req.get('Cookie') || '';
    let consultas = cookies.split('=')[1] || 0;
    consultas++;

    res.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = req.params.id || 0;

    Playernba.fetch(id).then(([rows, fieldData]) => {
        console.log(rows);

        res.render("nba", {
            pageTitle: "NBA",
            players: rows,
            consultas: consultas,
            isLoggedIn: req.session.isLoggedIn || false,
            nombre: req.session.nombre || '',
            privilegios: req.session.privilegios || [],
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
    const id = req.params.id || 0;
    Playernfl.fetch(id)
        .then(([rows, fieldData]) => {
            console.log(rows);

            res.render("nfl", {
                pageTitle: "NFL",
                players: rows,
                isLoggedIn: req.session.isLoggedIn || false,
                nombre: req.session.nombre || '',
            });
        })
        .catch((err) => {
            console.log(err);
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
    console.log(req.file);




    const playernba = new Sportid({
        name: req.body.name,
        image: req.file.filename,
        position : req.body.position,
        number : req.body.number,
    });

    console.log(playernba);

    playernba.save()
        .then(([rows, fieldData]) => {
            console.log(rows);
            req.session.isLoggedIn = true;
            req.session.nombre = req.body.name;
            res.status(300).redirect("/sportid/nba");
        })
        .catch((err) => {
            console.log(err);
        });
};
