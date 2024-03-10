const readline = require("readline");

function entregas(listaDeEntregas) {
  let entregas = 0;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function fazerEntrega(entrega) {
    rl.question(
      `Você fez a entrega no ${entrega.onde}${entregas}, de conteúdo ${entrega.conteudo}${entregas}? (Sim/Não) `,
      (resposta) => {
        if (resposta.toLowerCase() === "sim") {
          console.log(
            `A entrega no ${entrega.onde}${entregas}, de conteúdo ${entrega.conteudo}${entregas}, foi concluída`
          );
          proximaEntrega();
        } else if (resposta.toLowerCase() === "nao") {
          console.log(
            `Você não fez a entrega no ${entrega.onde}${entregas}, de conteúdo ${entrega.conteudo}${entregas}`
          );
          proximaEntrega();
        } else {
          console.log("Por favor, responda com 'Sim' ou 'Não'");
          fazerEntrega(entrega);
        }
      }
    );
  }

  function proximaEntrega() {
    entregas++;
    if (entregas < listaDeEntregas.length) {
      fazerEntrega(listaDeEntregas[entregas]);
    } else {
      console.log("Acabou todas as entregas");
      rl.close();
    }
  }

  fazerEntrega(listaDeEntregas[entregas]);
}

let listaDeEntregas = [
  { onde: "Bahia", conteudo: "Lanche" },
  { onde: "Zimbabue", conteudo: "agua" },
  { onde: "Village", conteudo: "luz" },
  { onde: "Zumbi", conteudo: "Coca(ina)" },
];

entregas(listaDeEntregas);
