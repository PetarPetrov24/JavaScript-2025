function passwordValidator (string) {
    let errors = [];

    const validations = [
        { test: string.length >= 6 && string.length <= 10, message: "Password must be between 6 and 10 characters" },
        { test: /^[a-zA-Z0-9]+$/.test(string), message: "Password must consist only of letters and digits" },
        { test: /\d.*\d/.test(string), message: "Password must have at least 2 digits" }
    ];

    validations.forEach(validation => {
        if (!validation.test) {
            errors.push(validation.message);
        }
    })

    if (errors.length > 0) {
        console.log(errors.join('\n'));
    }
    else {
        console.log('Password is valid');
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');