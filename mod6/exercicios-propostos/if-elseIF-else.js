function categoriasCliente() {
  let tituloClienteFidelidade = "";
  if (clienteFidelidade >= 85) {
    tituloClienteFidelidade = "Cliente Premium";
  } else if (clienteFidelidade >= 50) {
    tituloClienteFidelidade = "Cliente Regular";
  } else {
    tituloClienteFidelidade = "CLiente Comum";
  }
  return tituloClienteFidelidade;
}

const pontuacaoCliente = 75;
const categoriaCliente = categoriasCliente(pontuacaoCliente);
console.log("Categoria do cliente: " + categoriaCliente);