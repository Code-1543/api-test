const express = require('express')
const data = require('./data.json')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/users', (req, res) => {
    res.json(data)
})

app.listen(1111, () => console.log(`SERVER IS RUNNING`))