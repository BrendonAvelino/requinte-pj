let imagens = [
    'carrosel01.png',
    'carrosel02.png',
    'carrosel04.png'

];

let indiceAtual = 0;

function atualizarImagens() {
    const imagensDiv = document.querySelector('.imagens');
    imagensDiv.style.transform = `translateX(${-indiceAtual * 33.33}%)`;
}

function proximo() {
    if (indiceAtual < imagens.length - 3) {
        indiceAtual++;
    } else {
        indiceAtual = 0; // Volta ao início
    }
    atualizarImagens();
}

function anterior() {
    if (indiceAtual > 0) {
        indiceAtual--;
    } else {
        indiceAtual = imagens.length - 3; // Vai para o final
    }
    atualizarImagens();
}

// Inicializa as imagens no carrossel
function inicializarCarrossel() {
    const imagensDiv = document.querySelector('.imagens');
    imagensDiv.innerHTML = imagens.map((img) => `<img src="${img}" alt="Imagem">`).join('');
}

inicializarCarrossel();