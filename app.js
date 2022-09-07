const customer = require('./Routes/customer')
const item= require('./Routes/item')
const order = require('./Routes/order')
const orderdetails = require('./Routes/orderdetails')
const express = require('express')
const app = express()
const port = 3001


app.use(express.json())

app.use('/customer',customer)
app.use('/item',item)
app.use('/order',order)
app.use('/orderdetails',orderdetails)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`JS app listening on port ${port}`)
})