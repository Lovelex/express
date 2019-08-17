const data = [{
  name: 'José', idade: 25, id: 1 
},{
  name: 'Maria', idade: 17, id: 2
},{
  name: 'Roberto', idade: 33, id: 3
}]

const usuario = [] 

data.forEach(user => {
  if( user.name === 'Maria' ){
    usuario.push(user)
  }
  if( user.idade === 25 ){
    usuario.push(user)
  }
})

console.log(usuario)