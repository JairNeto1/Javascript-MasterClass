function retornaClientes(filtroIdade) {
  var listaIdade = [];
  var listaNome = [];

  for (var i = 0; i < filtroIdade.length; i++) {
    if (filtroIdade[i].idade >= 18 && filtroIdade[i].idade <= 26) {
      listaIdade.push(filtroIdade[i]);
      listaNome.push(filtroIdade[i]);
    }
  }
  return listaNome;
}

console.log(retornaClientes(dadosClientes));