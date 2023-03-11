// const playersnba = [
//     {
//         name: 'LeBron James',
//         team: 'Los Angeles Lakers',
//         image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
//     },
//     {
//         name: 'Kevin Durant',
//         team: 'Brooklyn Nets',
//         image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png'
//     },
//     {
//         name: 'Stephen Curry',
//         team: 'Golden State Warriors',
//         image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'
//     }
// ];

const db = require('../util/database');


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



module.exports = class Sportid { // this is the class of the player
    constructor(player) {
        this.name = player.name || null; // this is the name of the player
        // null is the default value if the value is not provided
        this.number = player.number || 0; // this is the number of the player
        this.position = player.position || null; // this is the position of the player
        this.image = player.image || null; // this is the image of the player
        this.created_at = player.created_at; // this is the date of the player
        this.id = player.id || 0; // this is the id of the player
        this.team_id = player.team_id || 0; // this is the team id of the player
    }

    save() {
        return db.execute('INSERT INTO player (name, number, position, image, created_at, id, team_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [this.name, this.number, this.position, this.image, this.created_at, this.id, this.team_id]);
    }

    static fetch(id) {
        let query = 'SELECT * FROM player';
        if(id != 0) {
            query += ' WHERE id = ?';

        }
        return db.execute(query);
        }
}
