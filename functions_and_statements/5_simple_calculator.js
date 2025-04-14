function calculator (n, m, operator) {
    operatorsMapping = {
        'multiply': (n, m) => n * m,
        'divide': (n, m ) => n / m,
        'add': (n, m) => n + m,
        'subtract': (n, m) => n - m
    }

    console.log(operatorsMapping[operator](n, m));
}

calculator(5, 5, 'multiply');
calculator(40, 8, 'divide');
calculator(12, 19, 'add');
calculator(50, 13, 'subtract');