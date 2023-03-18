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
    
    static getPrivilegios(username) {
        return db.execute(`
            SELECT p.nombre
            FROM privilegios p, rol_privilegio rp, roles r, usuario_rol ur, users u
            WHERE u.username = ? AND u.id = ur.idUsuario AND ur.idRol = r.id 
                AND rp.idRol = r.id AND rp.idPrivilegio = p.id
        `, [username]);
    }

}

