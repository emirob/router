const express = require("express")

const app = express()
app.set('view engine', 'html');

var port = process.env.port || 3000

app.get("/", (req, res) => {
    res.send("homepage by Emi")
})

app.listen(port, (req, res) => {
    console.log("listening on " + port)
})