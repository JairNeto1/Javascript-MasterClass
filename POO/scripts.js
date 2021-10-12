class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = []
  }
}

salvar() {
  let produto = this.lerDados();

  if(this.validaCampo(produto)) {
    this.adiconar(produto)
  }

  this.listaTabela()
  this.cancelar()

}

listaTabela () {
  let tbody = document.getElementById('tbody')

  for(let i =0; i < this.arrayProdutos.length; i++) {
    let tr = tbody.insertRow()

    let td_id = tr.insertCell()
    let td_produto = tr.insertCell()
    let td_valor = tr.insertCell()
    let td_acoes = tr.insertCell()

    td_id.inerText =this.arrayProdutos[i].id
    td_produto.inerText =this.arrayProdutos[i].nomeProduto
    td_valor.inerText =this.arrayProdutos[i].preco

    td_id.classList.add('center')

    let imgEdit = document.createElement('img')
    imgEdit.src = 'img/edit.sgv'

    let imgDelete = document.createElement('img')
    imgDelete.src = 'img/delete.'

    td_acoes.appendChild(imgEdit)
    td_acoes.appendChild(imgDelete)

  }
}

adiciona(produto) {
  this.arrayProdutos.push(produto)
  this.id++

}

lerDados() {
  let produto = {}

  produto.id = this.id
  produto.nomeProduto = document.getElementById('produto').value
  produto.preco = document.getElementById('preco').value

  return produto
}

validaCampo(produto) {
  let msg = ''

  if (produto.nomeProduto == '') {
    msg += '- Informe o Nome do Produto \n'
  }

  if (produto.preco == '') {
    msg += '- Informe o Preço do Produto \n'
  }

  if(msg != '') {
    alert(msg)
    return false
  }

  return true
}

cancelar() {
  document.getElementById('produto').value = ''
  document.getElementById('preco').value = ''
  

}

var produto = new Produto();