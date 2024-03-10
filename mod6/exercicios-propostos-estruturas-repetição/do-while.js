function adivinharNumeroSecreto(numeroSecreto) {
  let numeroTentadoPeloCliente;

  do {
    numeroTentadoPeloCliente = parseInt(
      prompt("Tente adivinhar o número secreto:")
    );

    if (numeroTentadoPeloCliente === numeroSecreto) {
      console.log("Parabéns, você acertou! Você ganhou um desconto.");
    } else {
      console.log("Número incorreto. Tente novamente.");
    }
  } while (numeroTentadoPeloCliente !== numeroSecreto);
}

const numeroSecreto = 99;
adivinharNumeroSecreto(numeroSecreto);
