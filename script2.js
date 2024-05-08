function calcular() {
    const formula = document.getElementById('formula').value;
    const variables = document.getElementById('variables').value;
    let resultado;

    switch(formula) {
        case 'densidade':
            resultado = calcularDensidade(variables);
            break;
        case 'velocidade':
            resultado = calcularVelocidadeMedia(variables);
            break;
        case 'trabalho':
            resultado = calcularTrabalho(variables);
            break;
        default:
            resultado = 'Fórmula não reconhecida';
    }

    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}

function calcularDensidade(vars) {
    let dados = vars.split(',');
    let massa = parseFloat(dados[0]);
    let volume = parseFloat(dados[1]);

    return massa / volume;
}

function calcularVelocidadeMedia(vars) {
    let dados = vars.split(',');
    let distancia = parseFloat(dados[0]);
    let tempo = parseFloat(dados[1]);

    return distancia / tempo;
}

function calcularTrabalho(vars) {
    let dados = vars.split(',');
    let forca = parseFloat(dados[0]);
    let distancia = parseFloat(dados[1]);

    return forca * distancia;
}

function exibirFormula() {
    let formulaSelecionada = document.getElementById('formula').value;
    let  formulaTexto;

    switch(formulaSelecionada) {
        case 'densidade':
            formulaTexto = 'Densidade = Massa / Volume';
            break;
        case 'velocidade':
            formulaTexto = 'Velocidade Média = Distância / Tempo';
            break;
        case 'trabalho':
            formulaTexto = 'Trabalho = Força x Distância';
            break;
        default:
            formulaTexto = '';
    }

    document.getElementById('formula-texto').innerHTML = formulaTexto;
}
