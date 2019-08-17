const { json } = require('body-parser')
const usuario = require('./api/usuario')

const express = require('express')
const app = express()

const saudacao = require('./saucacao')

app.use(json())

app.post('/usuario', usuario.salvar)
app.get('/usuario', usuario.obter)

app.post('/corpo', (req, res) => {
  const corpo = req.body

  res.json(corpo)
})

app.get('/clientes/info', (req, res) => {
  const nome = req.query.nome
  const idade = req.query.idade

  res.json({ nome, idade })
})

app.get('/clientes/:id', (req, res) => {
  const id = req.params.id
  res.send(`Cliente com ID: ${id}`)
})

app.use('/sau',saudacao('Lucas'))

app.use('/teste',(req, res, next) => {
  console.log('Antes...')
  next()
})

app.get('/teste', (req, res, next) => {
  console.log('Durante...')

  res.json({
    data: [{
      name: 'José', idade: 25, id: 1
    }, {
      name: 'Maria', idade: 17, id: 2
    }, {
      name: 'Roberto', idade: 33, id: 3
    }]
  })

  next()
})

app.use('/teste',(req, res, next) => {
  console.log('Depois...')
  next()
})

app.listen(3000, () => {
  console.log({ message: 'Server Online', status: 200 })
})