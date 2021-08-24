//Dom selectors
const buttons = document.querySelectorAll("div.button > .checkbox");
const resultTip = document.getElementById('tipResult');
const resultTotal = document.getElementById('totalResult');
const inputBill = document.querySelector('.bill-input');
const inputTip = document.querySelector('.tip-input');
const inputPeople = document.querySelector('.people-input');
const resetButton = document.querySelector('.resetButton');

let tipPercentage = 0;
let tipPerPerson = 0;
let bill = 0;
let person = 0;
let totalTip = 0;
let totalPerPerson = 0;

//Event Listeners
buttons.forEach(button => {
    button.addEventListener('click', setPercentage)
});
inputBill.addEventListener('keyup', calculate);
inputPeople.addEventListener('keyup', calculate);
inputTip.addEventListener('keyup', calculate);
resetButton.addEventListener('click', reset);

function calculate() {
    person = inputPeople.value
    bill = inputBill.value
    if (tipPercentage === 0) {
        if (bill === 0 || person === 0) {
            resultTotal.innerText = '$0.00';
        } else if (bill > 0 && person > 0 ) {
            resultTotal.innerText = ( bill / person ).toFixed(2);
        }
    } else if(tipPercentage > 0) {
        totalTip = (( bill * tipPercentage ) / 100 ).toFixed(2);
        tipPerPerson = parseInt((totalTip / person).toFixed(2));
        totalPerPerson = ( bill / person ) + tipPerPerson;
        resultTip.innerText = tipPerPerson;
        resultTotal.innerText = totalPerPerson.toFixed(2);
    }
}

function setPercentage(e) {
    let clickedPercentage = parseInt(e.target.innerText.slice(0, 2));
    tipPercentage = clickedPercentage;
    calculate();
}

function reset() {
    inputPeople.value = "";
    inputBill.value = "";
    bill = 0;
    person = 0;
    totalTip = 0;
    tipPercentage = 0;
    calculate();
}