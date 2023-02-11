const mongoose = require("mongoose")

const schema = mongoose.Schema({
	name: String,
	content: String,
},{ collection :'users'})

module.exports = mongoose.model("Post", schema)