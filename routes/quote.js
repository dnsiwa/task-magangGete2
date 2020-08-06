//-----------import express-----------
const express = require('express')
const router = express.Router()
//-----------import module-----------
const movieQuote = require("popular-movie-quotes");

//-----------route parent-----------
router.get('/', (req, res) => {
    res.send(movieQuote.getAll())
})

//-----------i dont know-----------
module.exports = router