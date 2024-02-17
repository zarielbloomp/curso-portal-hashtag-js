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

const geral = "Olá amante do futebol";

switch(usuario.time){
    case 'flamengo':
        console.log(mensagem1);
        break;
    case 'vasco':
        console.log(mensagem2);
        break;
    case 'fluminense':
        console.log(mensagem3);
        break;
    case 'bangu':
        console.log(mensagem4);
        break;
    case 'bahia':
        console.log(mensagem5);
        break;
    case 'vitoria':
        console.log(mensagem6);
        break
    case 'palmeiras':
        console.log(mensagem7);
        break;
    case 'cruzeiro':
        console.log(mensagem8);
        break;
        
    
}