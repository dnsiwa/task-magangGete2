//-----------import express-----------
const express = require('express')
const router = express.Router()
//-----------import module-----------
const generator = require('generate-password')

//-----------route parent-----------
router.get('/', (req, res) => {
    var password = generator.generate({
        length: 16,
        numbers: true,
        strict: true,
        lowercase: false
    });
    res.send('password generate : ' + password)
})

//-----------i dont know-----------
module.exports = router