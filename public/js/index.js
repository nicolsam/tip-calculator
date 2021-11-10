const billValue = document.querySelector('#bill-value');
const tipAmountOutput = document.querySelector('#tip-amount-output');

const radioTip = document.getElementsByName('tip');
const valueCustom = document.querySelector("#value-custom");

const numberPeople = document.querySelector('#number-people-value');
const perPersonOutput = document.querySelector('#by-person-output');

const billResetButton = document.querySelector('#bill-reset-button');

let totalBillValue;
let tipPercentValue;
let numberPeopleValue;

let radioTipSelected;

for(let i = 0; i < radioTip.length; i++) {

    radioTip[i].addEventListener('change', () => {
        let tipPercentInput = Array.from(radioTip).find(radio => radio.checked);
        radioTipSelected = tipPercentInput;
        tipPercentValue = parseInt(tipPercentInput.value);
        calculateTip();
    })

}

billValue.addEventListener('input', () => {

    totalBillValue = billValue.value;
    calculateTip();

})

numberPeople.addEventListener('input', () => {

    numberPeopleValue = numberPeople.value;
    calculateTip();

})

valueCustom.addEventListener('input', () => {

    // Procurando radio selecionado
    let radioChecked = Array.from(radioTip).find(radio => radio.checked);

    // Caso não seja 'undefined' (nenhum foi selecionado)
    if(radioChecked === undefined) {
        console.log('LOG - Nenhum button radio foi selecionado, portanto o input "custom" está agora selecionado')
    } else {
        radioChecked.checked = false;
    }

    tipPercentValue = valueCustom.value;

    // Calculando novamente a gorjeta
    calculateTip();

})

billResetButton.addEventListener('click', () => {

    totalBillValue = 0;
    tipPercentValue = 0;
    numberPeopleValue = 0;

    radioTipSelected.checked = false;

    billValue.value = '';
    numberPeople.value = '';
    valueCustom.value = '';

    tipAmountOutput.value = 0;
    perPersonOutput.value = 0;

})

function calculateTip() {

    totalBillValue = totalBillValue ? totalBillValue : 0;
    tipPercentValue = tipPercentValue ? tipPercentValue : 0;
    numberPeopleValue = numberPeopleValue ? numberPeopleValue : 0;

    let tipAmount = ((tipPercentValue/100) * totalBillValue) / numberPeopleValue;
    tipAmount = Math.floor(parseFloat(tipAmount) * 100) / 100;

    if(!isNaN(tipAmount) && isFinite(tipAmount)) {
        tipAmountOutput.value = tipAmount.toFixed(2);

        let totalPerPerson = (totalBillValue/numberPeopleValue) + tipAmount;
        perPersonOutput.value = totalPerPerson.toFixed(2);

    }

}
