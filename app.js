const express = require("express")
const path = require("path")

const app = express()
app.set('view engine', 'html');

var port = process.env.port || 3000

app.get("/", (req, res) => {
    //res.send("homepage by Emi")
    res.sendFile(path.join(__dirname + "/views/index.html"))
})

app.listen(port, (req, res) => {
    console.log("listening on " + port)
    console.log(__dirname)
})