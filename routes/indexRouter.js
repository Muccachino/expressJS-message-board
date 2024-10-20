const passport = require("passport");
const {isMemberOrAdmin} = require("../middleware/authMiddleware");

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
indexRouter.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
}))

//Logout
indexRouter.get("/logout", (req, res) => {
    req.logout((err) => {
        if(err) {
            return next(err);
        }
        res.redirect("/login");
    });
})

//Become Member
const becomeMemberController = require("../controllers/becomeMemberController");

indexRouter.get("/member-codes",isMemberOrAdmin, becomeMemberController.memberCodesGet)
indexRouter.get("/become-member", becomeMemberController.becomeMemberGet)
indexRouter.post("/become-member", becomeMemberController.becomeMemberPost)


module.exports = indexRouter;
