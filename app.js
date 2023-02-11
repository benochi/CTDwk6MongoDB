const express = require('express')
require('dotenv').config()
require('./helpers/init_mongodb')
const routes = require("./routes")

const app = express()
const PORT = process.env.PORT || 5000

//allows us to read request body in JSON. 
app.use(express.json())

app.use("/api", routes)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})