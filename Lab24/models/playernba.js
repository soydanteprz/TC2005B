const db = require('../util/database');

module.exports = class Playernba { // this is the class of the player
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
        return db.execute('INSERT INTO playernba (name, number, position, image) VALUES (?, ?, ?, ?)',
        [this.name, this.number, this.position, this.image]);
    }

    static fetch(id) {
        let query = 'SELECT * FROM playernba';
        if(id != 0) {
            query += ' WHERE id = ?';

        }
        return db.execute(query);
        }
}
