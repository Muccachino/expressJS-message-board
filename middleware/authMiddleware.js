const isAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }

    res.redirect("/login");
}

const isUser = (req, res, next) => {
    if(req.user.role === "user") {
        return next();
    }
    res.render("not-authorized", {
        title: "Not authorized",
        message: "Sorry, you are not authorized to view this content!",
    })
}

const isMemberOrAdmin = (req, res, next) => {
    if(req.user.role === "members" || req.user.role === "admin") {
        return next();
    }
    res.render("not-authorized", {
        title: "Not authorized",
        message: "Sorry, you are not authorized to view this content!",
    })
}

const isAdmin = (req, res, next) => {
    if(req.user.role === "admin") {
        return next();
    }

    res.render("not-authorized", {
        title: "Not authorized",
        message: "Sorry, you are not authorized to view this content!",
    })
}

module.exports = {isAuth, isUser, isMemberOrAdmin, isAdmin};