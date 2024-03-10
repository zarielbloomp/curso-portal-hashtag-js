const usuario = {
    nome: "Miguel",
    idade: 16,
    time: "flamengo"
}

const mensagem1 = "Olá torcedor do flamengo";
const mensagem2 = "Olá torcedor do vasco";
const mensagem3= "Olá torcedor do fluminense";
const mensagem4 = "Olá torcedor do bangu";
const mensagem5 = "Olá torcedor do bahia";
const mensagem6 = "Olá torcedor do vitoria";
const mensagem7 = "Olá torcedor do palmeiras";
const mensagem8 = "Olá torcedor do cruzeiro";

const maiorDeDezoito = "Não vendemos pra menores de 18"
const geral = "Olá amante do futebol";

let numeroDeRepetições = 0;


do{
    usuario.time === 'flamengo' && usuario.idade >= 18 
        ? console.log(mensagem1)
        : usuario.time === 'vasco' && usuario.idade >= 18 
        ? console.log(mensagem2)
        : usuario.idade >= 18
        ? console.log(geral)
        : console.log(maiorDeDezoito);

    numeroDeRepetições++;
} while (numeroDeRepetições < 5);