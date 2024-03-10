function calcularTotalVendas(hamburgueresPorDia) {
    if (hamburgueresPorDia.length === 0) {
      return 0;
    } else {
      const ultimoDia = hamburgueresPorDia.pop();
      return ultimoDia * 10 + calcularTotalVendas(hamburgueresPorDia);
    }
  }
  
  const hamburgueresPorDia = [20, 15, 25, 30, 10, 18, 22];
  console.log(calcularTotalVendas(hamburgueresPorDia));
  