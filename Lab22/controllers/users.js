const User = require('../models/users');
const bcrypt = require('bcryptjs');


exports.get_login = (req, res, next) => {
    let mensaje = '';

    if (req.session.mensaje != '') {
        mensaje = req.session.mensaje;
        req.session.mensaje = '';
    }

    res.render('login', {
        mensaje: mensaje,
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
        csrfToken: req.csrfToken(),
    });
};

exports.post_login = (req, res, next) => {
    User.fetchOne(req.body.username).then(([rows, fieldData]) => {
        if (rows.length > 0) {
            bcrypt.compare(req.body.password, rows[0].password).then((doMatch) => {
                if (doMatch) {
                    req.session.isLoggedIn = true;
                    req.session.nombre = rows[0].nombre;
                    User.getPrivilegios(rows[0].id).then(([consulta_privilegios, fieldData]) => {
                        console.log(consulta_privilegios);

                        const privilegios = [];

                        for (let privilegio of consulta_privilegios) {
                            privilegios.push(privilegio.nombre);
                        }

                        console.log(privilegios);

                        req.session.privilegios = privilegios;

                        return req.session.save(err => {
                            res.redirect('/sportid/');
                        });
                    }).catch((err) => { console.log(err) });
                    
                } else {
                    req.session.mensaje = 'Contraseña incorrecta';
                    res.redirect('/users/login');
                }
            }).catch((err) => {
                console.log(err)
            });
        } else {
            req.session.mensaje = 'Usuario no encontrado';
            res.redirect('/users/login');
        }
    }).catch((err) => {
        console.log(err)
    });
};

exports.get_signup = (req, res, next) => {
    res.render('signup', {
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || '',
        csrfToken: req.csrfToken(),
    });
};

exports.post_signup = (req, res, next) => {

    const newUser = new User({
        nombre: req.body.nombre,
        username: req.body.username,
        password: req.body.password
    });

    newUser.save().then(([rows, fieldData]) => {

        req.session.mensaje = 'Usuario creado correctamente';

        res.redirect('/users/login');
    }).catch((err) => {
        console.log(err)
    });
};

exports.logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect('/users/login');
    });
};
