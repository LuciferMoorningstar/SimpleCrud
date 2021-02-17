const express = require('express')
const mongoose = require('mongoose')
//const url = 'mongodb://localhost/crud'
//const url = "mongodb://Chloe:ChloeDecker@<hostname>/<dbname>?ssl=true&replicaSet=atlas-1rdrbs-shard-0&authSource=admin&retryWrites=true&w=majority";
const url = "mongodb+srv://Chloe:ChloeDecker@cluster0.wmvfr.mongodb.net/crud_app?retryWrites=true&w=majority"
var busboy = require('connect-busboy');

const app = express()
app.use(busboy());
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(express.static(__dirname + '/public'));

const route = require('./routes/route')
app.use('/',route)

app.listen(3000, () => {
    console.log('Server started')
})
