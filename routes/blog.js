const express = require('express');
let app = express.Router();

app.get('/', function(req, res){
    res.send("ALL blogs go here")
})

app.get('/:id', function(req, res){
    res.send("Blog param id:" + req.params.id)
})

module.exports = app