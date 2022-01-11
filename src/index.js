const express = require('express')
const app = express()
const port = 3010

app.use(express.static('public'))

app.get('/text', (req, res) => {
  console.log('/')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
