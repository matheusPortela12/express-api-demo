const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

//mongoose.connect('mongodb://demo:demo@ds231090.mlab.com:31090/beers')
let url = 'mongodb://root:root@ds237700.mlab.com:37700/carro'
mongoose.connect(url)

// configura app para usar bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/carro', require('./routes/carroRoute'))

module.exports = app