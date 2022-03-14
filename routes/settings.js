const express = require('express');
let app = express.Router();

app.get('/', function(req, res){
    res.send("settings page")
})

app.get('/profile', function(req, res){
    res.send("profile page")
})

module.exports = app