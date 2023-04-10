const db = require('../util/database');

module.exports = class Playernfl {
    constructor(player) {
        this.name = player.name || null;
        this.team = player.team || null;
        this.image = player.image || null;
        this.id = player.id || 0;
        this.position = player.position || null;
        this.created_at = player.created_at;
    }

    save() {
        return db.execute('INSERT INTO playernfl (name, team, image) VALUES (?, ?, ?)',
        [this.name, this.team, this.image]);
    }

    static fetch(id) {
        let query = 'SELECT * FROM playernfl';
        if(id != 0) {
            query += ' WHERE id = ?';

        }
        return db.execute(query);
        }
}