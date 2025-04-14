function solve (num1, num2) {
    let total_sum = 0;
    let numbers = '';
    for (let i = num1; i <= num2; i++) {
        numbers += i + ' ';
        total_sum += i;
    }
    
    console.log(numbers);
    console.log(`Sum: ${total_sum}`);
}

solve(5, 10);
solve(0, 26);

