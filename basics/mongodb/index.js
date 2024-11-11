const express = require('express');
const mongoose = require('mongoose');
const TelephoneDirectory = require('./model/directory.model');

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb+srv://yuvaranei:vHoxKFW5rWewcerr@cluster0.7mrl7.mongodb.net/telephoneDirectory?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log("Error connecting to MongoDB", err));


app.get('/contacts', async (req, res) => {
    const contacts = await TelephoneDirectory.find({});
    console.log("contacts,,,", contacts);
    return res.json({contacts});
})

app.post('/contacts', async (req, res) => {
    const {phoneNumber, name} = req.body;
    const contactDetails = await TelephoneDirectory.create({phoneNumber, name});
    console.log("contactDetails...", contactDetails);
    return res.json(contactDetails);
});

app.get("/contacts/:id", async (req, res) => {
    const {id} = req.params;
    console.log("id.....", typeof id);
    const book = await Book.findById(id);
    const contactDetails = await TelephoneDirectory.findById(id);
    console.log("contactDetails...", contactDetails);
    // return res.json(contactDetails);
})

app.listen(8080, () => console.log("Server started.."));
