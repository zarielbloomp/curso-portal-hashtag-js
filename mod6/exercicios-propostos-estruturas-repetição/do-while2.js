function gerenciarEstoque() {
  const itensEmFalta = [];

  do {
    const novoItem = prompt(
      "Digite o item em falta (ou digite 'fim' para encerrar):"
    );

    if (novoItem.toLowerCase() !== "fim") {
      itensEmFalta.push(novoItem);
      console.log(`${novoItem} adicionado ao estoque.`);
    }
  } while (novoItem.toLowerCase() !== "fim");

  console.log("Processo de adição de itens ao estoque encerrado.");
  console.log("Itens em falta adicionados ao estoque:");
  console.log(itensEmFalta);
}

gerenciarEstoque();
