function contarDinheiro(dinheiroRecebido) {
  let dinheiroRecebido = null;
  let dinehiroTotal = 0;
  while (true) {
    dinheiroRecebido += parseFloat(
      window.prompt("Digite o valor recebido (ou '0' para encerrar):")
    );
    if (dinheiroRecebido === 0) {
      break;
    } else {
      dinehiroTotal += dinheiroRecebido;
    }
    return dinehiroTotal;
  }
}

const totalRecebido = contarDinheiro();
console.log(
  "O total de dinheiro recebido hoje é R$" + totalRecebido.toFixed(2)
);
