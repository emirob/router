const express = require('express');
let app = express.Router();

app.get('/', function(req, res){
    res.send("DASH is here")
})

module.exports = app