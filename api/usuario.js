function salvar(req, res){
  res.send('usuario > salvar')
}

function obter(req, res){
  res.send('usuario > obter')
}

module.exports = { salvar, obter }