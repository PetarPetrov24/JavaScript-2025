function ages(person_age) {
    if (person_age >= 0 && person_age <= 2) {
        console.log('baby');
    } 
    else if (person_age >= 3 && person_age <= 13) {
        console.log('child');
    } 
    else if (person_age >= 14 && person_age <= 19) {
        console.log('teenager');
    } 
    else if (person_age >= 20 && person_age <= 65) {
        console.log('adult');
    } 
    else if (person_age >= 66) {
        console.log('elder');
    } 
    else {
        console.log('out of bounds');
    }
}

ages(20);
ages(1);
ages(100);
ages(-1);