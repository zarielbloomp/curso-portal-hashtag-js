function mudarCor(elemento) {
  elemento.style.color = "red";
}

function voltarCor(elemento) {
  elemento.style.color = "black";
}

function alerta() {
  window.alert("Botão Clicado");
}

function mensagemFoco(elemento) {
  elemento.value = "Campo em foco";
}

function mensagemDesfoco(elemento) {
  elemento.value = "";
}

function trocarImagem(novaImagem) {
  document.getElementById("imagem").src = novaImagem;
}
