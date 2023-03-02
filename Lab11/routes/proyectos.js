const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {

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

                    ul {
                        display: inline-block;
                        text-align: left;
                    }

                    ul li {
                        display: inline-block;
                        width: 150px;
                        margin: 10px;
                    }
                </style>
            </head>
            <body>
                <h1>Proyectos</h1>
                <ul>
                    <li><a href="https://github.com/soydanteprz" target="_blanck">Face ID</a></li>
                    <li><a href="https://github.com/soydanteprz" target="_blanck">Telegram Bot</a></li>
                    <li><a href="https://github.com/soydanteprz" target="_blanck">Web Scraping</a></li>
                </ul>
            </body>
        </html>
    `;

    res.send(html);
});

module.exports = router;