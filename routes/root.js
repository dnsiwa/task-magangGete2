//-----------import express-----------
const express = require('express')
const router = express.Router()

//-----------route parent-----------
router.get('/', (req, res) => {
    res.send('Hello World!')
})

//-----------i dont know-----------
module.exports = router