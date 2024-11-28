// BAR
const bar = document.getElementById('bar');
const times = document.getElementById('times');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(times){
    times.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


const increaseButtons = document.querySelectorAll('.product .quantityGroup .increase');
const decreaseButtons = document.querySelectorAll('.product .quantityGroup .decrease');

const quantity = document.querySelectorAll('.quantity');
const prices = document.querySelectorAll('.productTotal');

const totalQuantityHTML = document.querySelector('#totalQuantity');
const totalPriceHTML = document.querySelector('#totalPrice');

let amount = [
    [1, 41900],
    [1, 30000]
];


function updateBasket(){
    let totalQuantity = 0, totalPrice = 0;
    for (let i = 0; i < amount.length; i++){
        let price = amount[i][0] * amount[i][1];
        totalQuantity += amount[i][0];
        totalPrice += price;

        quantity[i].innerHTML = amount[i][0];
        prices[i].innerHTML = "Rp. " + price.toLocaleString('id-ID');
    }
    totalQuantityHTML.innerHTML = totalQuantity;
    totalPriceHTML.innerHTML = "Rp. " + totalPrice.toLocaleString('id-ID');
}

function decreaseAmount(index){
    if (amount[index][0] <= 1) return;
    amount[index][0]--;
    updateBasket();
}

function increaseAmount(index){
    if (amount[index][0] >= 999) return;
    amount[index][0]++;
    updateBasket();
}

for (let i = 0; i < increaseButtons.length; i++){
    increaseButtons[i].addEventListener('click', ()=>{
        increaseAmount(i);
    })
}

for (let i = 0; i < decreaseButtons.length; i++){
    decreaseButtons[i].addEventListener('click', ()=>{
        decreaseAmount(i);
    })
}