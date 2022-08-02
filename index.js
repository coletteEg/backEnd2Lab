const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())



app.listen(4000,console.log("Server running on 4000"))

require('./routes')(app)

// npm init -y
// npm i express cors
// nodemon /server/index.js