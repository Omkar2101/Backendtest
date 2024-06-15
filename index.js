require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Tesladotcom')
})
//sending an h1 

app.get('/login', (req, res) => {
    res.send('<h1>Heelo every one</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
//port cahnges to process.env.PORT
//so using the env file the server is listening on port 3000