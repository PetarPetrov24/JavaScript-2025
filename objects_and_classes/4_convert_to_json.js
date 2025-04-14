function convertToJson (name, lastName, hairColor) {
    class Person {
        constructor (firstName, lastName, hairColor) {
            this.name = name;
            this.lastName = lastName;
            this.hairColor = hairColor;
        }
    }
    let obj = new Person(name, lastName, hairColor);
    let objToString = JSON.stringify(obj);
    console.log(objToString);
}

convertToJson('George', 'Jones', 'Brown');