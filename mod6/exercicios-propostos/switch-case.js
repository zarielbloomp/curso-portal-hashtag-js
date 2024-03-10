function coresDoSemaforo(semaforo){
    let resposta = ""
    switch(semaforo){
        case "vermelho":
            resposta = "Inseguro de passar, o sinal esta fechado";
            break
        case "amaerlo":
            resposta = "Tome cuidado, o sinal vai fechar logo";
            break
        case "verde":
            resposta = "Esta liberado, pode passar";
            break
        default:
            resposta = "Cor invalida"
            break
    }
    return resposta
}
const cor = "verde";
const mensagem = coresDoSemaforo(cor);
console.log(mensagem); 