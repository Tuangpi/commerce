const p1 = document.querySelector("#product1");
const p2 = document.querySelector('#product2');
const p3 = document.querySelector('#product3');
const p4 = document.querySelector('#product4');
const pt1 = document.querySelector("#product-thumbnail1");
const pt2 = document.querySelector('#product-thumbnail2');
const pt3 = document.querySelector('#product-thumbnail3');
const pt4 = document.querySelector('#product-thumbnail4');
const blackScreen = document.querySelector('.black-screen');
const blackContainer = document.querySelector('.black-container');
const closeModal = document.querySelector('.close');
const blackImg = document.querySelector('.black-image');
const blackThumnailContainer = document.querySelector('.black-thumnail-container');

pt1.addEventListener('click', productClick1);
pt1.addEventListener('mouseover', showProduct1);
pt2.addEventListener('click', productClick2);
pt2.addEventListener('mouseover', showProduct2);
pt2.addEventListener('mouseout', showProduct1);
pt3.addEventListener('click', productClick3);
pt3.addEventListener('mouseover', showProduct3);
pt3.addEventListener('mouseout', showProduct1);
pt4.addEventListener('click', productClick4);
pt4.addEventListener('mouseover', showProduct4);
pt4.addEventListener('mouseout', showProduct1);
document.querySelector('.image').addEventListener('click', productClick1);
blackScreen.addEventListener('click', removeBlack);
document.querySelector('.close').addEventListener('click', removeBlack);
(function(){
    showProduct1();
})();

function productClick1(){
    blackScreen.classList.add('black');
    blackContainer.classList.add('black-flex');
    closeModal.classList.add('black');
    blackImg.classList.add('black-flex');
    blackThumnailContainer.classList.add('black-flex');
    document.querySelector('#black-product1').classList.remove('hide');
    document.querySelector('#black-product2').classList.add('hide');
    document.querySelector('#black-product3').classList.add('hide');
    document.querySelector('#black-product4').classList.add('hide');
}
function productClick2(){
    blackScreen.classList.add('black');
    blackContainer.classList.add('black-flex');
    closeModal.classList.add('black');
    blackImg.classList.add('black-flex');
    blackThumnailContainer.classList.add('black-flex');
    document.querySelector('#black-product1').classList.add('hide');
    document.querySelector('#black-product2').classList.remove('hide');
    document.querySelector('#black-product3').classList.add('hide');
    document.querySelector('#black-product4').classList.add('hide');
}
function productClick3(){
    blackScreen.classList.add('black');
    blackContainer.classList.add('black-flex');
    closeModal.classList.add('black');
    blackImg.classList.add('black-flex');
    blackThumnailContainer.classList.add('black-flex');
    document.querySelector('#black-product1').classList.add('hide');
    document.querySelector('#black-product2').classList.add('hide');
    document.querySelector('#black-product3').classList.remove('hide');
    document.querySelector('#black-product4').classList.add('hide');
}
function productClick4(){
    blackScreen.classList.add('black');
    blackContainer.classList.add('black-flex');
    closeModal.classList.add('black');
    blackImg.classList.add('black-flex');
    blackThumnailContainer.classList.add('black-flex');
    document.querySelector('#black-product1').classList.add('hide');
    document.querySelector('#black-product2').classList.add('hide');
    document.querySelector('#black-product3').classList.add('hide');
    document.querySelector('#black-product4').classList.remove('hide');
}
function removeBlack(){
    blackScreen.classList.remove('black');
    blackContainer.classList.remove('black-flex');
    closeModal.classList.remove('black');
    blackImg.classList.remove('black-flex');
    blackThumnailContainer.classList.remove('black-flex');
}
function showProduct1(){
    p1.classList.remove('hide');
    p2.classList.add('hide');
    p3.classList.add('hide');
    p4.classList.add('hide');
    pt1.classList.add('default');
}
function showProduct2(){
    p1.classList.add('hide');
    p2.classList.remove('hide');
    p3.classList.add('hide');
    p4.classList.add('hide');
    pt1.classList.remove('default');
}
function showProduct3(){
    p1.classList.add('hide');
    p2.classList.add('hide');
    p3.classList.remove('hide');
    p4.classList.add('hide');
    pt1.classList.remove('default');
}
function showProduct4(){
    p1.classList.add('hide');
    p2.classList.add('hide');
    p3.classList.add('hide');
    p4.classList.remove('hide');
    pt1.classList.remove('default');
}