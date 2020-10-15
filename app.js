const {verify} = require('./middleware')

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require ('cookie-parser')
const app = express();

const {login , refresh} = require('./middleware')
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/login', login)
app.post('/refrsh', refresh)

app.get('/', (req, res) => res.send('Hello World!'))

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))