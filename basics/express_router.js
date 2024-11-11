const express = require('express');

const userRouter = require('./router/user.router');

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Hello from server"));

app.use("/user", userRouter);

app.listen('8080', () => console.log("Server started..."));