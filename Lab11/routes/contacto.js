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
                        width: 50%
                        padding: 20px;

                    }

                    .social {
                        display: inline-block;
                        text-align: left;
                    }

                    .social a {
                        display: inline-block;
                        width: 150px;
                        margin: 10px;
                    }


                </style>
            </head>
            <body>
            <h1>Contactame bro</h1>
            <div class="social">
                <a href="https://github.com/soydanteprz" target="_blanck">Github</a>
                <a href="https://www.linkedin.com/in/danteperez/" target="_blanck">Linkedin</a>
                <a href="https://www.instagram.com/soydanteprz/" target="_blanck">Instagram</a>
            </div>
        </body>
    </html>
    `;

    res.send(html);
});

router.post('/', (req, res, next) => {
    
        res.send("Gracias por tu mensaje bro");
    }
);

module.exports = router;
