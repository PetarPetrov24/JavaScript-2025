function circle_area (number) {
    let inputType = typeof(number)

    if (inputType == 'number') {
        let result = Math.pow(number, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

circle_area(5)
circle_area('name')