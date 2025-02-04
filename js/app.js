let qtdJogos = 1;

function alterarStatus(idJogo){
let jogoEscolhido = document.getElementById(`game-${idJogo}`);
let classDiv = jogoEscolhido.querySelector('.dashboard__item__img') ;
let classButton =jogoEscolhido.querySelector('.dashboard__item__button'); 
let classNome = jogoEscolhido.querySelector('.dashboard__item__name').textContent;
let devolver = classDiv.classList.contains('dashboard__item__img--rented');
let palavraConfirmar = devolver == true? 'devolver' : 'alugar';


if (confirm(`Confirma que quer ${palavraConfirmar} o jogo ${classNome}?`)){
    if (devolver == true) {
        classDiv.classList.remove('dashboard__item__img--rented');
        classButton.classList.remove('dashboard__item__button--return');
        classButton.textContent='Alugar';
        qtdJogos -= 1;
        console.log(qtdJogos);
    } else {
        classDiv.classList.add('dashboard__item__img--rented');
        classButton.classList.add('dashboard__item__button--return');
        classButton.textContent='Devolver';
        qtdJogos += 1;
        console.log(qtdJogos);
    }
};
};


function checkPalindromo(){
let letras = 'subi no onibus'.replaceAll(' ', '');
let direita = (letras.substring(Math.ceil(letras.length/2), letras.length).split('').reverse().join(''));
let esquerda = letras.substring(0,Math.ceil(letras.length/2));

if (esquerda == direita){
    alert('palindromo');
}else{
    alert('ñ palindromo');
};
};

function ordenarNumeros(n1,n2,n3){
let numeros = [n1,n2,n3];
let numerosOrdenados = numeros.sort();
alert(numerosOrdenados);
};
