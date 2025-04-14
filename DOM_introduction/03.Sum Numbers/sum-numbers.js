function calc() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let output = document.getElementById('sum');

    let a = Number(firstNum.value);
    let b = Number(secondNum.value);
    
    let finalResult = a + b;
    
    output.value = finalResult;

}