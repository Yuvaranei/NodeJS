const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    console.log("req", req.params);
    return res.send("users page")
});

router.get("/signin", (req, res) => res.send("users signin page"));

router.get("/signup", (req, res) => res.send("users signUp page"));

module.exports = router;