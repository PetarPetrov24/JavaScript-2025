function palindromeIntegers (positiveArray) {
    for (let num of positiveArray) {
        let numStr = String(num);
        let reveredStr = numStr.split('').reverse().join('')
        if (numStr == reveredStr) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
}

palindromeIntegers([123,323,421,121]);