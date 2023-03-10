const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const sportidRoutes = require("./routes/sportid");
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false
}));

// Set Static Path
app.use(express.static(path.join(__dirname, "public")));

app.use("/sportid", sportidRoutes);

app.use((req, res, next) => {
    res.status(404);
    res.send("404 - Page not found");
});

app.listen(3005, () => console.log("Server ready"));
