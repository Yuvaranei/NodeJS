const express = require('express');
// const mongodb = require('mongodb');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route');

mongoose.connect('mongodb+srv://yuvaranei:vHoxKFW5rWewcerr@cluster0.7mrl7.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0')
.then(() => console.log("Connected to DB"))
.catch((err) => console.log("Unable to connect to DB", err));

const app = express();

app.use(express.json());

app.use('/user', userRouter); // Why should I put app.use here ?

app.listen(8080, () => {
    console.log("Server started and running in port 8080");
})