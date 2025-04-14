/* 
Solution 1

function month_checker (integer_number) {
    if (integer_number < 1 || integer_number > 12) {
        console.log('Error!');
    }
    else if (integer_number == 1) {
        console.log('January');
    }
    else if (integer_number == 2) {
        console.log('February');
    }
    else if (integer_number == 3) {
        console.log('March');
    }
    else if (integer_number == 4) {
        console.log('April');
    }
    else if (integer_number == 5) {
        console.log('May');
    }
    else if (integer_number == 6) {
        console.log('June');
    }
    else if (integer_number == 7) {
        console.log('July');
    }
    else if (integer_number == 8) {
        console.log('August');
    }
    else if (integer_number == 9) {
        console.log('September');
    }
    else if (integer_number == 10) {
        console.log('October');
    }
    else if (integer_number == 11) {
        console.log('November');
    }
    else if (integer_number == 12) {
        console.log('December');
    }
}
*/   

// Solution 2
function month_checker (integer_number) {
    if (integer_number < 1 || integer_number > 12) {
        console.log('Error!');
    } else {
        const months = [
             'January', 'February', 'March', 'April', 'May', 'June', 
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        console.log(months[integer_number - 1]);
    }
}

month_checker(13);
month_checker(-1);
month_checker(5);
