const p1 = document.querySelector("#product1");
const p2 = document.querySelector('#product2');
const p3 = document.querySelector('#product3');
const p4 = document.querySelector('#product4');
const blackScreen = document.querySelector('.black-screen');

p1.addEventListener('click', productClick);
p2.addEventListener('click', productClick);
p3.addEventListener('click', productClick);
p4.addEventListener('click', productClick);
blackScreen.addEventListener('click', removeBlack);

function productClick(){
    blackScreen.classList.add('black'); 
}
function removeBlack(){
    blackScreen.classList.remove('black');
}