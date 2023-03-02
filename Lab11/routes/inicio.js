const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {

    let html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <style>
                body {
                    display: inline-block;
                    margin: 0px auto;
                    text-align: center;
                    width: 50%
                    padding: 20px;
                }
            </style>
        </head>
        <body>
            <section class="hero align-items-stretch">
                <div class="hero-principal d-flex flex-column justify-content-center align-items-center">
                    <img class="hero-imagen-desarrollador rounded-circle" src="imagenes/PortraitPhoto.jpg"
                        alt="Foto Dante" />
                    <h1>Hola, soy Dante Pérez</h1>
                    <h2>
                        Estudiante de ITC
                    </h2>
                </div>
                <div class="hero-inferior">
                <img class="hero-inferior-imagen img-fluid" src="imagenes/DALLE.png" alt="Dalle" />
                </div>
            </section>
            <section id="sobre-mi" class="sobre-mi seccion-oscura">
                <div class="contenedor">
                    <h2 class="seccion-titulo">Conoceme bro</h2>
                    <p class="seccion-texto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras laoreet, odio eget fringilla scelerisque, sem purus
                    fringilla mauris, nec ultricies nisl nisl sit amet dolor.
                    Donec et venenatis nunc, vel hendrerit ex. Vestibulum sapien
                    ipsum, rutrum eget est et, ultricies sagittis urna. In non
                    volutpat est. Vestibulum diam sapien, ultrices et euismod
                    at, ultrices ut odio. Nullam in massa et elit ultrices
                    suscipit. Proin lacinia leo ac posuere placerat.
                    </p>
                </div>
            </section>
            </body>
    </html>
    `;

    res.send(html);
});



module.exports = router;