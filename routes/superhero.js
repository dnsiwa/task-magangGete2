//-----------import express-----------
const express = require('express')
const router = express.Router()
//-----------import module-----------
const superheroes = require('superheroes')

//-----------route parent-----------
router.get('/', (req, res) => {
    const randSuperheroes = superheroes.random()
    res.send('Your superhero is ' + randSuperheroes)
})

//-----------i dont know-----------
module.exports = router