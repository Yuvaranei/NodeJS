const express = require('express');
const { handleSignIn, handleSignUp} = require('../controller/user.controller');
const { ensureAuthenticated } = require('../middleware/auth');

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("Under construction!");
});


userRouter.get("/profile", ensureAuthenticated);

userRouter.post("/sign-up", handleSignUp);

userRouter.post("/sign-in",handleSignIn);

module.exports = userRouter;