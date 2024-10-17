const messageRouter = require("express").Router();

const messageController = require("../controllers/messageController");
messageRouter.get("/new", messageController.newMessageGet)

module.exports = messageRouter;