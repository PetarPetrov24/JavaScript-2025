function solve(type_of_day, age) {
    // Checking if age is between 0 and 18
    if (type_of_day == 'Weekday' && 0 <= age && age <= 18) {
        let result = '12$';
        console.log(result);
    } 
    
    // Checking if age is between 0 and 18 on weekends
    else if (type_of_day == 'Weekend' && 0 <= age && age <= 18) {
        let result = '15$';
        console.log(result);
    }
    
    // Checking if age is between 0 and 18 on holidays
    else if (type_of_day == 'Holiday' && 0 <= age && age <= 18) {
        let result = '5$';
        console.log(result);
    }

    // Checking if age is between 18 and 64 on weekdays
    else if (type_of_day == 'Weekday' && 18 <= age && age <= 64) {
        let result = '18$';
        console.log(result);
    }

    // Checking if age is between 18 and 64 on weekends
    else if (type_of_day == 'Weekend' && 18 <= age && age <= 64) {
        let result = '20$';
        console.log(result);
    }

    // Checking if age is between 18 and 64 on holidays
    else if (type_of_day == 'Holiday' && 18 <= age && age <= 64) {
        let result = '12$';
        console.log(result);
    }

    // Checking if age is between 64 and 122 on weekdays
    else if (type_of_day == 'Weekday' && 64 <= age && age <= 122) {
        let result = '12$';
        console.log(result);
    }

    // Checking if age is between 64 and 122 on weekends
    else if (type_of_day == 'Weekend' && 64 <= age && age <= 122) {
        let result = '15$';
        console.log(result);
    }

    // Checking if age is between 64 and 122 on holidays
    else if (type_of_day == 'Holiday' && 64 <= age && age <= 122) {
        let result = '10$';
        console.log(result);
    }

    // If none of the conditions match
    else {
        console.log('Error!');
    }
}

solve('Weekday', 42); 
solve('Holiday', -12);
solve('Holiday', 15); 
