const express = require("express")
const path = require("path")

const app = express()
//const router = express.Router()

app.set('view engine', 'html');

var port = process.env.port || 3000
//app.use("/views", router)

app.get("/", (req, res) => {
    //res.send("homepage by Emi")
    res.sendFile(path.join(__dirname + "/views/index.html"))
})

app.get('/smaller', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/smaller.html"))
})

app.listen(port, (req, res) => {
    console.log("listening on " + port)
    console.log(__dirname)
})