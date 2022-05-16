require('./models/db')

const express = require('express')
const app = express()
const controller = require('./controllers/controller')

app.use(express.json())
app.use(express.urlencoded({extended: true}));


//Router
app.use('/', controller)
//

//View Engine
app.set('view engine', 'ejs')
//

app.listen(8000, () => {
    console.log('Application running')
  })