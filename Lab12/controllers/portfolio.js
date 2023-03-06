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


exports.get_players = (req, res, next) => {
    res.render("nba", { pageTitle: "NBA", players: players });
};


exports.get_home = (req, res, next) => {
    res.render("home", { pageTitle: "Home" });
};

exports.get_preguntas = (req, res, next) => {
    res.render("preguntas", { pageTitle: "Preguntas" });
};



