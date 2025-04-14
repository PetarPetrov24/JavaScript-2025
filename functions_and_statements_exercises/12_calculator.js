function calculator (numOne, operator, numTwo) {
    switch (operator) {
        case '+': return ((a, b) => (a + b).toFixed(2))(numOne, numTwo);
        case '-': return ((a, b) => (a - b).toFixed(2))(numOne, numTwo);
        case '*': return ((a, b) => (a * b).toFixed(2))(numOne, numTwo);
        case '/': return  numTwo !== 0 ? ((a, b) =>(a / b).toFixed(2))(numOne, numTwo)
        : 'Cannot divide by zero';
    }
}

console.log(calculator(5, '+', 10));
console.log(calculator(25.5, '-', 3));