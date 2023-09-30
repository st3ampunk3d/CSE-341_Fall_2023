const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const data = require('./db/connect')

const port = process.env.port || 8080

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Z-Key')
    res.setHeader('Access-Control-Allow-Mehtods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})
app.use('/', require('./routes'));

data.initDb((err, data) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`)
        })
    }
})




