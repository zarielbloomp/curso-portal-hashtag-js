function cardapioDigital(listaCardapio) {
  for (let i = 0; i < listaCardapio.length; i++) {
    console.log(listaCardapio[i].prato);
    console.log(listaCardapio[i].preco);
  }
}

const listaCardapio = [
  { prato: "Pizza", preco: 30 },
  { prato: "Hambúrguer", preco: 20 },
  { prato: "Salada", preco: 15 },
  { prato: "Massa", preco: 25 },
];
