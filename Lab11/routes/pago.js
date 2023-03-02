const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {

    console.log(req.body);

    let html = `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body {
                        display: inline-block;
                        margin: 0px auto;
                        text-align: center;
                    }

                    form {
                        display: inline-block;
                        text-align: left;
                    }

                    label {
                        display: inline-block;
                        width: 150px;
                    }

                    input {
                        display: inline-block;
                        width: 200px;
                    }

                    input[type="submit"] {
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
            <h1>Formulario de pago</h1>
            <form action="/pago" method="POST">
                <label for="nombre-tarjeta">Nombre en la Tarjeta:</label>
                <input type="text" id="nombre-tarjeta" name="nombre-tarjeta"><br>

                <label for="numero-tarjeta">Número de Tarjeta:</label>
                <input type="text" id="numero-tarjeta" name="numero-tarjeta"><br>

                <label for="fecha-expiracion">Fecha de Expiración:</label>
                <input type="text" id="fecha-expiracion" name="fecha-expiracion"><br>

                <label for="cvv">CVV:</label>
                <input type="text" id="cvv" name="cvv"><br>

                <label for="monto">Monto a Pagar:</label>
                <input type="text" id="monto" name="monto"><br>

                <input type="submit" value="Pagar">
            </form>
        </body>
    </html>
    `;

    res.send(html);
});


// recibe los datos del formulario de pago y los imprime en otra pagina
router.post('/', (req, res, next) => {
    console.log(req.body); // req.body contiene los datos del formulario

    const datos = req.body;
    let html = `
    <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Gracias por tu pago</h1>
                <p>Nombre en la Tarjeta: ${datos["nombre-tarjeta"]}</p>
                <p>Número de Tarjeta: ${datos["numero-tarjeta"]}</p>
                <p>Fecha de Expiración: ${datos["fecha-expiracion"]}</p>
                <p>CVV: ${datos["cvv"]}</p>
                <p>Monto a Pagar: ${datos["monto"]}</p>
            </body>
        </html>
    `;

    res.send(html);

    const fs = require('fs'); 
    fs.appendFile('pago.txt', JSON.stringify(req.body), (err) => { 
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
    });
});


module.exports = router;