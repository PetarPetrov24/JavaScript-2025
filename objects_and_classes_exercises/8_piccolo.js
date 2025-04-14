function parkingLot (carNumberPlates) {
    let numberPlates = {};

    for (let data of carNumberPlates) {
        [direction, carNumber] = data.split(', ');
        if (direction == 'IN') {
            numberPlates[carNumber] = null;
        }
        else if (direction == 'OUT') {
            delete numberPlates[carNumber];
        }
    }

    let parkedCars = Object.keys(numberPlates).sort();

    
    if (parkedCars.length == 0) {
        console.log('Parking Lot is Empty');
    }
    else {
        console.log(parkedCars.join('\n'));
    }
        
}


parkingLot(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])

parkingLot(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA',
    
    'OUT, CA2866HI',
    
    'IN, CA9876HH',
    
    'IN, CA2822UU'])