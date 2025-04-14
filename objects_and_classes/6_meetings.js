function meetings (arrayOfStrings) {
    let weekdays = {};

    for (let day of arrayOfStrings) {
        let [weekDay, name] = day.split(' ');
        if (weekdays.hasOwnProperty(weekDay)) {
            console.log(`Conflict on ${weekDay}!`);
        }
        else {
            weekdays[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }
    
    for (let [day, name] of Object.entries(weekdays)) {
        console.log(`${day} -> ${name}`);
    }
}

 


meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);