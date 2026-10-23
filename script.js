let contadorItens = 0;

function adicionarAoCarrinho(nomeProduto) {
    contadorItens++;
    document.getElementById('contador').textContent = contadorItens;
    alert('Produto "' + nomeProduto + '" adicionado ao carrinho!\nTotal de itens: ' + contadorItens);
}