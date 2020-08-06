//-----------import express-----------
const express = require('express')
const app = express()
//-----------import file route-----------
const rootRouter = require('./routes/root')
const nameRouter = require('./routes/name')
const heroRouter = require('./routes/superhero')
const passRouter = require('./routes/password')
const quoteRouter = require('./routes/quote')
//-----------mengisi port-----------
const port = 2001

//-----------load route-----------
app.use('/', rootRouter)
app.use('/name', nameRouter)
app.use('/hero', heroRouter)
app.use('/password', passRouter)
app.use('/quote', quoteRouter)

//-----------akses port-----------
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})