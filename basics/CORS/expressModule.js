const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello from express server");
})

app.listen(8080, () => {
    console.log("Server connected on port 8080");
})