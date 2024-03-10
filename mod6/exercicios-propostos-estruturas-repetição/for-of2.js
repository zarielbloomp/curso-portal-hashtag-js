function calcularTotalConta(pedido, cardapio) {
    let total = 0;
    for (let [item, quantidade] of Object.entries(pedido)) {
      total += cardapio[item] * quantidade;
    }
    return total;
  }
  
  const cardapio = {
    'Hambúrguer': 10,
    'Pizza': 15,
    'Batata Frita': 8,
    'Refrigerante': 5
  };
  
  const pedidoCliente = {
    'Hambúrguer': 2,
    'Batata Frita': 1,
    'Refrigerante': 3
  };
  
  console.log(calcularTotalConta(pedidoCliente, cardapio));
  