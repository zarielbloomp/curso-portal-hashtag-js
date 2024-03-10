function mensagemSemaforo(corSemaforo) {
    const açãoTomada = 
    corSemaforo === "vermelho" ? "Pare!" : 
    corSemaforo === "amarelo" ? "Atenção!!" : 
    corSemaforo === "verde" ? "Pode andar" : 
    "Cor do semáforo inválida";
    
    return açãoTomada;
}

const cor = "vermelho";
const mensagem = mensagemSemaforo(cor);
console.log(mensagem); 
