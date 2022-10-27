const btnDecrRef = document.querySelector('button[data-action="decrement"]');
const btnIncrRef = document.querySelector('button[data-action="increment"]');
const spanRef = document.querySelector('#value');
const priceRef = document.querySelector('.thumb__price')

let counterValue = 1;
btnDecrRef.addEventListener('click', decrement);
btnIncrRef.addEventListener('click', increment);

function decrement(evt) {

    if (spanRef.textContent = counterValue -= 1 && counterValue >= 1) {
        priceRef.textContent -= 400 
    } 
return ; 
};

function increment(evt) {
    if (spanRef.textContent = counterValue += 1 ) {
        priceRef.textContent = 400 * counterValue
    }
return ; 
};