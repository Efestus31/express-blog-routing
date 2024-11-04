const express = require('express')
const app = express()
app.use(express.json())


const host = process.env.HOST
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('<h1> Benvenuto nel mio blog! </h1>')
})

app.listen(port, (req, res) => {
    console.log(`Server is running at ${host}:${port}`);
})