const express = require("express")
const app = express()

var port = process.env.port || 3000

const settings  = require('./routes/settings')
const dashboard = require('./routes/dashboard')
const blog      = require('./routes/blog')

app.use('/' , dashboard)
app.use('/blog' , blog)
app.use('/settings' , settings)


//start server baby :)
app.listen(port, (req, res) => {
    console.log("listening on " + port)
    console.log(__dirname)
})