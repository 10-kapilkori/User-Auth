const express = require('express')
require('./db/mongoose')
const User = require('./model/User')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/RegisterUser', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.listen(port, () => {
    console.log('Server is up on port', port)
})
