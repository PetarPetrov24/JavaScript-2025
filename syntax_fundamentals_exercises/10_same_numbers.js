function same_numbers (num) {
    let toString = String(num);
    let sum_nums = 0;
    let first_digit = toString[0];
    let all_same = true

    for (let i = 0; i < toString.length; i++) {
        sum_nums += Number(toString[i]);
        
        if (toString[i] != first_digit) {
            all_same = false;
        }
    }
    
    if (all_same) {
        console.log('true');
    }
    else {
        console.log('false');
    }
    console.log(sum_nums);
}

same_numbers(2222222)
same_numbers(1234)