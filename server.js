const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const app = express()
const path = require('path')

app.use('/assets', express.static('assets'))
app.use(favicon(path.join(__dirname, 'assets', 'img', 'favicon.ico')))
app.use(bodyParser.json({limit: '5mb'}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

const port = process.env.PORT || 8080

app.listen(port, function () {
    console.log(`Server started at port ${port}...`)
})