let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function max() {
    let output1 = Math.max(...numbers);
    document.querySelector('[data-result1]').textContent = output1
}
function min() {
    let output2 = Math.min(...numbers);
    document.querySelector('[data-result2]').textContent = output2
}

let lowest = document.querySelector('[data-btn2]');
lowest.addEventListener('click', min);

let highest = document.querySelector('[data-btn1]');
highest.addEventListener('click', max);