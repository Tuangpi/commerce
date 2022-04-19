const p1 = document.querySelector("#product1");
const p2 = document.querySelector('#product2');
const p3 = document.querySelector('#product3');
const p4 = document.querySelector('#product4');
const blackScreen = document.querySelector('.black-screen');
const blackContainer = document.querySelector('.black-container');
const closeModal = document.querySelector('.close');
const blackImg = document.querySelector('.black-image');
const blackThumnailContainer = document.querySelector('.black-thumnail-container');

p1.addEventListener('click', productClick);
p2.addEventListener('click', productClick);
p3.addEventListener('click', productClick);
p4.addEventListener('click', productClick);
blackScreen.addEventListener('click', removeBlack);

function productClick(){
    blackScreen.classList.add('black');
    blackContainer.classList.add('black-flex');
    closeModal.classList.add('black');
    blackImg.classList.add('black');
    blackThumnailContainer.classList.add('black-flex');
}
function removeBlack(){
    blackScreen.classList.remove('black');
    blackContainer.classList.remove('black-flex');
    closeModal.classList.remove('black');
    blackImg.classList.remove('black');
    blackThumnailContainer.classList.remove('black-flex');
}