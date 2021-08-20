const tipSection = document.querySelector('#tip')
const billSection = document.querySelector('#bill')
const numberOfPeopleSection = document.querySelector('#number-of-people')

// const keys = document.getElementsByClassName('button');
const checkboxes = document.querySelectorAll("div.button > input");
const buttons = document.querySelectorAll("div.button > .checkbox");
const resultTip = document.getElementById('tipResult');
const resultTotal = document.getElementById('totalResult');
const inputBill = document.querySelector('.bill-input');
const inputTip = document.querySelector('.tip-input');
const inputPeople = document.querySelector('.people-input');

let tipPercentage = 0;
let bill = 0;
let person = 0;
let totalTip = 0;
let totalPerPerson = 0;

//Event Listeners
// buttons.addEventListener('click', setPercentage(this[index]))
buttons.forEach(button => {
    button.addEventListener('click', setPercentage)
});
inputBill.addEventListener('keyup', calculate);
inputPeople.addEventListener('keyup', calculate);
inputTip.addEventListener('keyup', calculate);

function calculate() {
    person = inputPeople.value
    bill = inputBill.value
    if (!tipPercentage) {
        if (bill === 0 || person === 0) {
            resultTotal.innerText = '$0.00';
        } else if (bill > 0 && person > 0 ) {
            resultTotal.innerText = ( bill / person ).toFixed(2);
        }
    } else {
        totalTip = (( bill * tipPercentage ) / 100 ) / person;
        return (resultTip.innerText = totalTip);
    }
}

function setPercentage() {
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            tipPercentage = checkboxes[i].id;
        }
    }
    calculate();
}