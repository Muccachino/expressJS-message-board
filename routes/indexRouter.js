
const indexRouter = require("express").Router();


const indexController = require("../controllers/indexController");
indexRouter.get("/", indexController.indexMessageGet);

//Sign-Up
const signUpController = require("../controllers/signUpController");
indexRouter.get('/sign-up', signUpController.signUpGet);
indexRouter.post("/sign-up", signUpController.signUpPost)

//Login
const loginController = require("../controllers/loginController");
indexRouter.get("/login", loginController.loginGet)


module.exports = indexRouter;
