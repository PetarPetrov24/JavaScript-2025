function employees (arrayOfStrings) {
    let employeesInfo = {};

    for (let el of arrayOfStrings) {
        employeesInfo[el] = el.length;
    }

    for (let [name, nameLength] of Object.entries(employeesInfo)) {
        console.log(`Name: ${name} -- Personal Number: ${nameLength}`);
    }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis','Tom Holland']);