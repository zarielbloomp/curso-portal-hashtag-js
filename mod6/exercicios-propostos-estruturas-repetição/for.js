function calcularFaturamentoSemanal(hamburgueresPorDia) {
  const precoPorHamburguer = 10;
  let faturamentoTotal = 0;

  for (let i = 0; i < hamburgueresPorDia.length; i++) {
    faturamentoTotal += hamburgueresPorDia[i] * precoPorHamburguer;
  }

  return faturamentoTotal;
}

const hamburgueresPorDia = [50, 60, 40, 55, 70, 45, 65];
const faturamentoTotal = calcularFaturamentoSemanal(hamburgueresPorDia);
console.log("O faturamento total da semana é R$" + faturamentoTotal.toFixed(2));
