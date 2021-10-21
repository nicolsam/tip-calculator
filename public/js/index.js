const billValue = document.querySelector('#bill-value');
const tipAmountOutput = document.querySelector('#tip-amount-output');

const radioTip = document.getElementsByName('tip');

const numberPeople = document.querySelector('#number-people-value');
const byPersonOutput = document.querySelector('#by-person-output');

const billResetButton = document.querySelector('#bill-reset-button');

billValue.addEventListener('keyup', () => {

    let tipValue = calculateTip(billValue.value);

    tipAmountOutput.value = tipValue;

})

numberPeople.addEventListener('keyup', () => {

    let totalByPerson = calculateTotalByPerson(numberPeople.value);

    byPersonOutput.value = totalByPerson;
})

billResetButton.addEventListener('click', (e) => {

    e.preventDefault();

    billValue.value = 0;
    tipAmountOutput.value = calculateTip(billValue.value);

    numberPeople.value = 0;
    byPersonOutput.value = calculateTotalByPerson(numberPeople.value);

    for(let i = 0; i < radioTip.length; i++) {
        radioTip[i].checked = false;
    }

})

for(let i = 0; i < radioTip.length; i++) {

    radioTip[i].addEventListener('change', () => {
        let totalBill = calculateTip(billValue.value);
        tipAmountOutput.value = totalBill;
    })

}

function calculateTip(billValue) {

    let tipPercent;
    let checkedTip = searchCheckedTip();

    if(checkedTip === undefined) {
        tipPercent = 0;
    } else {
        tipPercent = checkedTip.value;
    }

    let totalBill = (tipPercent / 100) * billValue; 

    return totalBill;

}

function searchCheckedTip() {
    let checkedTip = Array.from(radioTip).find(r => r.checked);

    return checkedTip;
}

function calculateTotalByPerson(numberPeople) {

    let billByPerson = (billValue.value / numberPeople);

    if(!(isFinite(billByPerson))) {
        billByPerson = 0;
    }

    let totalByPerson = billByPerson;

    return totalByPerson;

}