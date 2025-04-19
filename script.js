//lista e os botões
const lista = document.getElementById('listaNomes');
const removerItemBtn = document.getElementById('removerItem');
const limparListaBtn = document.getElementById('limparLista');

//remover o último item da lista
removerItemBtn.addEventListener('click', () => {
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
    } else {
        alert("A lista já está vazia!");
    }
});

//limpar toda a lista
limparListaBtn.addEventListener('click', () => {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
});