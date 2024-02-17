const usuario = {
    nome: "Miguel",
    idade: 16,
    time: "flamengo"
}

const mensagem1 = "Olá torcedor do flamengo";
const mensagem2 = "Olá torcedor do vasco";

const geral = "Olá amante do futebol";

if (usuario.time === 'flamengo' ){
    console.log(mensagem1);
}else if(usuario.time === 'vasco'){
}else {
    console.log(geral);
}