const express = require("express");
const session = require("express-session");
const path = require("path");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();

// define assets path
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
// define view engine
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

//Read body
app.use(express.urlencoded({ extended: true }));

//session
const sessionStore = require("./session/sessionStore")
app.use(
    session({
    store: sessionStore,
    secret: process.env.COOKIE_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

const indexRouter = require("./routes/indexRouter");
app.use("/", indexRouter);


app.listen(PORT);
