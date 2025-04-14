function odd_and_even_subtraction (arrNumbers) {
    let total_even_nums = 0;
    let total_odd_nums = 0;
    for (let i=0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] % 2 == 0) {
            total_even_nums += arrNumbers[i];
        }
        else {
            total_odd_nums += arrNumbers[i];
        }
    }   
    result = total_even_nums - total_odd_nums;
    console.log(result);
}

odd_and_even_subtraction([1,2,3,4,5,6]);
odd_and_even_subtraction([3,5,7,9]);
odd_and_even_subtraction([2,4,6,8,10]);