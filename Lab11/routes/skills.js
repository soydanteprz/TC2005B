const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

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
                        text-align: center;
                    }

                    ul li {
                        display: inline-block;
                        width: 150px;
                        margin: 10px;
                    }
                </style>
                <body>
                    <h1>Skills</h1>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>C++</li>
                    </ul>
                </body>
            </head>
        </html>
    `;

    res.send(html);
});

module.exports = router;
