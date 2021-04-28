const container = document.getElementById('container');

function filme() {
    //Limpando o conteúdo do container
    container.innerHTML = '';
    filmeCapa();
    filmeDetalhes();
    filmeEmbed();
}

function filmeDetalhes() {
    let divDetalhes = document.createElement('div');
    divDetalhes.setAttribute('class', 'detalhes');
    divDetalhes.appendChild(filmeDescricao());
}

function filmeCapa() {
    let divCapa = document.createElement('div');
    divCapa.setAttribute('class', 'capa');
    container.appendChild(divCapa);
}

function filmeTitulo() {
    let divTitulo = document.createElement('div');
    divTitulo.setAttribute('class', 'titulo');
    return container.appendChild(divTitulo);
}

function filmeDescricao() {
    let divDescricao = document.createElement('div');
    divDescricao.setAttribute('class', 'descricao');
    return container.appendChild(divDescricao);
}

function filmeEmbed() {
    let divEmbed = document.createElement('div');
    divEmbed.setAttribute('class', 'embed');
    container.appendChild(divEmbed);
}