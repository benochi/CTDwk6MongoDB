const express = require("express")
const User = require("./models/Users") // new
const router = express.Router()

// Get all users
router.get("/users", async (req, res) => {
	const users = await User.find()
	res.send(users)
})

router.post("/users", async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      content: req.body.content,
    })
    console.log(user)
    await user.save()
    res.send(user)
  } catch (error) {
    res.send(error)
  } 
})

//Get one user by ID param URI
router.get("/users/:id", async (req, res) => {
	const user = await User.findOne({ _id: req.params.id })
	res.send(user)
})

//Update user
router.patch("/users/:id", async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id })

		if (req.body.name) {
			user.name = req.body.name
		}

		if (req.body.content) {
			user.content = req.body.content
		}

		await user.save()
		res.send(user)
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
})

router.delete("/users/:id", async (req, res) => {
	try {
		await User.deleteOne({ _id: req.params.id })
		res.status(204).send("User oblieterated!")
	} catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
})

module.exports = router