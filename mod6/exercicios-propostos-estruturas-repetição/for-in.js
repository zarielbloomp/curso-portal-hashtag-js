function listarItensCardapio(cardapio) {
    for (let item in cardapio) {
      console.log(`${item}: R$ ${cardapio[item]}`);
    }
  }
  
  const cardapio = {
    'Hambúrguer': 10,
    'Pizza': 15,
    'Batata Frita': 8,
    'Refrigerante': 5
  };
  
  listarItensCardapio(cardapio);
  