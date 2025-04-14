function sum (num1, num2, num3) {
    let add = num1 + num2;

    function subract (num3) {
       let result = add - num3;
       return result
       
    }

    return subract(num3)
}

sum(23, 6, 10)