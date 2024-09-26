const express = require('express');

const bookDetails = [];

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Book application")
})

app.get("/books", (req, res) => {
    res.json(bookDetails);
})

app.post("/addBook", (req, res) => {
    const totalBooks = bookDetails.length;
    console.log("req... ", req.body);
    const bootData = {id: `book_${totalBooks+1}`, ...req.body};
    bookDetails.push(bootData);
    res.json(bootData);
})

app.get("/book/:id", (req, res) => {
    const {id} = req.params;
    const bookInfo = bookDetails.find(item => item.id === id);
    res.json(bookInfo);
})

app.patch("/book/:id", (req, res) => {
    const {id} = req.params;
    console.log("req... ", req.body);
    let bookIndex = bookDetails.findIndex(item => item.id === id);
    if(bookIndex !== -1){
        bookDetails[bookIndex] = {...bookDetails[bookIndex],...req.body};
    }
    res.json(bookDetails[bookIndex]);
})

app.delete("/book/:id", (req, res) => {
    const {id} = req.params;
    let bookIndex = bookDetails.findIndex(item => item.id === id);
    if(bookIndex !== -1){
        bookDetails.splice(bookIndex, 1);
    }
    res.json("deleted")
})

app.listen(8080, () => {
    console.log("Server started and running in port 8080");
})


/*
    1. List all the books
    2. Add books
    3. Update book details
    4. Delete book entry
    5. Get a book details
*/