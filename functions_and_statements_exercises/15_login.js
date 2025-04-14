function backwardsUsenamePassword (usernames) {
    for (i=1; i < usernames.length; i++) {
        let username = usernames[i]
        let reversedUsername = username.split('').reverse().join('')
        if (usernames[0] !== reversedUsername) {
            if (i % 4 == 0) {
                console.log(`User ${usernames[0]} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
        else {
            console.log(`User ${usernames[0]} logged in.`);
            break;
        }
    }
}

//backwardsUsenamePassword(['Acer','login','go','let me in','recA'])
//backwardsUsenamePassword(['momo','omom'])
backwardsUsenamePassword(['sunny','rainy','cloudy','sunny','not sunny'])