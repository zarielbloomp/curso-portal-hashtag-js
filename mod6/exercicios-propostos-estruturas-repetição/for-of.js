function listarItensCardapio(cardapio) {
    for (let [item, preco] of Object.entries(cardapio)) {
      console.log(`${item}: R$ ${preco}`);
    }
  }
  
  const cardapio = {
    'Hambúrguer': 10,
    'Pizza': 15,
    'Batata Frita': 8,
    'Refrigerante': 5
  };
  
  listarItensCardapio(cardapio);
  