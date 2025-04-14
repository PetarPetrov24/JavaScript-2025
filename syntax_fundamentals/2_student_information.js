function personal_info (name, age, grade) {
    let result = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
    console.log(result);
}

personal_info('Steve', 16, 2.1426);
personal_info('John', 15, 5.54678);
personal_info('Marry', 12, 6.00);

