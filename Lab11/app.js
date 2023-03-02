const express = require("express");
const bodyParser = require("body-parser");
const pagoRoutes = require("./routes/pago");
const contactoRoutes = require("./routes/contacto");
const inicioRoutes = require("./routes/inicio");
const proyectosRoutes = require("./routes/proyectos");
const skillsRoutes = require("./routes/skills");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/pago', pagoRoutes);
app.use('/contacto', contactoRoutes);
app.use('/inicio', inicioRoutes);
app.use('/proyectos', proyectosRoutes);
app.use('/skills', skillsRoutes);


app.use((req, res, next) => {
    res.status(404);
    res.send("404 - Page not found");
});

app.listen(3000, () => console.log("Server ready"));
