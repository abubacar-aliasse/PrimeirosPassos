/* Comentarios multilplas linnhas*/
//unica linha
let imagem = document.querySelector('img'); //ccomanado para alterar imagem
imagem.onclick = function() {
    let local = imagem.getAttribute('src');
    if(local === 'imagens/paisagem1.jpg'){
        imagem.setAttribute('src','imagens/montanha1.jpg');
    } else{
        imagem,this.setAttribute('src','imagens/paisagem1.jpg');
    }
}

let botao = document.querySelector('button');
let cabecalho = document.querySelector('h2');

function setUserName() {
    let nome = prompt('Inisra o seu nome: ');
    if(!nome) {
        setUserName();
    } else {
    localStorage.setItem('name', nome);
    cabecalho.textContent = `Seja Bem vindo, ${nome}`;
}
}
 if(!localStorage.getItem('name')) {
     setUserName();
 } else {
let storedName = localStorage.getItem('name');
cabecalho.textContent = 'Seja Bem vindo, ' + storedName;
}

botao.onclick = function() {
    setUserName();
}


