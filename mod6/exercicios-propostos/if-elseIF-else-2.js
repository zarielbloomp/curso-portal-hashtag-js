function desempenhoIndividualDeVendas(desempenho){
  let tituloDeVendas = "";
  if(desempenho >=100){
    tituloDeVendas = "Excelente Desempenho";
  }else if(desempenho <=99 || desempenho === 90){
    tituloDeVendas = "Muito Bom Desempenho";
  }else if(desempenho <=89 || desempenho ===80){
    tituloDeVendas = "Bom Desempenho";
  }else if(desempenho <=79 || desempenho ===61){
    tituloDeVendas = "Desempenho Satisfatório";
  }else{
    tituloDeVendas = "Desempenho Insatisfatório";
  }
  return tituloDeVendas
}

const desempenho = 89;
const categoriaCliente = desempenhoIndividualDeVendas(desempenho);
console.log("Desempenho: " + tituloDeVendas);