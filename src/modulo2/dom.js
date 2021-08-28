function blue() {
  document.querySelector('.box').classList.remove('red')
  document.querySelector('.box').classList.remove('orange')
  document.querySelector('.box').classList.add('blue')
}

function red() {
  document.querySelector('.box').classList.remove('blue')
  document.querySelector('.box').classList.remove('orange')
  document.querySelector('.box').classList.add('red')
}

function orange() {
  document.querySelector('.box').classList.remove('red')
  document.querySelector('.box').classList.remove('blue')
  document.querySelector('.box').classList.add('orange')
}
