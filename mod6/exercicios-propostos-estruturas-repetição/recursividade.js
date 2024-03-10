function contarItensCardapio(cardapio) {
    if (Object.keys(cardapio).length === 0) {
      return 0;
    } else {
      const primeiroItem = Object.keys(cardapio)[0];
      delete cardapio[primeiroItem];
      return 1 + contarItensCardapio(cardapio);
    }
  }
  
  const cardapio = {
    'Hambúrguer': 10,
    'Pizza': 15,
    'Batata Frita': 8,
    'Refrigerante': 5
  };
  
  console.log(contarItensCardapio(cardapio));
  