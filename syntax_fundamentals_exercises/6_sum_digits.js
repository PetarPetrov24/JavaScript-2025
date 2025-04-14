function sum_digits (num) {
    let string = String(num);
    let sum_digits = 0;

    for (let i = 0; i < string.length; i++) {
        sum_digits += Number(string[i])
    }
    console.log(sum_digits)
}

sum_digits(245678)
sum_digits(97561)
sum_digits(543)