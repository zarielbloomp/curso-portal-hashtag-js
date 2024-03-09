let preço = parseFloat(prompt("Digite o valor da compra:"));
if (preço > 100) {
  let valorDesconto = preço - preço * 0.1;
  console.log(`O preço de ${preço}, tera o desconto de ${valorDesconto}`);
  return valorDesconto;
} else {
  console.log(`O preço esta a baixo de R$100,00, então não tera desconto!!`)
  return preço;
}


