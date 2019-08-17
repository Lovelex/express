function saudacao(nome){
  return (req, res, next) => {
    res.send(`Olá ${nome}`)
  }
}

module.exports = saudacao