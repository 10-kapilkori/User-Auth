const express = require('express')
require('./db/mongoose')

const User_Router = require('./router/User_Router')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(User_Router)

app.listen(port, () => {
    console.log('Server is up on port', port)
})
