//-----------import express-----------
const express = require('express')
const router = express.Router()

//-----------route parent-----------
router.get('/', (req, res) => {
    const nama = req.query.nama
    const alamat = req.query.alamat
    if (nama == undefined || alamat == undefined){
        res.send('data yang diisi kurang lengkap')
        return
    }
    res.send('My name is ' + nama + ',I am from ' + alamat)
})

//-----------i dont know-----------  
module.exports = router