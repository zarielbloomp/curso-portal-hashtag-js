function produtosEstoque(){
let produtoNoEstoque = parseFloat(prompt("Digite a quantidade do prodito presente:"));
if(produtoNoEstoque > 0){
    console.log("Produto disponivel")
}else{
    console.log("Produto esgotado!")
}
}