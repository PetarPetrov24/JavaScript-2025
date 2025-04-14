function IsValidDistance (x1, y1, x2, y2) {
    
    function distanceSquared(xA, yA, xB, yB) {
        return (xB - xA) ** 2 + (yB - yA) ** 2;
    }


    function isValid(xA, yA, xB, yB) {
        let distSquared = distanceSquared(xA, yA, xB, yB);
        return Number.isInteger(Math.sqrt(distSquared));
    }

    if (isValid(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    // Check distance from (x2, y2) to (0, 0)
    if (isValid(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    // Check distance from (x1, y1) to (x2, y2)
    if (isValid(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

IsValidDistance(3, 0, 0, 4);
console.log('---')
IsValidDistance(2, 1, 1, 1);