var filmeFav = []
var trailerFav = []


function enviar() { //pega o conteúdo e analisa se é válido

    var filmeAdd = document.getElementById('upload').value //pega o link
    var filmeTrailer = document.getElementById('trailer').value //pega o link
   
if ((filmeAdd.endsWith('jpg')) || (filmeAdd.endsWith('jpeg')) || (filmeAdd.endsWith('png'))) {
    document.getElementById('mensagemErro').innerHTML = ""
    filmeFav.push(filmeAdd)
    trailerFav.push(filmeTrailer)
    limpaCampos()
    recFilmes()
} else {
    document.getElementById('mensagemErro').innerHTML = "[ERRO] Insira um link válido!"
    limpaCampos()
}
}

function recFilmes() { //coloca a imagem na tela
    var listaFilme = document.getElementById('display_image')
    listaFilme.innerHTML = ""
    for(i=0; i < filmeFav.length ; i++){
    listaFilme.innerHTML += `<a href=" ${trailerFav[i]} "><img id='imageF' width='225px' height='300px' src=" ${filmeFav[i]} "></a>`
}
}

function limpaCampos() { //limpa os inputs
    document.getElementById('upload').value = ''
    document.getElementById('trailer').value = ''
}

function limpar() {
    document.getElementById('display_image').innerHTML = ''
}
