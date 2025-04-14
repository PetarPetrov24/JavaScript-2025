function solve (arrStrings, number) {
    let new_array = [];
    for (let i=0; i < arrStrings.length; i+=number) {
        new_array.push(arrStrings[i]);
    }
    
    return new_array;
}


solve(['5', '20', '31', '4', '20'], 2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);