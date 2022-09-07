const customer = require('./Routes/customer')
const item= require('../Routes/item')
const express = require('express')
const app = express()
const port = 3001


app.use(express.json())

app.use('/customer',customer)
app.use('/item',item)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`JS app listening on port ${port}`)
})