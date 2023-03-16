const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class User {
    constructor(user) {
        this.nombre = user.nombre || '';
        this.username = user.username || '';
        this.password = user.password || '';
    }

    save() {
        return bcrypt.hash(this.password, 12)
            .then((hashedPassword) => {
                return db.execute('INSERT INTO users (nombre, username, password) VALUES (?, ?, ?)',
                    [this.nombre, this.username, hashedPassword]);
            })
            .catch(err => {
                console.log(err);
            });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM users WHERE username = ?', [username]);
    }

}

