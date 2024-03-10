function verificarVelocidade(velocidade) {
    const respostaAVelocidade = velocidade <= 80 ? true : false;
    return respostaAVelocidade;
}

const velocidade = 80;
const dentroDoLimite = verificarVelocidade(velocidade);
console.log(dentroDoLimite); 
