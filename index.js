const express = require('express')
const data = require('./data.json')
const app = express()

app.use(express.json())

app.get('/api/users', (req, res) => {
    res.json(data)
})

app.listen(1111, () => console.log(`SERVER IS RUNNING`))