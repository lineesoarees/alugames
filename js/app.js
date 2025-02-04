function alterarStatus(idJogo){
let jogoEscolhido = document.getElementById(`game-${idJogo}`);
let classDiv = jogoEscolhido.querySelector('.dashboard__item__img') ;
let classButton =jogoEscolhido.querySelector('.dashboard__item__button'); 

if (classDiv.classList.contains('dashboard__item__img--rented')) {
    classDiv.classList.remove('dashboard__item__img--rented');
    classButton.classList.remove('dashboard__item__button--return');
    classButton.textContent='Alugar';
} else {
    classDiv.classList.add('dashboard__item__img--rented');
    classButton.classList.add('dashboard__item__button--return');
    classButton.textContent='Devolver';
}
};