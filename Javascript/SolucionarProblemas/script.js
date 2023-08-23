const imagens = document.querySelectorAll('#galeria li img');

function galeriaTrocar(event){
    const principal = document.querySelector('#principal');
    const Clicada = event.currentTarget;
    principal.src = Clicada.src;
    console.log(Clicada.src);
    
}


function galeriaClique(imagem){
    imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);