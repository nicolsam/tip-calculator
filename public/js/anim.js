// Some styles

billInputContainer = document.querySelector("#bill-input-container");
numberInputContainer = document.querySelector("#number-input-container");
cannotBeZero = document.querySelector("#cannot-be-zero");

billValue.addEventListener('focusin', () => {
    billInputContainer.style.border = '2px solid hsl(172, 67%, 45%)';
})
billValue.addEventListener('focusout', () => {
    billInputContainer.style.border = '2px solid transparent';
})

valueCustom.addEventListener('focusin', () => {
    valueCustom.style.border = '2px solid hsl(172, 67%, 45%)';
})
valueCustom.addEventListener('focusout', () => {
    valueCustom.style.border = '2px solid transparent';
})

numberPeople.addEventListener('focusin', () => {
    numberInputContainer.style.border = '2px solid #ff7979';
    cannotBeZero.style.display = 'block';
})
numberPeople.addEventListener('focusout', () => {
    numberInputContainer.style.border = '2px solid transparent';
    cannotBeZero.style.display = 'none';
})