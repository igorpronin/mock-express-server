const express = require('express')
const app = express()
const port = 3010
const fs = require('fs');

const indexHtml = fs.readFileSync('./public/index.html').toString();

app.use(express.static('public'))

app.get('/s', (req, res) => {
  res.send(indexHtml)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
