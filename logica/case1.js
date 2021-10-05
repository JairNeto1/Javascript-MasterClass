var id1 = 'Bata Frita'
var id2 = 'X-Salada'
var id3 = 'X-Bacon'
var id4 = 'Cachorro Quente'
var id5 = 'Refrigeante'
//var client = console.log(id5)

function pedido() {
  if (client == id1) {
    retur = 4.23
  }
  if (client == id2) {
    retur = 3.56
  }
  if (client == id3) {
    retur = 4.41
  }
  if (client == id4) {
    retur = 8.99
  } else {
    retur = 0.5
  }
}

console.log(`Total:${pedido()}`)
