const playersnba = [
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
        this.name = player.name; // this is the name of the player
        this.team = player.team; // this is the team of the player
        this.image = player.image; // this is the image of the player
    }

    save() {
        playersnba.push(this); // this is the array of players
    }

    static fetchAll() {
        return playersnba; // this is the array of players
    }
}
