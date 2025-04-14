function evenAndOddChecker (number) {
    let even_nums = [];
    let odd_nums = [];
    let even_sum = 0;
    let odd_sum = 0;
    let numToString = String(number);
    for (num of numToString) {
        let strtoNumber = Number(num);
        if (strtoNumber % 2 == 0) {
            even_nums.push(strtoNumber);
        }
        else {
            odd_nums.push(strtoNumber);
        }
    }
    even_nums.forEach(num => even_sum += num)
    odd_nums.forEach(num => odd_sum += num)

    console.log(`Odd sum = ${odd_sum}, Even sum = ${even_sum}`);
}

evenAndOddChecker(1000435);
evenAndOddChecker(3495892137259234);