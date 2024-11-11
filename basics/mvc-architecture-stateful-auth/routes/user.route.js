const express = require('express');
const { handleSignIn, handleSignUp, fetchUserProfile} = require('../controller/user.controller');

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("Under construction!");
});

userRouter.post("/profile", fetchUserProfile);

userRouter.post("/sign-up", handleSignUp);

userRouter.post("/sign-in",handleSignIn);

module.exports = userRouter;