const express = require('express')
const app = express()

app.get('/status',(req, res) => {
  res.send('Estou bem')
})

app.listen(3000, () => {
  console.log({message: 'Server Online', status: 200})
})