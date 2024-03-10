function verificarPlaca(digito) {
  let diaRodizio = "";
  switch (digito) {
    case 1:
    case 2:
      diaRodizio = "Segunda-feira";
      break;
    case 3:
    case 4:
      diaRodizio = "Terça-feira";
      break;
    case 5:
    case 6:
      diaRodizio = "Quarta-feira";
      break;
    case 7:
    case 8:
      diaRodizio = "Quinta-feira";
      break;
    case 9:
    case 0:
      diaRodizio = "Sexta-feira";
      break;
    default:
      diaRodizio = "Dia inválido";
      break;
  }
  return diaRodizio;
}
