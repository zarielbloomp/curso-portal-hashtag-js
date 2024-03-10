const usuario = {
  nome: "Miguel",
  idade: 16,
  time: "flamengo",
};

const mensagem1 = "Olá torcedor do flamengo";
const mensagem2 = "Olá torcedor do vasco";
const mensagem3 = "Olá torcedor do fluminense";
const mensagem4 = "Olá torcedor do bangu";
const mensagem5 = "Olá torcedor do bahia";
const mensagem6 = "Olá torcedor do vitoria";
const mensagem7 = "Olá torcedor do palmeiras";
const mensagem8 = "Olá torcedor do cruzeiro";

const geral = "Olá amante do futebol";

if (usuario.time === "flamengo") {
  console.log(mensagem1);
} else if (usuario.time === "vasco") {
  console.log(mensagem2);
} else if (usuario.time === "fluminense") {
  console.log(mensagem3);
} else if (usuario.time === "bangu") {
  console.log(mensagem4);
} else if (usuario.time === "bahia") {
  console.log(mensagem5);
} else if (usuario.time === "vitoria") {
  console.log(mensagem6);
} else if (usuario.time === "palmeiras") {
  console.log(mensagem7);
} else if (usuario.time === "cruzeiro") {
  console.log(mensagem8);
} else {
  console.log(geral);
}
