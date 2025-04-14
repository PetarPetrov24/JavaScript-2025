function road_radar (speed, area) {
    let speed_limit;
    switch (area) {
        case 'motorway':
            speed_limit = 130;
            break;
        case 'interstate':
            speed_limit = 90;
            break;
        case 'city':
            speed_limit = 50;
            break;
        case 'residential':
            speed_limit = 20;
            break;
    }
    let difference = speed - speed_limit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`);
    }
    else {
        let status;
        if (difference <= 20) {
            status = 'speeding';
        }
        else if (difference <= 40) {
            status = 'excessive speeding';
        }
        else {
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - ${status}`);
    }
}

road_radar(40, 'city');
road_radar(21, 'residential');
road_radar(120, 'interstate');
road_radar(200, 'motorway');
