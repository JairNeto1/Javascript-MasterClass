class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = []
  }
}

salvar() {
let produto = this.produto
}

lerDados() {
  let produto = this.id
  
  produto.nomeProduto = document.getElementById('produto').value
  produto.preco = document.getElementById('preco').value

  return produto
}

cancelar() {

}

var produto = new Produto();