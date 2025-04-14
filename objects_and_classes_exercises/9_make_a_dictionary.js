function makeADictionary(array) {
    let dictionary = {};

    for (let jsonString of array) {
        try {
            let parsedObject = JSON.parse(jsonString);

            if (typeof parsedObject === 'object' && parsedObject !== null) {
                let key = Object.keys(parsedObject)[0]; // Extract the word
                let value = Object.values(parsedObject)[0]; // Extract the definition

                dictionary[key] = value;
            }
        } catch (error) {
            console.error("Error parsing JSON:", jsonString, error.message);
        }
    }

    let sortedKeys = Object.keys(dictionary).sort();

    for (let key of sortedKeys) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }
}

makeADictionary([
    `{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}`,
    `{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}`,
    `{"Boiler":"A fuel-burning apparatus or container for heating water."}`,
    `{"Tape":"A narrow strip of material, typically used to hold or fasten something."}`,
    `{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}`
]);
