function subtract() {
    let fieldOne = document.getElementById('firstNumber');
    let fieldTwo = document.getElementById('secondNumber');
    let output = document.getElementById('result');

    let numOne = Number(fieldOne.value);
    let numTwo = Number(fieldTwo.value)

    let result = numOne - numTwo;
    output.textContent = result;
}