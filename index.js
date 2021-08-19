const tipSection = document.querySelector('#tip')
const billSection = document.querySelector('#bill')
const numberOfPeopleSection = document.querySelector('#number-of-people')

const keys = document.getElementsByClassName('button');
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

// console.log(inputPeople)

//Event Listeners
inputBill.addEventListener('keyup', calculate);
inputPeople.addEventListener('keyup', calculate);
inputTip.addEventListener('keyup', calculate);

const totalAmount = () => {
    
}

function calculate() {
    person = inputPeople.value
    bill = inputBill.value

    if (bill === 0 || person === 0) {
        resultTotal.innerText = '$0.00';
    } else if (bill > 0 && person > 0 ) {
        resultTotal.innerText = ( bill / person ).toFixed(2);
    }
}

const setPercentage = () => {

}

function calculateBill() {
    if (bill === 0 || person === 0) {
        console.log(totalPerPerson);
        return (resultTotal.innerText = '$0.00');
    } else {
        totalPerPerson = bill / person;
        console.log(totalPerPerson);
        return (resultTotal.innerText = totalPerPerson);
    }
}