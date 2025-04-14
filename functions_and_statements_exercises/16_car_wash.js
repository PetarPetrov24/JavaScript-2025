function carWash (arrayCommands) {
    let value = 0;
    for (i=0; i < arrayCommands.length; i++) {
        switch (arrayCommands[i]) {
            case 'soap': value = ((a) => a + 10)(value);
            break;

            case 'water': value = ((a) => a  * 1.20)(value);
            break;

            case 'vacuum cleaner': value = ((a) => a * 1.25)(value);
            break;

            case 'mud': value = ((a) => a * 0.90)(value);
            break;
        }
    }

    console.log(`This car is ${value.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])