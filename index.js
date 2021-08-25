//Dom selectors
const buttons = document.querySelectorAll("div.button > .checkboxLabel");
const checkboxes = document.getElementsByClassName('checkboxPercentage');
const resultTip = document.getElementById('tipResult');
const resultTotal = document.getElementById('totalResult');
const inputBill = document.querySelector('.bill-input');
const inputTip = document.querySelector('.tip-input');
const inputPeople = document.querySelector('.people-input');
const resetButton = document.querySelector('.resetButton');

// Global variables
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
inputTip.addEventListener('keyup', setPercentage);
resetButton.addEventListener('click', reset);

//Functions
function calculate() {
    let person = inputPeople.value
    let bill = inputBill.value
    if (tipPercentage === 0) {
        if (bill === 0 || person === 0) {
            resultTotal.innerText = '$0.00';
        } else if (bill > 0 && person > 0 ) {
            resultTotal.innerText = ( bill / person ).toFixed(2);
        }
    } else if(tipPercentage > 0) {
        if (bill === 0 || person === 0) {
            resultTotal.innerText = '$0.00';
            resultTip.innerText = tipPerPerson;
        } else if (bill > 0 && person > 0 ) {
            totalTip = (( bill * tipPercentage ) / 100 ).toFixed(2);
            tipPerPerson = parseInt((totalTip / person).toFixed(2));
            totalPerPerson = ( bill / person ) + tipPerPerson;
            resultTip.innerText = '$' + tipPerPerson;
            resultTotal.innerText = '$' + totalPerPerson.toFixed(2);
        }
    }
}

function setPercentage(e) {
    if (inputTip.value) {
        tipPercentage = parseInt(inputTip.value);
        calculate();
    } else {
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
            let clickedPercentage = parseInt(e.target.innerText.slice(0, -1));
            tipPercentage = clickedPercentage;
            calculate();
        }
    }

}

function reset() {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    inputPeople.value = "";
    inputTip.value = ""
    inputBill.value = "";
    resultTotal.innerText = '$0.00';
    resultTip.innerText = '$0.00';
    calculate();
}