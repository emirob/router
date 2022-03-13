const express = require("express")

const app = express()

var port = process.env.port || 3000

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(port, (req, res) => {
    console.log("listening on " + port)
})